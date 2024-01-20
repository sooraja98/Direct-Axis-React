// Cart.tsx
import React, { useState, useEffect } from "react";
import { Container, Button, Card, ListGroup } from "react-bootstrap";
import "./Cart.scss"; // Import the SCSS file
type CartItem = {
    product: {
      id: number;
      title: string;
      price: number;
      image: string; 
    };
    quantity: number;
  };
const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Retrieve cart data from local storage
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
    }
  }, []);

  const handleRemoveItem = (productId: number) => {
    // Remove the item from the cart based on productId
    const updatedCart = cartItems.filter((item) => item.product.id !== productId);

    // Update the state and local storage
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Container className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <Card key={cartItem.product.id} className="cart-item">
              <Card.Img
                variant="top"
                src={cartItem.product.image}
                className="cart-item-image"
              />
              <Card.Body>
                <Card.Title>{cartItem.product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Price: ${cartItem.product.price.toFixed(2)}
                </Card.Subtitle>
                <ListGroup>
                  <ListGroup.Item>
                    Quantity: {cartItem.quantity}
                  </ListGroup.Item>
                </ListGroup>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveItem(cartItem.product.id)}
                >
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Cart;
