import { useState, useEffect} from 'react';
import { nanoid } from 'nanoid';

import { Form } from "./Form/Form";
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { Title, Contacts } from './App.styled';

export const App = () => {
    const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
   const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(prevState => {
      return [newContact, ...prevState];
    });
  };



  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  };


  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };


  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };
  
 
const visibleContacts = getVisibleContacts();
  
    return (
      <>
      <Title>Phonebook</Title>
        <Form onSubmit={addContact}></Form>
      <Contacts>Contacts</Contacts>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
        </>
    );
  };

