import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label } from './LoginForm.styled';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
        Log In
      </Button>
    </Form>
  );
};
