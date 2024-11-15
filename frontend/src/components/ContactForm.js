import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

function ContactForm({ onSubmit, initialData }) {
  const [contact, setContact] = useState({
    firstName: '', lastName: '', email: '', phoneNumber: '', company: '', jobTitle: ''
  });

  useEffect(() => {
    if (initialData) {
      setContact(initialData); 
    }
  }, [initialData]);

  const handleChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <Box component="form" onSubmit={(e) => { e.preventDefault(); onSubmit(contact); }}>
      <TextField
        label="First Name"
        name="firstName"
        value={contact.firstName}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={contact.lastName}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={contact.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={contact.phoneNumber}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Company"
        name="company"
        value={contact.company}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Job Title"
        name="jobTitle"
        value={contact.jobTitle}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained">
        {initialData ? 'Update' : 'Save'}
      </Button>
    </Box>
  );
}

export default ContactForm;
