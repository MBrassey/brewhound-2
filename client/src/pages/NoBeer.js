import React from "react";

const NoBeer = () => {
  return (
    <>
      <section id="hero" className="align-items-center">
        <div
          className="container-fluid"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-xl-20">
                  <h1>Beer not found!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoBeer;
