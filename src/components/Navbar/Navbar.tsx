import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart, faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import Cookies from "js-cookie";
import "./Navbar.scss";

// Navbar component
const Navbar: React.FC = () => {
  // Accessing functions from the product context
  const { searchProducts } = useProductContext();

  // State to manage the search input value
  const [search, setSearch] = useState("");
  
  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to handle logout button click
  const handleLogout = () => {
    // Remove the user cookie
    Cookies.remove("userEmail");

    // Redirect to the login page
    navigate("/");
  };

  // JSX structure for the Navbar
  return (
    <nav className="main-navbar">
      <div className="top-row">
        <Container>
          <div className="top-row-content">
            {/* Logo */}<div>
            <Link to='/main' style={{ textDecoration: 'none', color: 'inherit' }}> <h1> ALL IN ONE</h1> </Link></div>
            
            {/* Search Bar */}
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search the product"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  searchProducts(e.target.value);
                }}
              />
            </div>
            
            {/* Icons */}
            <div className="icons">
              {/* Shopping Cart Icon */}
              <div className="icon">
                <Link to="/cart">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="mobile-icon"
                  />
                </Link>
              </div>

              {/* User Profile Icon */}
              <div className="icon">
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUser} className="mobile-icon" />
                </Link>
              </div>
              
              {/* Logout Button */}
              <div className="icon">
                <Button
                  variant="link"
                  onClick={handleLogout}
                  style={{ color: "white", backgroundColor: "red" }}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
