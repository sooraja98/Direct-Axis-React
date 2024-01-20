import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import Cookies from "js-cookie";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const { searchProducts } = useProductContext();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the user cookie
    Cookies.remove("userEmail");

    // Redirect to the login page
    navigate("/");
  };

  return (
    <nav className="main-navbar">
      <div className="top-row">
        <Container>
          <div className="top-row-content">
            <div className="logo">ALL IN ONE</div>
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
            <div className="icons">
              <div className="icon">
                <Link to="/cart">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="mobile-icon"
                  />
                </Link>
              </div>

              <div className="icon">
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUser} className="mobile-icon" />
                </Link>
              </div>
              <div className="icon">
                <Button
                  variant="link"
                  onClick={handleLogout}
                  style={{ color: "white", backgroundColor: "red" }}>
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
