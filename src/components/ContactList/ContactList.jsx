import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { grey } from '@mui/material/colors';
const ContactList = ({ contacts, onDeleteContact }) => (
  <Box
    as="ul"
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    alignContent="flex-start"
    ml={45}
    gridGap={10}
  >
    {contacts.map(({ id, name, number }) => (
      <Card
        as="li"
        sx={{ maxWidth: 340, backgroundColor: grey[200], width: 340 }}
        key={id}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {number}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ backgroundColor: grey[50] }}>
          <Button
            color="secondary"
            size="small"
            variant="outlined"
            endIcon={<DeleteIcon />}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    ))}
  </Box>
);

export default ContactList;
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
