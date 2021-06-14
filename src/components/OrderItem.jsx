import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { pizzaRed } from "../styles/colors";
import {Badge} from "react-bootstrap";

const OrderItemStyled = styled.div`
  display: grid;
  grid-template-columns: 25px repeat(3, 1fr);
  gap: 10px;
  justify-content: space-evenly;
`;
const OrderItem = ({ orderItem }) => {
  return (
    <OrderItemStyled>
      <div style={{ color: "white" }}>
        <Badge style={{backgroundColor: pizzaRed}}>{orderItem.count}</Badge>
      </div>
      <div>
        <img
          src={orderItem.img}
          alt={orderItem.name}
          style={{ height: "50px" }}
        />
      </div>
      <div>
        <p>{orderItem.name}</p>
      </div>
      <div style={{ color: pizzaRed }}>
        <p>
          {orderItem.price.toLocaleString("en-US", {
            style: "currency",
            currency: "EGP",
          })}
        </p>
      </div>
    </OrderItemStyled>
  );
};

OrderItem.propTypes = {
  orderItem: PropTypes.object,
};

export default OrderItem;
