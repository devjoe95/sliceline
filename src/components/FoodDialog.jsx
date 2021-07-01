import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  FormControl,
  InputGroup,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { AppContext } from "../App";
import { pizzaRed } from "../styles/colors";

const FoodDialog = ({ item, show, handleClose }) => {
  const context = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    localStorage.setItem("bucket", JSON.stringify(context.state.orders));
  }, [context.state]);
  
  if (!item) return null;
  const order = {
    ...item,
    count: quantity,
  };

  const addToBucket = () => {
    const selectedOrder = context.state.orders.find(
      (res) => res.name === order.name
    );
    if (selectedOrder) {
      const clonedOrders = context.state.orders.filter((res) =>
        res.name === order.name ? (res.count += quantity) : res.count
      );
      context.setState({ ...context.state, orders: clonedOrders });
    } else {
      context.setState({
        ...context.state,
        orders: [...context.state.orders, order],
      });
    }
    setQuantity(1);
  };

  return (
    <>
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header className="p-0 overflow-hidden">
          <img src={item.img} alt={item.name} />
        </Modal.Header>
        <Modal.Title className="text-center mt-1" style={{ color: pizzaRed }}>
          {item.name}
        </Modal.Title>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Category: {item.category}</ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Quantity: </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button
                        style={{
                          backgroundColor: pizzaRed,
                          borderColor: pizzaRed,
                        }}
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </Button>{" "}
                    </InputGroup.Prepend>
                    <FormControl
                      className="text-center"
                      placeholder={quantity}
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      disabled
                    />
                    <InputGroup.Append>
                      <Button
                        style={{
                          backgroundColor: pizzaRed,
                          borderColor: pizzaRed,
                        }}
                        onClick={() => {
                          if (quantity < 10) {
                            setQuantity(quantity + 1);
                          }
                        }}
                      >
                        +
                      </Button>{" "}
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              Price:{" "}
              {item.price.toLocaleString("en-US", {
                style: "currency",
                currency: "EGP",
              })}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{ borderColor: pizzaRed, color: pizzaRed }}
            variant="outline-danger"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: pizzaRed, borderColor: pizzaRed }}
            onClick={() => {
              addToBucket();
              handleClose();
            }}
          >
            Buy{" "}
            {(item.price * quantity).toLocaleString("en-US", {
              style: "currency",
              currency: "EGP",
            })}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FoodDialog;
