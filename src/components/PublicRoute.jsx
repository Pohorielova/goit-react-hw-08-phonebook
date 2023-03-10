import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authSelectors } from '../redux/auth';

export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(authSelectors.getToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to="/" /> : children;
};
