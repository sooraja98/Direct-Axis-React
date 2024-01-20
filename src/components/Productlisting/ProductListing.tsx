// ProductGrid.tsx
import React from "react";
import { Card, Button, Spinner, Alert } from "react-bootstrap";
import { useProductContext } from "../../context/ProductContext";
import "./ProductListing.scss";

const ProductGrid: React.FC = () => {
  const { products, loading, error, searchResults, fetchMoreProducts } =
    useProductContext();

  if (loading) {
    return (
      <div className="loading-container text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

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

  if (!products.length && !searchResults.length) {
    return (
      <div className="no-data-container text-center">
        <p>No data available.</p>
      </div>
    );
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
                      className="add-cart-button">
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
                      className="add-cart-button">
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
