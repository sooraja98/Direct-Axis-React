import React, { useEffect } from "react";
import Navbar from '../components/Navbar/Navbar'; 
import Sidebar from "../components/sidebar/Sidebar"; 
import ProductListing from "../components/Productlisting/ProductListing"; 
import { useNavigate } from "react-router-dom"; 
import Cookies from "js-cookie"; 
import "./Main.scss"; 

const Main: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userCookie = Cookies.get("userEmail");

    if (!userCookie) {
      navigate("/");
    }
  }, [navigate]); 
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
