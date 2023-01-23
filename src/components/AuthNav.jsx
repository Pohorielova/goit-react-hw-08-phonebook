import React from 'react';
import { Box } from 'components/Box';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function AuthNav() {
  return (
    <Box as="div" ml="auto" display="flex" gridGap={15}>
      <NavItem to="register">Register</NavItem>
      <NavItem to="login">Login</NavItem>
    </Box>
  );
}
// styleApp
const NavItem = styled(NavLink)`
  color: black;
  font-size: 28px;
  padding: 20px 0;

  &.active {
    color: #1976d2;
  }

  :hover:not(.active) {
    color: #ba68c8;
  }
`;
