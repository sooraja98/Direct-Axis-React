import React, { useState, useEffect } from "react";
import { Container, Button, Card, ListGroup } from "react-bootstrap";
import "./Cart.scss";

// Define the structure of a cart item
interface CartItem {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
  quantity: number;
}

// Cart component
const Cart: React.FC = () => {
  // State to manage the cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Get user email from the cookie
  const userEmail = document.cookie;

  // useEffect to run when the component mounts and when userEmail changes
  useEffect(() => {
    // Retrieve cart data from local storage
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      // Parse the stored cart data
      const parsedCart: CartItem[] = JSON.parse(storedCart);
      
      // Filter cart items based on user's email
      const userCartItems = parsedCart.filter((item) => item.user === userEmail);
      
      // Set the cart items in the state
      setCartItems(userCartItems);
    }
  }, [userEmail]); // Trigger useEffect when userEmail changes

  // Function to handle removing an item from the cart
  const handleRemoveItem = (productId: number) => {
    // Remove the item from the cart based on productId
    const updatedCart = cartItems.filter(
      (item) => item.product.id !== productId
    );

    // Update the state and local storage with the modified cart
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // JSX structure for rendering the cart
  return (
    <Container className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        // Display a message if the cart is empty
        <p>Your cart is empty</p>
      ) : (
        // Render each cart item if the cart is not empty
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
