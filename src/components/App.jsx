import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Container, Title } from "./App.styled";

export const App = () => {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {

    const listContact = JSON.parse(localStorage.getItem("Contacts"));
    localStorage.length && setContacts(listContact);

  }, []);

  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (contact) => {
  
    const newContact = {
      ...contact,
      id: nanoid()
    }
 
    contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
      ? (alert(`${newContact.name} is already in contacts`))
      : setContacts(contacts => { return [newContact, ...contacts] })
    
   
  };

  const deleteContact = (id) => {
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== id)
    });
  };

  const handlInputFilter = (e) => {
    setFilter(e.target.value)
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );


  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addContact={onAddContact} />

      <Title>Contacts</Title>
      <Filter search={filter} handlInput={handlInputFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </Container>
  );
  
   
};

