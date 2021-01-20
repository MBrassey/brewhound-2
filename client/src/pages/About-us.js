import FadeIn from "react-fade-in";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <FadeIn>
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
                    <div className=" row justify-content-center">
                      <h1 className="bg-dark text-warning">About Us!</h1>
                    </div>
                    <h2 className="bg-dark text-warning mt-0">
                      Here at Homebrew, you can look up bars near you or if you
                      are planning a trip to another city, you can find bars
                      close by too. With the use of yelp you can figure out bars
                      with the good rating to ensure a good time out.
                    </h2>
                    <div className="row justify-content-center">
                      <h1 className="bg-dark text-warning mt-3 text-center">
                        Contact Us
                      </h1>
                    </div>
                    <div className="row">
                      <div className="container bg-dark text-warning mt-0">
                        <form
                          className="align-content-center"
                          action="brewhound548@gmail.com"
                        >
                          <div className="messages"></div>

                          <div className="controls">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="form_name">Firstname *</label>
                                  <input
                                    id="form_name"
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Please enter your firstname *"
                                    required="required"
                                    data-error="Firstname is required."
                                  ></input>
                                  <div className="help-block with-errors"></div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="form_lastname">
                                    Lastname *
                                  </label>
                                  <input
                                    id="form_lastname"
                                    type="text"
                                    name="surname"
                                    className="form-control"
                                    placeholder="Please enter your lastname *"
                                    required="required"
                                    data-error="Lastname is required."
                                  ></input>
                                  <div className="help-block with-errors"></div>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="form_email">Email *</label>
                                  <input
                                    id="form_email"
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Please enter your email *"
                                    required="required"
                                    data-error="Valid email is required."
                                  ></input>
                                  <div className="help-block with-errors"></div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="form_need">Reason *</label>
                                  <select
                                    id="form_need"
                                    name="need"
                                    className="form-control"
                                    required="required"
                                    data-error="Reason"
                                  >
                                    <option value=""></option>
                                    <option value="Login Help">
                                      Login Help
                                    </option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Other">Other</option>
                                  </select>
                                  <div className="help-block with-errors"></div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="form_message">
                                    Message *
                                  </label>
                                  <textarea
                                    id="form_message"
                                    name="message"
                                    className="form-control"
                                    placeholder="Message *"
                                    rows="4"
                                    required="required"
                                    data-error="Please, leave us a message."
                                  ></textarea>
                                  <div className="help-block with-errors"></div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <button type="submit" name="bttn_1">
                                  Submit
                                </button>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <p className="text-muted">
                                  <strong>*</strong> These fields are required.
                                </p>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};

export default AboutUs;
