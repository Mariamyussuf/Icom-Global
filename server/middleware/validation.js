const { body, validationResult } = require('express-validator');
const xss = require('xss');

// XSS sanitizer — strip all HTML tags
const sanitize = (str) =>
  xss(str, { whiteList: {}, stripIgnoreTag: true, stripIgnoreTagBody: ['script'] });

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required.')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters.')
    .matches(/^[a-zA-ZÀ-ÿ\s\-'.]+$/)
    .withMessage('Name contains invalid characters.'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Invalid email address.')
    .normalizeEmail(),

  body('phone')
    .optional({ values: 'falsy' })
    .trim()
    .matches(/^[\d\s+\-()]{7,20}$/)
    .withMessage('Invalid phone number format.'),

  body('company')
    .optional({ values: 'falsy' })
    .trim()
    .isLength({ max: 150 })
    .withMessage('Company name too long.'),

  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required.')
    .isLength({ min: 3, max: 200 })
    .withMessage('Subject must be between 3 and 200 characters.'),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required.')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters.'),
];

// Middleware: check validation results + sanitize + honeypot
const handleValidation = (req, res, next) => {
  // Honeypot check — if the hidden 'website' field is filled, it's a bot
  if (req.body.website) {
    return res.status(200).json({
      success: true,
      message: 'Thank you for your message.',
    });
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((e) => e.msg),
    });
  }

  // Sanitize all fields against XSS before passing to handler
  req.body.name = sanitize(req.body.name);
  req.body.email = req.body.email; // already normalizeEmail'd
  req.body.subject = sanitize(req.body.subject);
  req.body.message = sanitize(req.body.message);
  if (req.body.company) req.body.company = sanitize(req.body.company);
  if (req.body.phone) req.body.phone = sanitize(req.body.phone);

  next();
};

module.exports = { contactValidation, handleValidation };
