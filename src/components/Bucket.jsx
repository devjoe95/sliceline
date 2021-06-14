import React, {useContext, useEffect, useMemo} from "react";
import {pizzaRed} from "../styles/colors";
import OrderItem from "./OrderItem";
import {AppContext} from "../App";
import {Button} from "react-bootstrap";

const Bucket = () => {
    const context = useContext(AppContext)
    const totalPrize = useMemo(() => {
        if (context.state.orders.length !== 0) {
            return context.state.orders.reduce((acc, val) => (acc + val.count * val.price), 0)
        } else {
            return 0
        }
    }, [context.state.orders])
    useEffect(() => {
        console.log(context.state.orders)
        document.title = `(${context.state.orders.length}) ${document.title}`;
    }, [context.state.orders]);
    return (
        <div className="my-5">
            <h2 className="text-center" style={{color: pizzaRed}}>Bucket</h2>
            {context.state.orders.length <= 0 ? (
                <p style={{textAlign: "center"}}>Bucket is empty.</p>
            ) : (
                context.state.orders.map((order, index) => (
                    <React.Fragment>
                        <OrderItem key={index} orderItem={order}/>
                        {context.state.orders.length - 1 === index ? (
                            <br/>
                        ) : (
                            <hr style={{borderColor: pizzaRed}}/>
                        )}
                    </React.Fragment>
                ))
            )}
            <Button style={{backgroundColor: pizzaRed, borderColor: pizzaRed}}>
                Checkout
                {totalPrize !== 0 &&
                ` (${totalPrize.toLocaleString("en-US", {
                    style: "currency",
                    currency: "EGP",
                })})`}
            </Button>
        </div>
    );
};

export default Bucket;
