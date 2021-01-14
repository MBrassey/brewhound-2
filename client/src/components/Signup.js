import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    return null;
  };

  const handleFormSubmit = async (event) => {
    return null;
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;

// import React from 'react';

// import { Link } from "react-router-dom";

// const SignUp = () =>{

//     return (
//       <>
//         <section id="hero" className="d-flex align-items-center">
//       <div className="container sign-form">
// 	      <div className="d-flex justify-content-center h-100">
// 		    <div className="card">
// 			  <div className="card-header">
// 				<h3>Sign Up</h3>
// 			</div>
// 			<div className="card-body">
// 				<form>
//                     <div className="input-group form-group">
// 						<div className="input-group-prepend">
// 							<span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
// 						</div>
// 						<input type="email" className="form-control" placeholder="email"/>
// 					</div>
// 					<div className="input-group form-group">
// 						<div className="input-group-prepend">
// 							<span className="input-group-text"><i className="fas fa-user"></i></span>
// 						</div>
// 						<input type="text" className="form-control" placeholder="username"/>

// 					</div>
// 					<div className="input-group form-group">
// 						<div className="input-group-prepend">
// 							<span className="input-group-text"><i className="fas fa-key"></i></span>
// 						</div>
// 						<input type="password" className="form-control" placeholder="password"/>
// 					</div>
// 					<div className="form-group">
// 						<input type="submit" value="Signup" className="btn float-right"/>
// 					</div>
// 				</form>
// 			</div>
// 			<div className="card-footer">
// 				<div className="d-flex justify-content-center links">
// 					Already have an account?
//                     <Link to ={"/login"}>Sign In</Link>
// 				</div>
// 				<div class className="d-flex justify-content-center">

// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
// </section>

//       </>

// );
// };

// export default SignUp;
