# Stripe Payment 400 Error Debugging Guide

## Common Causes of 400 Bad Request Error:

### 1. **Invalid Payment Method**
- The payment method attached to the PaymentIntent may be invalid
- Card details might be incomplete or incorrect

### 2. **Payment Intent Status**
- PaymentIntent might already be confirmed
- PaymentIntent might be in an invalid state

### 3. **Missing Required Parameters**
- Client secret might be malformed
- Payment method not properly attached

### 4. **Environment Issues**
- Wrong API keys (test vs live)
- API version mismatch

## Debugging Steps:

### Step 1: Check Browser Console
Look for these specific error messages:
```
- "Your card was declined"
- "Payment method is invalid"
- "PaymentIntent has already been confirmed"
```

### Step 2: Verify Environment Variables
Make sure your `.env.local` contains:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### Step 3: Check Network Tab
- Look at the payment intent creation request
- Verify the amount is correct (in cents)
- Check if client_secret is properly returned

### Step 4: Test with Stripe Test Cards
Use these test card numbers:
- **Success**: 4242 4242 4242 4242
- **Declined**: 4000 0000 0000 0002
- **Insufficient funds**: 4000 0000 0000 9995

## Quick Fixes:

1. **Clear browser cache and cookies**
2. **Use incognito/private browsing mode**
3. **Check if using test keys in development**
4. **Ensure amount is an integer (in cents)**
5. **Verify card details are complete**

## If Error Persists:
Check the Stripe Dashboard logs for more detailed error information.
