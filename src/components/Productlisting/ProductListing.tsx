import React from "react";
import { Card, Button, Spinner, Alert } from "react-bootstrap";
import { useProductContext } from "../../context/ProductContext";
import "./ProductListing.scss";

// Define any props if needed
interface ProductGridProps {}

const ProductGrid: React.FC<ProductGridProps> = () => {
  // Destructure values from the product context
  const {
    products,
    loading,
    error,
    searchResults,
    fetchMoreProducts,
  } = useProductContext();

  // Function to add a product to the cart
  const addToCart = (product: Product): void => {
    // Get user email from cookie (replace with your logic to get user email)
    const userEmail: string = document.cookie;

    // Retrieve existing cart data from local storage
    const existingCartData: string | null = localStorage.getItem("cart");

    // Parse existing cart data or initialize an empty array
    const cartItems: CartItem[] = existingCartData
      ? JSON.parse(existingCartData)
      : [];

    // Check if the product with the same ID already exists in the cart
    const existingCartItem = cartItems.find(
      (item) => item.product.id === product.id && item.user === userEmail
    );

    if (existingCartItem) {
      // If the product exists, you may want to update the quantity or show a message
      alert("Product already in the cart!");
    } else {
      // Add the product to the cart along with user email
      const cartItem: CartItem = {
        user: userEmail,
        product: {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        },
      };

      cartItems.push(cartItem);

      // Save the updated cart data back to local storage
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Provide feedback to the user (you may want to use a notification library)
      alert("Product added to cart!");
    }
  };

  // If data is still loading, show a loading spinner
  if (loading) {
    return (
      <div className="loading-container text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // If there's an error, display an error message
  if (error) {
    return (
      <div className="error-container text-center">
        <Alert variant="danger">
          <Alert.Heading>Error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </div>
    );
  }

  // If there are no products and no search results, show a message
  if (!products.length && !searchResults.length) {
    return (
      <div className="no-data-container text-center">
        <p>No data available.</p>
      </div>
    );
  }

  // Render the product grid
  return (
    <div className="container">
      <div className="product-grid">
        {searchResults.length > 0 ? (
          // If there are search results, map and display them
          searchResults.map((product: Product) => (
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
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          // If there are no search results, display the products
          products.map((product: Product) => (
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
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
      {/* Load More Button */}
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
