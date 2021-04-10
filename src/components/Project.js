/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


function ProjectSection(props) {
      return (
            <div className="col  s9 m4 l3 cardPosition">
                  <div className="card  ">
                        <div className="card-image waves-effect waves-block waves-light">
                              <img className="activator" src={props.image}
                                    alt="cooking with sass thumbnail" />
                        </div>
                        <div className="card-content">
                              <span className="card-title activator grey-text text-darken-4">{props.name}<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                              <span className="card-title grey-text text-darken-4">Description<i
                                    className="material-icons right">close</i></span>
                              <p>{props.description}</p>
                              <a className="waves-effect waves-light btn"
                                    href={props.deployed}>Deployed
                                                            Application</a>
                              <a className="waves-effect waves-light btn"
                                    href={props.github}>GIthub</a>
                        </div>
                  </div>
            </div>
      );
}
export default ProjectSection;