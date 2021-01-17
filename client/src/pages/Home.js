import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import React from "react";

const Home = () => {
  return (
    <FadeIn>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container-fluid"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-xl-5">
                  <h1 className="BrewFont">Welcome To Brew Hound.</h1>
                  <h2>
                    Sniff out your next brew. Brew Hound, We're mans best
                    friend.
                  </h2>
                  <Link to="/search" className="btn-get-started">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Home;
