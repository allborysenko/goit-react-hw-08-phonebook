import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { filteredContacts } from 'redux/contacts/selectors';

import Button from '@mui/material/Button';
import { ContactContainer } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContactsList = useSelector(filteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactContainer>
      <ul>
        {filteredContactsList.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              type="submit"
              variant="outlined"
              size="small"
              onClick={() => handleDelete(contact.id)}
            >
              DELETE
            </Button>
          </li>
        ))}
      </ul>
    </ContactContainer>
  );
};
