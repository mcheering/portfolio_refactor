import React from "react";
import toolsImage from "../images/tools.jpg"

function Jumbotron() {
      return (
            <div id="index-banner" className="parallax-container">
                  <div className="section no-pad-bot">
                        <div className="container">
                              <br></br>
                              <h1 className="header center teal-text text-lighten-2">Matthew Heering</h1>
                              <div className="row center">
                                    <h5 className="header col s12 light">Providing modern mobile first full-stack web development.
                              </h5>
                              </div>
                              <div className="row center">
                                    <a href="#about" id="download-button"
                                          className="btn-large waves-effect waves-light teal lighten-1 hoverable">More Info <i
                                                className="fas fa-info-circle"></i></a>
                              </div>
                              <br></br>

                        </div>
                        <div className="parallax"><img src={toolsImage} alt="background img 1"
                              styles={{ background: "100%" }} /></div>
                  </div>
            </div>
      )
}
export default Jumbotron;