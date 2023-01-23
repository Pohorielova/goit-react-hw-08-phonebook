import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'components/Box';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from './HomePage/HomePage';
import { authOperations } from 'redux/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import authSelectors from './../redux/auth/auth-selectors';

const Login = lazy(() => import('./Login/Login'));
const Register = lazy(() => import('./Register/Register'));
const PhoneBook = lazy(() => import('./PhoneBook/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Box as="div" pl={15} pr={15}>
      {isFetchingCurrentUser ? (
        <p>Loading...</p>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="phonebook"
                element={
                  <PrivateRoute>
                    <PhoneBook />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </>
      )}
    </Box>
  );
};
