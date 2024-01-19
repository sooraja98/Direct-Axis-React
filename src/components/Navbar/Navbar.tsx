// Navbar.tsx
import React from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="main-navbar">
      {/* Top Row */}
      <div className="top-row">
        <Container>
          <div className="top-row-content">
            <div className="logo">ALL IN ONE</div>
            <div className="search-bar">
              <InputGroup>
                <FormControl placeholder="Search your product" />
                <Button variant="light">
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroup>
            </div>
            <div className="icons">
              <div className="icon">
                <i className="fa fa-shopping-cart"></i>
                <span>Cart (0)</span>
              </div>
              <div className="icon">
                <i className="fa fa-heart"></i>
                <span>Wishlist (0)</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Row - Categories */}
      <div className="bottom-row">
        <Container>
          <ul className="category-list">
            <li>Home</li>
            <li>All Categories</li>
            <li>New Arrivals</li>
            <li>Featured Products</li>
            <li>Electronics</li>
            <li>Fashions</li>
            <li>Accessories</li>
            <li>Home</li>
            <li>Appliances</li>
          </ul>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
