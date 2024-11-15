import React, { useEffect, useState } from 'react';
import { fetchContacts, addContact, updateContact, deleteContact } from './services/api';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null); 

  useEffect(() => {
    fetchContacts()
      .then((response) => setContacts(response.data))
      .catch(console.error);
  }, []);

  const handleAddContact = (contact) => {
    addContact(contact)
      .then((response) => setContacts([...contacts, response.data]))
      .catch(console.error);
  };

  const handleUpdateContact = (updatedContact) => {
    updateContact(updatedContact._id, updatedContact)
      .then((response) => {
        setContacts(
          contacts.map((contact) =>
            contact._id === updatedContact._id ? response.data : contact
          )
        );
        setEditingContact(null); 
      })
      .catch(console.error);
  };

  const handleDeleteContact = (id) => {
    deleteContact(id)
      .then(() => {
        setContacts(contacts.filter((contact) => contact._id !== id));
      })
      .catch(console.error);
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
  };

  return (
    <div className="App">
      <h1>Contact Management</h1>
      <ContactForm
        onSubmit={editingContact ? handleUpdateContact : handleAddContact}
        initialData={editingContact}
      />
      <ContactsTable
        contacts={contacts}
        onEdit={handleEditContact}
        onDelete={handleDeleteContact}
      />
    </div>
  );
}

export default App;
