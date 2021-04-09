import React from 'react'

function Footer() {
      return (
            <footer className="page-footer teal">
                  <div className="container">
                        <div className="row">
                              <div className="col l6 s12">
                                    <a id="contact"></a>
                                    <h5 className="white-text">Contact Me</h5>
                                    <p className="grey-text text-lighten-4">I'm a freelance web developer from the St. Louis
                                    Region in Missouri looking to help you on your next project. </p>


                              </div>

                              <div className="right col l3 s12">
                                    <h5 className="white-text">Connect</h5>
                                    <ul>
                                          <li><a className="white-text"
                                                href="https://www.linkedin.com/in/matthew-heering-70525998/">LinkedIn
                                          </a><i className="fab fa-linkedin"></i>
                                          </li>
                                          <li><a className="white-text" href="assets/Full_Stack_Web_Dev_Resume.pdf"
                                                download>Resume </a><i className="far fa-file"></i></li>
                                          <li><a className="white-text" href="https://twitter.com/matthew_heering">Twitter </a><i
                                                className="fab fa-twitter"></i></li>
                                          <li><a className="white-text"
                                                href="https://www.instagram.com/matthew.heering/">Instagram </a><i
                                                      className="fab fa-instagram"></i>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </div>
                  <div className="footer-copyright">
                        <div className="container">
                              Made by Matthew Heering
                  </div>
                  </div>
            </footer>
      );
}

export default Footer;

