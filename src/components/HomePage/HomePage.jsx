import Typography from '@mui/material/Typography';
import { Box } from 'components/Box';

export const HomePage = () => {
  return (
    <Box as="div">
      <Typography variant="h3" component="h1">
        Hi,
      </Typography>
      <Typography variant="h3" component="h2">
        you are in our{' '}
        <Typography variant="h3" component="span" color="primary">
          PhoneBook
        </Typography>
      </Typography>
    </Box>
  );
};
