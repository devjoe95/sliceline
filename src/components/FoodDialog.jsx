import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { pizzaLight } from "../styles/colors";
import { BtnStyled } from "../styles/BtnStyled";

const FoodDialogStyled = styled.div`
  text-align: center;
  width: 500px;
  top: 0;
  background-color: ${pizzaLight};
  z-index: 1001;

  padding: 10px;
  border-radius: 5px;
  &::
  ms-overflow-style: none;
  position: relative;
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
          <img src={openFoodDialog.img} alt={openFoodDialog.name} />
          <div
            style={{
              margin: "10px 0",
              minHeight: "100px",
              maxHeight: "calc(100% - 200px)",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            <h2>{openFoodDialog.name}</h2>
            <p>{openFoodDialog.category}</p>
          </div>
          <BtnStyled>Add Item To Bucket</BtnStyled>
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
