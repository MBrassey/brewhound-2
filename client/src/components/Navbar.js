import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../utils/auth";

const Nav = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="fixed-top header" id="header">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-10 d-flex align-items-center">
            <h1 className="logo mr-auto">
              <a>
                <Link to="/">Brew Hound</Link>
                <span>.</span>
              </a>
            </h1>
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li>
                  <a href="#">ipsum</a>
                </li>
                <li>
                  <a href="#">dolor</a>
                </li>
                <li>
                  <a href="#">amet</a>
                </li>
              </ul>
            </nav>
            <Link className="get-started-btn" to="/login">
              Login/SignUp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
