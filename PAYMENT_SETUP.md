# 💳 Payment Integration Setup Guide - Obra de Adulam

## 🎯 Overview

Your donation page now supports three payment methods:
1. **Zelle** - Direct bank transfers (no fees)
2. **Apple Pay** - Secure mobile payments (requires Stripe)
3. **PayPal** - Multiple payment options

## 🔧 Setup Instructions

### 1. Zelle Setup (Ready to Use)

**Current Implementation:**
- ✅ Already configured in the code
- ✅ Uses email: `obradeadulam@gmail.com`
- ✅ Copies email to clipboard automatically

**To customize:**
1. Update the email in `src/components/DonatePage.js` line ~45:
   ```javascript
   navigator.clipboard.writeText('your-church-email@gmail.com');
   ```

**Requirements:**
- Your church's email must be registered with Zelle
- Same email used for your bank account

### 2. Apple Pay Setup (Requires Stripe)

**Step 1: Create Stripe Account**
1. Go to [stripe.com](https://stripe.com)
2. Create a business account
3. Complete verification process

**Step 2: Install Stripe Dependencies**
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

**Step 3: Add Stripe Keys to .env**
```env
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key_here
REACT_APP_STRIPE_SECRET_KEY=sk_test_your_stripe_key_here
```

**Step 4: Update Apple Pay Handler**
Replace the placeholder in `src/components/DonatePage.js`:

```javascript
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const handleApplePayDonation = async () => {
  const stripe = await stripePromise;
  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: `${window.location.origin}/donate/success`,
    },
  });
};
```

### 3. PayPal Setup

**Step 1: Create PayPal Business Account**
1. Go to [paypal.com/business](https://paypal.com/business)
2. Create a business account
3. Verify your account

**Step 2: Create Donation Button**
1. Go to PayPal Dashboard → Tools → PayPal Buttons
2. Create a "Donate" button
3. Copy the button ID

**Step 3: Update PayPal Handler**
Replace `YOUR_BUTTON_ID` in `src/components/DonatePage.js`:

```javascript
const handlePayPalDonation = () => {
  const amount = getFinalAmount();
  const paypalUrl = `https://www.paypal.com/donate/?hosted_button_id=YOUR_ACTUAL_BUTTON_ID&amount=${amount}`;
  window.open(paypalUrl, '_blank');
};
```

## 🎨 Customization Options

### Zelle Customization
```javascript
// Customize Zelle message
const handleZelleDonation = () => {
  const zelleInfo = {
    email: 'obradeadulam@gmail.com',
    phone: '(510) 555-0123', // Optional
    name: 'Obra de Adulam Church'
  };
  
  const message = `Zelle información copiada:\n\nEmail: ${zelleInfo.email}\nNombre: ${zelleInfo.name}\n\nEnvía tu donación de $${getFinalAmount()} a esta dirección.`;
  
  navigator.clipboard.writeText(zelleInfo.email);
  alert(message);
};
```

### Apple Pay Customization
```javascript
// Add Apple Pay styling
const applePayButtonStyle = {
  width: '100%',
  height: '50px',
  borderRadius: '12px',
  border: 'none',
  backgroundColor: '#000',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600'
};
```

### PayPal Customization
```javascript
// Add amount to PayPal URL
const handlePayPalDonation = () => {
  const amount = getFinalAmount();
  const currency = 'USD';
  const paypalUrl = `https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID&amount=${amount}&currency_code=${currency}`;
  window.open(paypalUrl, '_blank');
};
```

## 🔒 Security Considerations

### Environment Variables
- ✅ Never commit API keys to version control
- ✅ Use `.env` file for all sensitive data
- ✅ Add `.env` to `.gitignore`

### PCI Compliance
- ✅ Stripe handles PCI compliance for Apple Pay
- ✅ PayPal handles security for their payments
- ✅ Zelle uses bank-level security

## 📱 Mobile Optimization

### Apple Pay Requirements
- iOS 10.1+ required
- Safari browser on iOS
- Valid SSL certificate (HTTPS)

### Responsive Design
- ✅ All payment methods work on mobile
- ✅ Touch-friendly button sizes
- ✅ Optimized for small screens

## 🧪 Testing

### Test Mode Setup
```javascript
// Add test mode toggle
const [isTestMode, setIsTestMode] = useState(false);

const getTestModeConfig = () => {
  if (isTestMode) {
    return {
      zelleEmail: 'test@example.com',
      stripeKey: process.env.REACT_APP_STRIPE_TEST_KEY,
      paypalButtonId: 'TEST_BUTTON_ID'
    };
  }
  return {
    zelleEmail: 'obradeadulam@gmail.com',
    stripeKey: process.env.REACT_APP_STRIPE_LIVE_KEY,
    paypalButtonId: 'LIVE_BUTTON_ID'
  };
};
```

## 📊 Analytics & Tracking

### Google Analytics Integration
```javascript
// Track donation events
const trackDonation = (method, amount) => {
  if (window.gtag) {
    window.gtag('event', 'donation', {
      'payment_method': method,
      'amount': amount,
      'currency': 'USD'
    });
  }
};
```

## 🚀 Production Deployment

### Environment Variables for Production
```env
# Production Stripe Keys
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key
REACT_APP_STRIPE_SECRET_KEY=sk_live_your_live_key

# Production PayPal Button ID
REACT_APP_PAYPAL_BUTTON_ID=your_live_button_id

# Zelle Email (same for production)
REACT_APP_ZELLE_EMAIL=obradeadulam@gmail.com
```

### SSL Certificate
- ✅ Required for Apple Pay
- ✅ Required for Stripe
- ✅ Required for PayPal

## 📞 Support & Troubleshooting

### Common Issues

**Zelle Not Working:**
- Verify email is registered with Zelle
- Check bank account is linked
- Test with small amount first

**Apple Pay Not Showing:**
- Check iOS version (10.1+)
- Verify SSL certificate
- Test in Safari on iOS

**PayPal Button Error:**
- Verify button ID is correct
- Check PayPal account status
- Test button in PayPal dashboard

### Contact Information
- **Technical Support**: [Your developer contact]
- **PayPal Support**: [PayPal business support]
- **Stripe Support**: [Stripe support]
- **Zelle Support**: [Your bank's support]

---

**Last Updated**: January 2025
**Status**: ✅ Zelle Ready, 🔄 Apple Pay/PayPal Setup Required 