import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Banner from "./components/Banner";
import FoodDialog from "./components/FoodDialog";
import Menu from "./components/Menu";
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
  const [openFoodDialog, setOpenFoodDialog] = useState(null);

  return (
    <React.Fragment>
      <FoodDialog
        openFoodDialog={openFoodDialog}
        setOpenFoodDialog={setOpenFoodDialog}
      />
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu setOpenFoodDialog={setOpenFoodDialog} />
    </React.Fragment>
  );
}

export default App;
