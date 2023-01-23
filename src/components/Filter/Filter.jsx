import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Filter = ({ value, onChange }) => (
  <ThemeProvider theme={theme}>
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      label="Filter"
      type="text"
      value={value}
      onChange={onChange}
      sx={{
        width: 300,
      }}
    />
  </ThemeProvider>
);
export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
