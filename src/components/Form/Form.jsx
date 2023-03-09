import {useState } from "react";
import { FormContact, FormLabel, FormInput, AddBtn } from './Form.styled';

export const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = evt => {
    const { name, value } = evt.target;
  
    switch (name) {
        case 'name':
            setName(value);
            break;

        case 'number':
            setNumber(value);
            break;

    default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    
    onSubmit(name, number);
      setName('');
      setNumber('');
  };
  
    return (
      <FormContact onSubmit={handleSubmit}>
        <FormLabel >
          Name
          <FormInput
            value={name}
            // id={nanoidIdName}
            onChange={handleChange}
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
            // id={nanoidIdNumber}
            onChange={handleChange}
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
