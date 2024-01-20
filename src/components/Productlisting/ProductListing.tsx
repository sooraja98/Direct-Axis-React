// ProductGrid.tsx
import React from "react";
import { Card, Button, Spinner, Alert } from "react-bootstrap";
import { useProductContext } from "../../context/ProductContext";
import "./ProductListing.scss";

const ProductGrid: React.FC = () => {
  const { products, loading, error, searchResults, fetchMoreProducts } =
    useProductContext();

  const addToCart = (product: Product) => {
    // Get user email from cookie (replace with your logic to get user email)
    const userEmail = document.cookie;

    // Retrieve existing cart data from local storage
    const existingCartData = localStorage.getItem("cart");

    // Parse existing cart data or initialize an empty array
    const cartItems = existingCartData ? JSON.parse(existingCartData) : [];

    // Add the product to the cart along with user email
    const cartItem = {
      user: userEmail,
      product: {
        id: product.id,
        title: product.title,
        price: product.price,
        image:product.image
      },
    };

    cartItems.push(cartItem);

    // Save the updated cart data back to local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Provide feedback to the user (you may want to use a notification library)
    alert("Product added to cart!");
  };

  if (loading) {
    // ... (unchanged)
  }

  if (error) {
    // ... (unchanged)
  }

  if (!products.length && !searchResults.length) {
    // ... (unchanged)
  }

  return (
    <div className="container">
      <div className="product-grid">
        {searchResults.length > 0
          ? searchResults.map((product) => (
              <div key={product.id} className="product-card">
                <Card>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="product-image"
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price.toFixed(2)}</Card.Text>
                    <Card.Text>Rating: {product.rating.rate}</Card.Text>
                    <Button
                      variant="primary"
                      type="button"
                      className="add-cart-button"
                      onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          : products.map((product) => (
              <div key={product.id} className="product-card">
                <Card>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="product-image"
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price.toFixed(2)}</Card.Text>
                    <Card.Text>Rating: {product.rating.rate}</Card.Text>
                    <Button
                      variant="primary"
                      type="button"
                      className="add-cart-button"
                      onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </div>
      {products.length > 0 && (
        <div className="load-more-container">
          <Button onClick={fetchMoreProducts} variant="primary">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
