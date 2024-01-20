// Sidebar.tsx

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useProductContext } from "../../context/ProductContext";
import "./Sidebar.scss";

// Sidebar component
const Sidebar: React.FC = () => {
  // Accessing functions from the product context
  const { fetchCategoryProducts, sortProducts } = useProductContext();

  // State to manage sorting options
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  // State to manage selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Function to handle checkbox change for category filtering
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedCategory = e.target.value;

    // Uncheck other checkboxes
    if (selectedCategory === newSelectedCategory) {
      setSelectedCategory(null);
      fetchCategoryProducts(null); // Reset category filter
    } else {
      setSelectedCategory(newSelectedCategory);
      fetchCategoryProducts(newSelectedCategory);
    }
  };

  // Function to handle sorting option change
  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
    sortProducts(selectedSort, sortOrder);
  };

  // Function to handle sorting order change
  const handleSortOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);
    sortProducts(sortBy, selectedSortOrder);
  };

  // JSX structure for the Sidebar
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* Category Filtering */}
        <Form.Group controlId="category">
          <Form.Label>
            <b>Categories:</b>
          </Form.Label>
          <div className="category-grid">
            <Form.Check
              type="checkbox"
              label="Electronics"
              value="electronics"
              onChange={handleCheckboxChange}
              checked={selectedCategory === "electronics"}
            />
            <Form.Check
              type="checkbox"
              label="Men's Clothing"
              value="men's clothing"
              onChange={handleCheckboxChange}
              checked={selectedCategory === "men's clothing"}
            />
            <Form.Check
              type="checkbox"
              label="Women's Clothing"
              value="women's clothing"
              onChange={handleCheckboxChange}
              checked={selectedCategory === "women's clothing"}
            />
            <Form.Check
              type="checkbox"
              label="Jewelry"
              value="jewelery"
              onChange={handleCheckboxChange}
              checked={selectedCategory === "jewelery"}
            />
          </div>
        </Form.Group>

        {/* Sorting Options */}
        <Form.Group className="sorting">
          <Form.Label className="h5 mb-3">
            <b>Sort By:</b>
          </Form.Label>
          <div className="sorting-options">
            <Form.Check
              type="radio"
              label="Name"
              name="sortingOption"
              value="name"
              onChange={handleSortChange}
            />
            <Form.Check
              type="radio"
              label="Price"
              name="sortingOption"
              value="price"
              onChange={handleSortChange}
            />
          </div>

          {/* Sorting Order Options */}
          <div className="sorting-order-options">
            <Form.Check
              type="radio"
              label="Ascending"
              name="sortingOrderOption"
              value="asc"
              onChange={handleSortOrderChange}
            />
            <Form.Check
              type="radio"
              label="Descending"
              name="sortingOrderOption"
              value="desc"
              onChange={handleSortOrderChange}
            />
          </div>
        </Form.Group>
      </div>
    </div>
  );
};

export default Sidebar;
