import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/selectors'
import { List, Item, DelBtn  } from './ContactList.styled';


export function ContactList () {
  const dispatch = useDispatch(); 
  
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filtered = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered) {
    return (
      <List>
        {filtered.map(({ id, name, number }) => (
          <Item key={id}>
            <span>{name}: </span>
            <span>{number} </span>
            <DelBtn
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
              value="delete"
            >Delete</DelBtn>
          </Item>
        ))}
      </List>
    );
  }
}


ContactList.propTypes = {
  contacts: PropTypes.array,
};


