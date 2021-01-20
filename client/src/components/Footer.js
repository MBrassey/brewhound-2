import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";

const Footer = () => {
  return (
    <FadeIn>
      <div className="d-flex flex-column" >
        <footer className="bg-dark text-white-50 text-center footer">
          <Link to={"/about"} className="text-warning">
            About Us
          </Link>
          <small className= "float-right"> Brewhound &copy; 2021</small>
        </footer>
      </div>
    </FadeIn>
  );
};

export default Footer;
