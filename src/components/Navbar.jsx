import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { pizzaRed } from "../styles/colors";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 20px;
  position: fixed;
  width: 100%;
`;

const LogoStyled = styled.span`
  font-family: "Righteous", cursive;
  font-size: 20px;
  color: white;
  text-shadow: 3px 3px 5px #333;
`;
const Navbar = (props) => {
  return (
    <NavbarStyled>
      <LogoStyled>Sliceline 🍕</LogoStyled>
    </NavbarStyled>
  );
};

Navbar.propTypes = {};

export default Navbar;
