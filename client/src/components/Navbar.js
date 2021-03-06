import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import brewLogo from "../img/brewLogo.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import FadeIn from "react-fade-in";
import SignUp from "./SignupForm";
import Auth from "../utils/auth";

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <FadeIn>
        <Navbar bg="light" variant="light" expand="lg" id="header">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="logo">
              <img className="brewLogo" src={brewLogo} alt="pint of beer"></img>
              <span>B</span>rew<span>H</span>ound
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/search">
                  Search For Breweries
                </Nav.Link>
                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link as={Link} to="/saved">
                      Checkout Your Breweries
                    </Nav.Link>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </>
                ) : (
                  <Nav.Link
                    className="get-started-btn text-center"
                    onClick={() => setShowModal(true)}
                  >
                    Login/Sign Up
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* Modal  */}
        <Modal
          size="sm"
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="login-signup-modal"
        >
          <Tab.Container defaultActiveKey="login">
            <Modal.Header closeButton>
              <Modal.Title id="signup-modal">
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="login" className="BrewFont text-sec">
                      Login
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="signup" className="BrewFont text-sec">
                      Sign Up
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey="login">
                  <LoginForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
                <Tab.Pane eventKey="signup">
                  <SignUp handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
              </Tab.Content>
            </Modal.Body>
          </Tab.Container>
        </Modal>
      </FadeIn>
    </>
  );
};

export default AppNavbar;

// import React from "react";

// import { Link } from "react-router-dom";

// const Nav = () => {
//   return (
//     <header className="fixed-top header" id="header">
//       <div className="container-fluid">
//         <div className="row justify-content-center">
//           <div className="col-xl-10 d-flex align-items-center">
//             <h1 className="logo mr-auto">
//               <Link to="/">Brew Hound</Link>
//               <span>.</span>
//             </h1>
//             <nav className="nav-menu d-none d-lg-block">
//               <ul>
//                 <li>
//                   <a href="#">ipsum</a>
//                 </li>
//                 <li>
//                   <a href="#">dolor</a>
//                 </li>
//                 <li>
//                   <a href="#">amet</a>
//                 </li>
//               </ul>
//             </nav>
//             <Link className="get-started-btn" to="/login">
//               Login/SignUp
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Nav;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import { Container, Modal, Tab } from "react-bootstrap";
// import SignUpForm from "./SignupForm";
// import LoginForm from "./LoginForm";
// import Auth from "../utils/auth";

// const Nav = () => {
//   // set modal display state
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <header className="fixed-top header" id="header">
//       <div className="container-fluid">
//         <div className="row justify-content-center">
//           <div className="col-xl-10 d-flex align-items-center">
//             <h1 className="logo mr-auto">
//               <a>
//                 <Link to="/">Brew Hound</Link>
//                 <span>.</span>
//               </a>
//             </h1>
//             <nav className="nav-menu d-none d-lg-block">
//               <ul>
//                 <li>
//                   <a href="#">ipsum</a>
//                 </li>
//                 <li>
//                   <a href="#">dolor</a>
//                 </li>
//                 <li>
//                   <a href="#">amet</a>
//                 </li>
//               </ul>
//             </nav>
//             <Link className="get-started-btn" to="/login">
//               Login/SignUp
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Nav;
