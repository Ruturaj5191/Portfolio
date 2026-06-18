import Contact from '../models/Contact.js';

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      res.status(400);
      throw new Error('Please fill all fields');
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    if (contact) {
      res.status(201).json({
        success: true,
        message: 'Message sent successfully!',
        data: contact,
      });
    } else {
      res.status(400);
      throw new Error('Invalid contact data');
    }
  } catch (error) {
    next(error);
  }
};
