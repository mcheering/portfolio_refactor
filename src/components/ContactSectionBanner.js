/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import planningImage from "../images/planning.jpg"

function ContactSectionBanner() {
      return (
            <div className="parallax-container valign-wrapper">
                  <div className="section no-pad-bot">
                        <div className="container">
                              <div className="row center">
                                    <h5 className="header col s12 light">Check out my projects on github. </h5>
                              </div>
                              <div className="row center">
                                    <a href="https://github.com/mcheering" id="download-button"
                                          className="btn-large waves-effect waves-light teal lighten-1 hoverable">Github <i
                                                className="fab fa-github"></i></a>
                              </div>
                              <br></br>
                        </div>
                  </div>
                  <div className="parallax"><img src={planningImage} alt="whiteoard image with planning"
                        styles="background-size: 100%;" id="darkenOverlay" /></div>
            </div>
      );
}
export default ContactSectionBanner;
