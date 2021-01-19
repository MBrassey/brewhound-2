
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
            data-aos-delay="100">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-xl-20">
                    <div class=" row justify-content-center">
                    <h1 class="bg-dark text-warning">About Us!</h1>
                    </div>
                      <h2 class= "bg-dark text-warning mt-0">Here at Homebrew, you can look up 
                       bars near you or if you are planning a trip to another city,
                       you can find bars close by too. With the use of yelp you can
                       figure out bars with the good rating to ensure a good time out.
                      </h2>
                    <div class ="row justify-content-center">
                      <h1 className="bg-dark text-warning mt-3 text-center" >Contact Us</h1>
                      </div>
                      <div class="row">
                      <div class="container bg-dark text-warning mt-0" >
                      <form class="align-content-center" action="brewhound548@gmail.com">

                            <div class="messages"></div>

                               <div class="controls">

                                <div class="row">
                                  <div class="col-md-6">        
                                    <div class="form-group">
                                      <label for="form_name">Firstname *</label>
                                        <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."></input>
                                          <div class="help-block with-errors"></div>
                                    </div>
                                 </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                      <label for="form_lastname">Lastname *</label>
                                      <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."></input>
                                      <div class="help-block with-errors"></div>
                                     </div>
                                </div>
                                </div>

                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <label for="form_email">Email *</label>
                                      <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."></input>
                                      <div class="help-block with-errors"></div>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                <div class="form-group">
                                  <label for="form_need">Reason *</label>
                                    <select id="form_need" name="need" class="form-control" required="required" data-error="Reason">
                                      <option value=""></option>
                                      <option value="Login Help">Login Help</option>
                                      <option value="Feedback">Feedback</option>
                                      <option value="Other">Other</option>
                                    </select>
                                    <div class="help-block with-errors"></div>
                                    </div>
                                 </div>
                                 </div>
                                 <div class="row">
                                  <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="form_message">Message *</label>
                                        <textarea id="form_message" name="message" class="form-control" placeholder="Message *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                  </div>
                                  <div class="col-md-12">
                                    <button type="submit" name="bttn_1" >Submit</button>
                                 </div>
                                 </div>
                                 <div class="row">
                                  <div class="col-md-12">
                                    <p class="text-muted">
                                    <strong>*</strong> These fields are required.</p>
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
  )};

  export default AboutUs;
