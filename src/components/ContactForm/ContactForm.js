import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'redux/contacts/operations';
import { Label, FormContainer } from './ContactForm.styled';
import { contactSelectors } from 'redux/index';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.target.value);
  };
  const changeNumber = event => {
    setNumber(event.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    const id = nanoid();
    const alreadyYetContact = contacts.find(contact => name === contact.name);

    if (alreadyYetContact) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(createContact({ name, id, number }));
    }
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submitForm}>
      <FormContainer>
        <Label>
          <TextField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            value={name}
            onChange={changeName}
            variant="outlined"
            size="small"
          />
        </Label>

        <Label>
          <TextField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            value={number}
            onChange={changeNumber}
            variant="outlined"
            size="small"
          />
        </Label>

        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </FormContainer>
    </form>
  );
};
