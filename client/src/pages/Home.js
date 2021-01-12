import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
        <div className="container-fluid" data-aos="zoom-out" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-xl-5">
                  <h1>Donec convallis efficitur felis at tempus</h1>
                  <h2>
                    Integer a justo vehicula, cursus augue sit amet, aliquet
                    tortor
                  </h2>
                  <Link to ="/" className="btn-get-started">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;