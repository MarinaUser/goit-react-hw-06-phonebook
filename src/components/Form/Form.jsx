import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { FormContact, FormLabel, FormInput, AddBtn } from './Form.styled';

export  function  Form()  {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(
          addContacts({
            id: nanoid(),
            name: name,
            number: number,
          })
        );
    
      setName('');
      setNumber('');
  };
  
    return (
      <FormContact onSubmit={handleSubmit}>
        <FormLabel >
          Name
          <FormInput
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel >
          Number
          <FormInput
            value={number}
            onChange={e => setNumber(e.currentTarget.value)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <AddBtn type="submit">
          Add contact
        </AddBtn>
      </FormContact>
    );
  }
