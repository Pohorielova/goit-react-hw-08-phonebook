import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Box } from 'components/Box';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from './HomePage/HomePage';

const Login = lazy(() => import('./Login/Login'));
const Register = lazy(() => import('./Register/Register'));
const PhoneBook = lazy(() => import('./PhoneBook/PhoneBook'));
// const MoviesDetails = lazy(() => import('./MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Box as="div" pl={15} pr={15}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="phonebook" element={<PhoneBook />} />

          {/* <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        {/* </Route> */}
      </Routes>
    </Box>
  );
};
