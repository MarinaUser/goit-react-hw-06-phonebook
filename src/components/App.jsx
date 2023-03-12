import { Form } from "./Form/Form";
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { Title, Contacts } from './App.styled';

export const App = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <Form />
      <Contacts>Contacts</Contacts>
      <Filter />
      <ContactList />
    </>
  );
};



