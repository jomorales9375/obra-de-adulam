# Security Guide - Obra de Adulam Church Website

## 🔒 Security Overview

This church website is designed with security best practices to protect user data and prevent common web vulnerabilities.

## 🛡️ Security Features Implemented

### 1. Input Validation & Sanitization
- **XSS Prevention**: All user inputs are sanitized to remove dangerous characters
- **Input Validation**: Email, phone, name, and prayer request validation
- **Length Limits**: Prayer requests limited to 1000 characters
- **Pattern Matching**: Validates input formats using regex patterns

### 2. Rate Limiting
- **Form Submissions**: Limited to 5 prayer requests per minute per user
- **API Protection**: Prevents abuse of EmailJS service
- **User Identification**: Uses email or IP for rate limiting

### 3. Environment Variables
- **API Keys**: All sensitive keys stored in environment variables
- **No Hardcoded Secrets**: No credentials in source code
- **Secure Configuration**: Centralized security configuration

### 4. Content Security Policy (CSP)
- **Script Sources**: Restricted to trusted domains
- **Style Sources**: Limited to safe sources
- **Frame Protection**: Prevents clickjacking attacks

## 🔧 Setup Instructions

### 1. Environment Variables
Create a `.env` file in the root directory:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here

# PayPal Configuration (if implementing)
REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id_here

# Google Maps API (if using)
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### 2. EmailJS Setup
1. Sign up at [EmailJS.com](https://www.emailjs.com)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your public key
5. Add credentials to `.env` file

### 3. Netlify Security Headers
Add these headers in Netlify dashboard:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.paypal.com https://www.emailjs.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.emailjs.com https://www.paypal.com"
```

## 🚨 Security Best Practices

### For Developers
1. **Never commit API keys** to version control
2. **Use HTTPS** for all external requests
3. **Validate all inputs** on both client and server
4. **Keep dependencies updated** regularly
5. **Monitor for security vulnerabilities**

### For Church Administrators
1. **Regular backups** of prayer request data
2. **Monitor form submissions** for abuse
3. **Update contact information** regularly
4. **Review privacy policy** annually
5. **Train staff** on data protection

## 🔍 Security Monitoring

### What to Monitor
- **Form submission rates** (unusual spikes)
- **Failed login attempts** (if implementing)
- **Suspicious input patterns**
- **API usage limits**

### Response Plan
1. **Rate limiting exceeded**: Temporary blocking
2. **Suspicious activity**: Review and block if necessary
3. **Data breach**: Immediate notification and response
4. **Service outage**: Fallback contact methods

## 📞 Emergency Contacts

- **Technical Issues**: [Your developer contact]
- **Data Privacy**: [Church administrator]
- **Legal Concerns**: [Legal counsel]

## 🔄 Regular Security Updates

### Monthly
- Update dependencies
- Review access logs
- Check for security advisories

### Quarterly
- Security audit
- Privacy policy review
- Staff training updates

### Annually
- Full security assessment
- Penetration testing
- Compliance review

---

**Last Updated**: January 2025
**Version**: 1.0
**Contact**: [Your contact information] 