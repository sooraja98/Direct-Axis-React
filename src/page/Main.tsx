

import React from "react";
import Navbar from '../components/Navbar/Navbar'; 
import Sidebar from "../components/sidebar/Sidebar"; 
import ProductListing from "../components/Productlisting/ProductListing"; 
import "./Main.scss";

const Main: React.FC = () => {
  return (
    <div className="main-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="content-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <ProductListing />
      </div>
    </div>
  );
};

export default Main;
