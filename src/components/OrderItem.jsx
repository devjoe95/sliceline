import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { pizzaRed } from "../styles/colors";
import { Badge } from "react-bootstrap";
import { AppContext } from "../App";

const OrderItemStyled = styled.div`
  display: grid;
  grid-template-columns: 25px repeat(4, 1fr);
  gap: 10px;
  justify-content: space-evenly;
`;
const OrderItem = ({ orderItem }) => {
  const context = useContext(AppContext);
  const removeItem = (id) => {
    const newOrder = context.state.orders.filter((item) => item.id !== id);
    context.setState({ ...context.state, orders: newOrder });
    localStorage.setItem("bucket", JSON.stringify(newOrder));
  };
  return (
    <OrderItemStyled>
      <div style={{ color: "white" }}>
        <Badge style={{ backgroundColor: pizzaRed }}>{orderItem.count}</Badge>
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
      <div
        style={{ color: pizzaRed, cursor: "pointer" }}
        onClick={() => removeItem(orderItem.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </div>
    </OrderItemStyled>
  );
};

OrderItem.propTypes = {
  orderItem: PropTypes.object,
};

export default OrderItem;
