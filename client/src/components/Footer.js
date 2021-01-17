import React, {useState} from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="d-flex flex-column">
        <footer className="bg-dark text-white-50 text-center">
        <Link to ={"/about"} className="text-warning">About Us</Link>

        </footer>
        </div>

    );
  };
  
  export default Footer;