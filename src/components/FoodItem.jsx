import React, { useState } from "react";
import PropTypes from "prop-types";

import "../styles/FoodItem.css";
import { Col } from "react-bootstrap";
import FoodDialog from "./FoodDialog";
import { pizzaRed } from "../styles/colors";

const FoodItem = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, img, category, price } = item;
  return (
    <Col md={4} className="mb-3">
      <div
        style={{ border: 0 }}
        className="card bg-dark text-white"
        onClick={() => {
          handleShow();
        }}
      >
        <img src={img} className="card-img" alt={name} />
        <div className="card-img-overlay">
          <h4 className="card-title font-weight-bolder my-0">{name}</h4>
          <p className="card-text  m-0">{category}</p>
          <span className="card-text m-0 font-weight-bolder" style={{background:pizzaRed}}>
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "EGP",
            })}
          </span>
        </div>
      </div>
      <FoodDialog show={show} handleClose={handleClose} item={item} />
    </Col>
  );
};

FoodItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  category: PropTypes.string,
};

export default FoodItem;
