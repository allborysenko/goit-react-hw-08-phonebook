import { Label, Total, FilterContainer } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { createFilter } from 'redux/contacts/filterSlice';
import { contactSelectors } from 'redux/index';

import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactSelectors.getFilter);
  const totalContacts = useSelector(contactSelectors.totalContacts);

  const handleInputChange = event => {
    dispatch(createFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <Label>Find contacts by name</Label>
      <TextField
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleInputChange}
        variant="outlined"
        size="small"
      />
      <Total>You have {totalContacts} contacts</Total>
    </FilterContainer>
  );
};
