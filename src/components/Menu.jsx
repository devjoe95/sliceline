import React, {useContext} from "react";
import FoodItem from "./FoodItem";
import {Row} from "react-bootstrap";
import {AppContext} from "../App";

const Menu = () => {
    const context = useContext(AppContext)
    return (
            <div className="my-5">
                <Row>
                    {context.state.menu.map((item, index) => (
                        <FoodItem
                            key={index}
                            item={item}
                        />
                    ))}
                </Row>
            </div>
    );
};

export default Menu;
