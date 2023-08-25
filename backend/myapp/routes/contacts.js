const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.getAllContacts();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'An error occurred while fetching contacts' });
  }
});

router.get('/:id', async (req, res) => {
  const contactId = req.params.id;
  try {
    const contact = await Contact.getContactById(contactId);
    res.json(contact);
  } catch (error) {
    console.error('Error fetching contact details:', error);
    res.status(500).json({ error: 'An error occurred while fetching contact details' });
  }
});

// Add routes for creating, updating, and deleting contacts here

module.exports = router;
