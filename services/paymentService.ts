
import { RazorpayResponse } from '../types';
import { RAZORPAY_KEY_ID } from '../constants';

export const paymentService = {
  /**
   * STEP 1: Request Order Creation from Python Backend
   * The frontend NEVER creates an order directly via Razorpay SDK.
   */
  createOrder: async (courseId: string, amount: number) => {
    console.log(`[BACKEND CALL] POST /api/payments/create-order { courseId: ${courseId}, amount: ${amount} }`);
    // Simulation: Backend generates a unique order_id using its Secret Key
    await new Promise(r => setTimeout(r, 500));
    return {
      order_id: `order_mock_${Math.random().toString(36).substr(2, 9)}`,
      amount: amount * 100, // in paisa
      currency: "INR"
    };
  },

  /**
   * STEP 2: Trigger Razorpay Checkout
   */
  processPayment: (orderData: any, onSuccess: (resp: RazorpayResponse) => void, onCancel: () => void) => {
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Technology with Raju",
      description: "Secure Course Purchase",
      order_id: orderData.order_id,
      handler: function(response: RazorpayResponse) {
        onSuccess(response);
      },
      prefill: {
        name: "Raju Student",
        email: "student@example.com"
      },
      theme: { color: "#6366f1" }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  },

  /**
   * STEP 3: Verify Signature on Backend
   * MANDATORY: The frontend only sends the payload. Backend validates using SHA256.
   */
  verifyOnBackend: async (payload: RazorpayResponse, courseId: string) => {
    console.log(`[BACKEND CALL] POST /api/payments/verify { ...payload, courseId: ${courseId} }`);
    // In production, the backend:
    // 1. Generates expected signature: hmac_sha256(order_id + "|" + payment_id, SECRET_KEY)
    // 2. Compares with payload.razorpay_signature
    // 3. Marks course as purchased for this user in DB
    
    await new Promise(r => setTimeout(r, 1000));
    return { success: true, message: "Payment verified successfully" };
  }
};
