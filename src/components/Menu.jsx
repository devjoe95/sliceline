import React, { useContext } from "react";
import FoodItem from "./FoodItem";
import { Row } from "react-bootstrap";
import { AppContext } from "../App";
import { Spinner } from "react-bootstrap";
import { pizzaRed, pizzaSun } from "../styles/colors";

const Menu = () => {
  const context = useContext(AppContext);
  return (
    <div className="my-5">
      {context.state.menu.length === 0 ? (
        <Spinner
          animation="border"
          variant="warning"
          style={{
            borderTopColor: pizzaSun,
            borderBottomColor: pizzaSun,
            borderLeftColor: pizzaRed,
            borderRightColor: pizzaRed,
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "flex",
          }}
        />
      ) : (
        <Row>
          {context.state.menu.map((item, index) => (
            <FoodItem key={index} item={item} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default Menu;
