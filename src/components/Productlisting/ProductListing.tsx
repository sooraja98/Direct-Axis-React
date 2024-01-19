// ProductListing.tsx
import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProductListing.scss";
import Navbar from "../Navbar/Navbar";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   imageUrl: string;
// }

// interface ProductListingProps {
//   products: Product[];
// }

const ProductListing: React.FC = () => {
  // Dummy product data for the initial demo
  const demoProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="product-listing">
        {demoProducts.map((product) => (
          <Card key={product.id} className="product-card">
            <Card.Img
              variant="top"
              src={product.imageUrl}
              className="product-image"
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price.toFixed(2)}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductListing;
