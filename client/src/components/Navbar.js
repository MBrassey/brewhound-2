import React from 'react';



function Nav() {

    return (
        <header className="fixed-top" id="header">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-10 d-flex align-items-center">
              <h1 className="logo mr-auto">
                <a href="#">Lorem<span>.</span></a>
              </h1>
              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li><a href="#">ipsum</a></li>
                  <li><a href="#">dolor</a></li>
                  <li><a href="#">amet</a></li>
                </ul>
              </nav>
              <a href="#" className="get-started-btn">Get Started</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Nav;

