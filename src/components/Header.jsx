import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { pizzaRed, pizzaSun } from "../styles/colors";
import { AppContext } from "../App";
import { Button, Image, Navbar, Dropdown } from "react-bootstrap";

const LogoStyled = styled.span`
  font-family: "Righteous", cursive;
  font-size: 20px;
  color: white;
  text-shadow: 3px 3px 5px #333;
`;
const Header = () => {
  const context = useContext(AppContext);
  const signIn = () => {
    const auth = window.firebase.auth();
    const provider = new window.firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    auth.onAuthStateChanged(
      (user) => {
        context.setState({ ...context.state, user });
        console.log(user);
      },
      (err) => {}
    );
  };
  const signOut = () => {
    const auth = window.firebase.auth();
    auth
      .signOut()
      .then(() => {
        context.setState({ ...context.state, user: null });
      })
      .catch((err) => {});
  };
  useEffect(() => {}, [context.state.user]);
  return (
    <Navbar style={{ backgroundColor: pizzaRed }} fixed="top">
      <Navbar.Brand href="#home">
        <LogoStyled>Sliceline 🍕</LogoStyled>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {context.state.user ? (
            <Dropdown>
              <style
                dangerouslySetInnerHTML={{
                  __html: [
                    ".my-special-dropdown:after {",
                    '  content: "";',
                    "  border: 0;",
                    "  margin-left: 0;",
                    "}",
                  ].join("\n"),
                }}
              ></style>
              <Dropdown.Toggle
                style={{ background: pizzaSun, borderColor: pizzaSun }}
                id="dropdown-basic"
                className="p-0 my-special-dropdown rounded-circle"
              >
                <Image
                  style={{ width: "50px", height: "50px" }}
                  src={context.state.user.photoURL}
                  roundedCircle
                />
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ left: "-120px" }}>
                <Dropdown.Item href="#/action-1">
                  <span style={{ color: pizzaRed }}>Welcome</span>{" "}
                  {context.state.user.displayName}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={signOut}>
                  Sign Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
