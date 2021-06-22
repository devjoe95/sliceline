import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { pizzaRed, pizzaSun } from "../styles/colors";
import { AppContext } from "../App";
import { Button, Navbar } from "react-bootstrap";

const LogoStyled = styled.span`
  font-family: "Righteous", cursive;
  font-size: 20px;
  color: white;
  text-shadow: 3px 3px 5px #333;
`;
const Header = () => {
  const { state, setState } = useContext(AppContext);
  const signIn = () => {
    const auth = window.firebase.auth();
    const provider = new window.firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  useEffect(() => {}, [state.user]);
  return (
    <Navbar style={{ backgroundColor: pizzaRed }} fixed="top">
      <Navbar.Brand href="#home">
        <LogoStyled>Sliceline 🍕</LogoStyled>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {state.user ? (
            <p>Signed in as: {state.user}</p>
          ) : (
            <Button
              style={{ background: pizzaSun, borderColor: pizzaSun }}
              onClick={signIn}
            >
              Log In
            </Button>
          )}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
