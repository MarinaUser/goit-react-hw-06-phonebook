import PropTypes from 'prop-types';
import { List, Item, DelBtn  } from './ContactList.styled';

export function ContactList ({contacts, onDeleteContact}) {
    return (
        <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <span>{name}: </span>
          <span>{number} </span>
          <DelBtn
            type="button"
            onClick={() => onDeleteContact(id)}
            value="delete"
          >Delete</DelBtn>
        </Item>
      ))}
    </List>
  );
}


ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};


