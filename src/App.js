import React, {useState} from "react";
import {createGlobalStyle} from "styled-components";
import Banner from "./components/Banner";
import Bucket from "./components/Bucket";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import {bodyColor} from "./styles/colors";
import {Col, Container, Row} from "react-bootstrap";
import {foods} from "./data";

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

export const AppContext = React.createContext("test")

function App() {
    const [state, setState] = useState({menu: foods, orders: []})

    return (
        <React.Fragment>
            <AppContext.Provider value={{state, setState}}>
                <GlobalStyle/>
                <Navbar/>
                <Banner/>
                <Container>
                    <Row>
                        <Col md={9}>
                            <Menu/>
                        </Col>
                        <Col md={3}> <Bucket/></Col>
                    </Row>
                </Container>
            </AppContext.Provider>
        </React.Fragment>
    );
}

export default App;
