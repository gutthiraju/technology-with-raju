
# Technology With Raju: Backend Security Architecture (Python/FastAPI)

As requested by the Senior Architect, here is the production-ready backend specification.

## 1. Core Principles
- **No Direct Video Links**: Videos are proxied or served via short-lived signed URLs (AWS CloudFront / Google Signed URLs).
- **Idempotency**: Razorpay `payment_id` is unique in DB. Attempting to use the same ID twice will be rejected.
- **Stateless Auth**: JWT for scale, but with a "Blacklist" in Redis for logged-out tokens.

## 2. API Endpoints
- `POST /auth/login`: Validates credentials -> Returns `{ access_token, refresh_token, user }`.
- `POST /payments/create-order`: 
    - Input: `course_id`.
    - Logic: Verify course price in DB -> Use Razorpay SDK to create order -> Store `order_id` in DB as `PENDING`.
    - Output: `order_id`, `amount`, `currency`.
- `POST /payments/verify`:
    - Input: `razorpay_payment_id`, `razorpay_order_id`, `razorpay_signature`.
    - Logic: 
        1. Perform HMAC-SHA256 signature verification.
        2. Verify with Razorpay API that status is `captured`.
        3. Check DB if `razorpay_payment_id` was already used (prevent replay).
        4. Update User record: Add `course_id` to `purchased_courses`.
        5. Mark Order as `COMPLETED`.
- `GET /content/video/{lesson_id}`:
    - Headers: `Authorization: Bearer <JWT>`.
    - Logic: 
        1. Decode JWT to get `user_id`.
        2. Check DB if `user_id` has purchased the parent course.
        3. Generate a 5-minute signed URL for the video resource.
    - Output: Redirect to signed URL or proxy stream.

## 3. Recommended Tech Stack
- **Framework**: FastAPI (high performance, async).
- **ORM**: SQLAlchemy or Tortoise ORM.
- **Database**: PostgreSQL (Structured data for courses/orders).
- **Cache**: Redis (For session blacklisting and rate limiting).
- **Payment**: Razorpay Python SDK (`razorpay`).

## 4. Environment Variables (Critical)
- `RAZORPAY_KEY_ID`: Shared with frontend.
- `RAZORPAY_SECRET`: **BACKEND ONLY**.
- `JWT_SECRET`: Used for signing tokens.
- `DB_URL`: Secure Postgres connection string.

## 5. Deployment
- **Frontend**: Vercel / Netlify.
- **Backend**: AWS Lambda / GCP Cloud Run / Render (for FastAPI).
- **Media**: S3 / Cloudflare R2 + CloudFront (Signed URLs).
