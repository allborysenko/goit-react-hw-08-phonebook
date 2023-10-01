import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label } from './RegisterForm.styled';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <TextField
          type="text"
          name="name"
          id="outlined-basic"
          label="Username"
          variant="outlined"
          size="small"
        />
      </Label>
      <Label>
        <TextField
          type="email"
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
        />
      </Label>
      <Label>
        <TextField
          type="password"
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
        />
      </Label>
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Form>
  );
};
