import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from './../../redux/auth';
import { Box } from 'components/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Box as="div" ml="auto" display="flex" alignItems="center" gridGap={15}>
      <Typography variant="body1" component="span">
        Welcome, {name}
      </Typography>
      <IconButton
        color="primary"
        aria-label="log out"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
