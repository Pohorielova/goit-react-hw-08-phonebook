import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export default function AuthNav() {
  return (
    <>
      <NavItem to="register">Register</NavItem>
      <NavItem to="login">Login</NavItem>
    </>
  );
}
// styleApp
const NavItem = styled(NavLink)`
  color: black;
  font-size: 28px;
  padding: 20px 0;

  &.active {
    color: orange;
  }

  :hover:not(.active) {
    color: deeppink;
  }
`;
