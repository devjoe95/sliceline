import React, { useContext, useEffect, useMemo, useState } from "react";
import { pizzaRed } from "../styles/colors";
import OrderItem from "./OrderItem";
import { AppContext, database } from "../App";
import { Button } from "react-bootstrap";

const Bucket = () => {
  const context = useContext(AppContext);
  const [tax, setTax] = useState(14 / 100);
  const totalPrice = useMemo(() => {
    if (context.state.orders.length !== 0) {
      return context.state.orders.reduce(
        (acc, val) => acc + val.count * val.price,
        0
      );
    } else {
      return 0;
    }
  }, [context.state.orders]);
  useEffect(() => {
    document.title = `(${context.state.orders.length}) ${document.title}`;
  }, [context.state.orders]);
  const orderHandler = () => {
    const order = database.ref("/orders").push();
    order
      .set({
        username: context.state.user.displayName,
        email: context.state.user.email,
        items: context.state.orders,
        totalPrice,
      })
      .then(() => {
        context.setState({ ...context.state, orders: [] });
        localStorage.removeItem("bucket");
      });
  };
  const checkout = () => {
    if (!context.state.user) {
      const auth = window.firebase.auth();
      const provider = new window.firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
      auth.onAuthStateChanged(
        (user) => {
          context.setState({ ...context.state, user });
        },
        (err) => {}
      );
    } else {
      orderHandler();
    }
  };
  return (
    <div className="my-5">
      <h2 className="text-center" style={{ color: pizzaRed }}>
        Bucket
      </h2>
      {context.state.orders.length <= 0 ? (
        <p style={{ textAlign: "center" }}>Bucket is empty.</p>
      ) : (
        context.state.orders.map((order, index) => (
          <React.Fragment key={index}>
            <OrderItem orderItem={order} />
            {context.state.orders.length - 1 === index ? (
              <br />
            ) : (
              <hr style={{ borderColor: pizzaRed }} />
            )}
          </React.Fragment>
        ))
      )}
      <p className="text-muted text-center">
        Adding a {Math.floor(tax * 100)}% TAX.
      </p>
      <div className="d-block text-center">
        <Button
          disabled={context.state.orders.length === 0}
          style={{ backgroundColor: pizzaRed, borderColor: pizzaRed }}
          onClick={checkout}
        >
          Checkout
          {totalPrice !== 0 &&
            ` (${(totalPrice + totalPrice * tax).toLocaleString("en-US", {
              style: "currency",
              currency: "EGP",
            })})`}
        </Button>
        <Button
          variant="outline-danger"
          className="mx-3"
          onClick={() => {
            context.setState({ ...context.state, orders: [] });
            localStorage.removeItem("bucket");
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Bucket;
