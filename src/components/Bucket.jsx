import React, {useContext, useEffect, useMemo, useState} from "react";
import {pizzaRed} from "../styles/colors";
import OrderItem from "./OrderItem";
import {AppContext} from "../App";
import {Button, ButtonGroup} from "react-bootstrap";

const Bucket = () => {
    const context = useContext(AppContext)
    const [tax, setTax] = useState(14 / 100)
    const totalPrize = useMemo(() => {
        if (context.state.orders.length !== 0) {
            return context.state.orders.reduce((acc, val) => (acc + val.count * val.price), 0)
        } else {
            return 0
        }
    }, [context.state.orders])
    useEffect(() => {
        document.title = `(${context.state.orders.length}) ${document.title}`;
    }, [context.state.orders]);
    return (
        <div className="my-5">
            <h2 className="text-center" style={{color: pizzaRed}}>Bucket</h2>
            {context.state.orders.length <= 0 ? (
                <p style={{textAlign: "center"}}>Bucket is empty.</p>
            ) : (
                context.state.orders.map((order, index) => (
                    <React.Fragment key={index}>
                        <OrderItem orderItem={order}/>
                        {context.state.orders.length - 1 === index ? (
                            <br/>
                        ) : (
                            <hr style={{borderColor: pizzaRed}}/>
                        )}
                    </React.Fragment>
                ))
            )}
            <p className="text-muted text-center">
                Adding a {Math.floor(tax * 100)}% TAX.
            </p>
            <ButtonGroup aria-label="Bucket Control">
                <Button style={{backgroundColor: pizzaRed, borderColor: pizzaRed}}>Checkout
                    {totalPrize !== 0 &&
                    ` (${(totalPrize + totalPrize * tax).toLocaleString("en-US", {
                        style: "currency",
                        currency: "EGP",
                    })})`}</Button>
                <Button variant="outline-danger"
                        onClick={() => {
                            context.setState({...context.state, orders: []})
                            localStorage.removeItem('bucket')
                        }}>Reset</Button>
            </ButtonGroup>
        </div>
    );
};

export default Bucket;
