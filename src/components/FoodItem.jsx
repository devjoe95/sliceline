import React, {useState} from "react";
import PropTypes from "prop-types";

import "../styles/FoodItem.css";
import {Col} from "react-bootstrap";
import FoodDialog from "./FoodDialog";

const FoodItem = ({item}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {name, img, category, price} = item;
    return (
        <Col md={6} className="mb-3">
            <div className="card bg-dark text-white" onClick={() => {
                handleShow()
            }}>
                <img src={img} className="card-img" alt={name}/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{category}</p>
                    <p className="card-text">{price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "EGP",
                    })}</p>
                </div>
            </div>
            <FoodDialog show={show} handleClose={handleClose} item={item}/>
        </Col>
    )
}

FoodItem.propTypes =
    {
        name: PropTypes.string,
        img: PropTypes.string,
        category: PropTypes.string,
    }
;

export default FoodItem;
