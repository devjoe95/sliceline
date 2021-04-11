import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { foods } from "../data";
import FoodItem from "./FoodItem";

const MenuStyled = styled.div`
  min-height: 200px;
  margin: 50px 400px 50px 20px;
`;

const FoodGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const Menu = ({ setOpenFoodDialog }) => {
  return (
    <MenuStyled>
      <FoodGridStyled>
        {foods.map((item, index) => (
          <FoodItem
            key={index}
            item={item}
            setOpenFoodDialog={setOpenFoodDialog}
          />
        ))}
      </FoodGridStyled>
    </MenuStyled>
  );
};

Menu.propTypes = {
  setOpenFood: PropTypes.func,
};

export default Menu;
