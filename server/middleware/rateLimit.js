const rateLimit = require('express-rate-limit');

// Strict limiter for contact form — 5 submissions per hour per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // Max 5 form submissions per IP per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    errors: ['Too many messages sent. Please wait before trying again.'],
  },
});

module.exports = { contactLimiter };
