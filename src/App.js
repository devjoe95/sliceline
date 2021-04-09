import React from "react";
import { createGlobalStyle } from "styled-components";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { bodyColor } from "./styles/colors";

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    background-color:${bodyColor};
    font-family: 'Open Sans', sans-serif;
  }
  h1,h2,h3{
    font-family: 'Righteous', cursive;
  }
`;
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <Banner />
    </React.Fragment>
  );
}

export default App;
