/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../images/logo.svg"

function Nav() {
      return (
            <nav className="white" role="navigation">
                  <div className="nav-wrapper container">
                        <a id="logo-container" className="brand-logo center"><img src={logo} style={{ height: "40px" }}
                              id="imageLogo" alt="logo" /></a>


                        <ul className="right hide-on-med-and-down">
                              <li><a href="#about">About</a></li>
                              <li><a href="#projects">Projects</a></li>
                              <li><a href="#contact">Contact</a></li>
                        </ul>

                        <ul id="nav-mobile" className="sidenav">
                              <li><a href="#about">About</a></li>
                              <li><a href="#projects">Projects</a></li>
                              <li><a href="#contact">Contact</a></li>
                        </ul>
                        <a data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                  </div>
            </nav>
      );
}
export default Nav;