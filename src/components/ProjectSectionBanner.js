/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import teamworkBackground from "../images/teamwork.jpg"

function ProjectSectionBanner() {
      return (
            <div className="parallax-container valign-wrapper">
                  <div className="section no-pad-bot">
                        <div className="container">
                              <div className="row center">
                                    <h5 className="header col s12 light">Check out some projects I've completed.</h5>
                              </div>
                        </div>
                  </div>
                  <div className="parallax"><img src={teamworkBackground} alt="showing teamwork"
                        styles="background-size: 100%;" id="darkenOverlay" /></div>
            </div>
      )
}
export default ProjectSectionBanner;



