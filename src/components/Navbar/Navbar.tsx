// Navbar.tsx
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useProductContext } from "../../context/ProductContext";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const { searchProducts } = useProductContext();
  const [search, setSearch] = useState("");

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
                <FontAwesomeIcon icon={faShoppingCart} className="mobile-icon" />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faHeart} className="mobile-icon" />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faUser} className="mobile-icon" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
