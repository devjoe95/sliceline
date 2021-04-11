import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { pizzaLight } from "../styles/colors";

const FoodDialogStyled = styled.div`
  text-align: center;
  width: 500px;
  top: 0;
  background-color: ${pizzaLight};
  z-index: 1001;
  max-height: calc(100% - 200px);
  overflow-y: scroll;
  padding: 20px;
  border-radius: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
  ms-overflow-style: none;
  scrollbar-width: none;
`;

const OverlayStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.2s ease-in-out;
  z-index: 1000;
`;

const FoodDialog = ({ openFoodDialog, setOpenFoodDialog }) => {
  return openFoodDialog ? (
    <>
      <OverlayStyled onClick={() => setOpenFoodDialog()}>
        <FoodDialogStyled>
          <img
            src={openFoodDialog.img}
            alt=""
            style={{ objectFit: "cover", height: "calc(100% - 130px)" }}
          />
          <h2>{openFoodDialog.name}</h2>
          <p>{openFoodDialog.category}</p>
        </FoodDialogStyled>
      </OverlayStyled>
    </>
  ) : null;
};

FoodDialog.propTypes = {
  openFoodDialog: PropTypes.object,
  setOpenFoodDialog: PropTypes.func,
};

export default FoodDialog;
