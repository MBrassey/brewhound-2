import React from 'react';

import { Link } from "react-router-dom";


const SignUp = () =>{
  
    return (
      <>
        <section id="hero" className="d-flex align-items-center">
      <div className="container sign-form">
	      <div className="d-flex justify-content-center h-100">
		    <div className="card">
			  <div className="card-header">
				<h3>Sign Up</h3>
			</div>
			<div className="card-body">
				<form>
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fas fa-envelope-square"></i></span>
						</div>
						<input type="email" className="form-control" placeholder="email"/>
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username"/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"/>
					</div>
					<div className="form-group">
						<input type="submit" value="Signup" class="btn float-right"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Already have an account?
                    <Link to ={"/login"}>Sign In</Link>
				</div>
				<div class className="d-flex justify-content-center">
				
				</div>
			</div>
		</div>
	</div>
</div>
</section>


      </>

);
};

export default SignUp;
  
  
  
