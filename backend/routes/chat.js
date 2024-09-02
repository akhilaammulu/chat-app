const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().populate('sender', 'username email');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Post a new message
router.post('/', async (req, res) => {
  const { sender, content } = req.body;

  try {
    const newMessage = await Message.create({ sender, content });
    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
