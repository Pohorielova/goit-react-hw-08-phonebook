import { useState } from 'react';
import * as React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Form({ onSubmitForm }) {
  const [data, setData] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const handelInputChange = e => {
    const { value, name } = e.currentTarget;
    setData(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = data;
    dispatch(addContact({ name, number }));
    setData({ name: '', number: '' });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 300,
        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            label="Name"
            autoFocus
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handelInputChange}
            value={data.name}
          />
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            label="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handelInputChange}
            value={data.number}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
Form.propType = {
  onSubmitForm: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
