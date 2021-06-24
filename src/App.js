import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Banner from "./components/Banner";
import Bucket from "./components/Bucket";
import Menu from "./components/Menu";
import Header from "./components/Header";
import { bodyColor, pizzaRed } from "./styles/colors";
import { Col, Container, Row } from "react-bootstrap";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${bodyColor};
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

export const AppContext = React.createContext("test");

export const database = window.firebase.database();

function App() {
  const [state, setState] = useState({
    menu: [],
    orders: JSON.parse(localStorage.getItem("bucket")) || [],
    user: null,
  });

  useEffect(() => {
    const menu = database.ref("menu");
    menu.on("value", (snapshot) => {
      let data = [];
      snapshot.forEach((snap) => {
        data.push({ ...snap.val(), id: snap.key });
      });
      setState({ ...state, menu: data });
    });
    if (state.orders.length <= 0) {
      document.title = `Sliceline`;
    } else {
      document.title = `(${state.orders.length}) Sliceline`;
    }
  }, []);
  return (
    <AppContext.Provider value={{ state, setState }}>
      <GlobalStyle />
      <Header />
      <Banner />
      <Container>
        <Row>
          <Col md={8}>
            <a
              className="btn mt-3"
              style={{ backgroundColor: pizzaRed, color: "white" }}
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-funnel-fill mx-1"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
              </svg>
              Filter
            </a>
            <div className="collapse" id="collapseExample">
              <div className="card card-body mt-3">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
            <Menu />
          </Col>
          <Col md={4}>
            <Bucket />
          </Col>
        </Row>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
