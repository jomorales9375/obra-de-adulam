import { VALIDATION_PATTERNS } from '../config/security';

// Input sanitization
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  // Remove potentially dangerous characters
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent XSS
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Email validation
export const validateEmail = (email) => {
  if (!email) return false;
  return VALIDATION_PATTERNS.EMAIL.test(email);
};

// Phone validation
export const validatePhone = (phone) => {
  if (!phone) return true; // Phone is optional
  return VALIDATION_PATTERNS.PHONE.test(phone);
};

// Name validation
export const validateName = (name) => {
  if (!name) return false;
  return VALIDATION_PATTERNS.NAME.test(name);
};

// Prayer request validation
export const validatePrayerRequest = (request) => {
  if (!request || request.length < 10) return false;
  if (request.length > 1000) return false; // Limit length
  
  // Check for suspicious content
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /http:\/\//i, // Only allow https
  ];
  
  return !suspiciousPatterns.some(pattern => pattern.test(request));
};

// Rate limiting helper
export const checkRateLimit = (() => {
  const requests = new Map();
  
  return (identifier, maxRequests = 10, timeWindow = 60000) => {
    const now = Date.now();
    const userRequests = requests.get(identifier) || [];
    
    // Remove old requests
    const recentRequests = userRequests.filter(time => now - time < timeWindow);
    
    if (recentRequests.length >= maxRequests) {
      return false; // Rate limit exceeded
    }
    
    // Add current request
    recentRequests.push(now);
    requests.set(identifier, recentRequests);
    
    return true; // Request allowed
  };
})(); 