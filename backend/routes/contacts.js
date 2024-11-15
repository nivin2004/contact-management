const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      jobTitle,
    });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
    
    if (!firstName || !lastName || !email || !phoneNumber) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, phoneNumber, company, jobTitle }, 
      { new: true } 
    );

    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json(updatedContact); 
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
