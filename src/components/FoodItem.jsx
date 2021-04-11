import React from "react";
import PropTypes from "prop-types";

import "../styles/FoodItem.css";

const FoodItem = ({ item, setOpenFoodDialog }) => {
  const { name, img, category } = item;
  return (
    <div className="food" onClick={() => setOpenFoodDialog(item)}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
    </div>
  );
};

FoodItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  category: PropTypes.string,
};

export default FoodItem;
