/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CookingWithSassImg from '../images/cooking_with_sass.jpg'
import WeatherMapImg from '../images/weathermap.jpg'
import CodeQuizImg from '../images/Code_Quiz.jpg'
import WhataburgerImg from '../images/Whataburger.jpg'

function ProjectSection() {
      return (
            <div className='container'>
                  <div className='section'>
                        <a id='projects'></a>
                        <div className="row">
                              <div className="col">
                                    <h3><i className="mdi-content-send brown-text"></i></h3>
                                    <h4 className="center">Projects</h4>
                                    <div className="row projectCards">
                                          <div className="col  s9 m4 l3 cardPosition">
                                                <div className="card  ">
                                                      <div className="card-image waves-effect waves-block waves-light">
                                                            <img className="activator" src={CookingWithSassImg}
                                                                  alt="cooking with sass thumbnail" />
                                                      </div>
                                                      <div className="card-content">
                                                            <span className="card-title activator grey-text text-darken-4">Cooking
                                                            With
                                                            Sass<i className="material-icons right">more_vert</i></span>
                                                      </div>
                                                      <div className="card-reveal">
                                                            <span className="card-title grey-text text-darken-4">Description<i
                                                                  className="material-icons right">close</i></span>
                                                            <p>This is a web app that uses the YouTube and Edamam API to
                                                            return
                                                            ingredients, a link to a recipe, and a video that shows how
                                                            to
                                                            make the dish.</p>
                                                            <a className="waves-effect waves-light btn"
                                                                  href="https://audreymking.github.io/Recipe-Project/">Deployed
                                                            Application</a>
                                                            <a className="waves-effect waves-light btn"
                                                                  href="https://github.com/audreymking/Recipe-Project">GIthub</a>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col  s9 m4 l3 cardPosition">
                                                <div className="card ">
                                                      <div className="card-image waves-effect waves-block waves-light">
                                                            <img className="activator" src={WeatherMapImg}
                                                                  alt="weathermap thumbnail" />
                                                      </div>
                                                      <div className="card-content">
                                                            <span className="card-title activator grey-text text-darken-4">Weather
                                                            Dashboard<i
                                                                        className="material-icons right">more_vert</i></span>
                                                      </div>
                                                      <div className="card-reveal">
                                                            <span className="card-title grey-text text-darken-4">Description<i
                                                                  className="material-icons right">close</i></span>
                                                            <p>This web app uses the openweathermap API to provide current
                                                            weather
                                                            and a 5 day forecast to the user.</p>
                                                            <a className="waves-effect waves-light btn"
                                                                  href="https://mcheering.github.io/Weather-Dashboard/">Deployed
                                                            Application</a>
                                                            <a className="waves-effect waves-light btn"
                                                                  href="https://github.com/mcheering/Weather-Dashboard">GIthub</a>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col  s9 m4 l3 cardPosition">
                                                <div className="card">
                                                      <div className="card-image waves-effect waves-block waves-light">
                                                            <img className="activator" src={CodeQuizImg}
                                                                  alt="code quiz thumbnail" />
                                                      </div>
                                                      <div className="card-content">
                                                            <span className="card-title activator grey-text text-darken-4">Coding
                                                            Quiz<i className="material-icons right">more_vert</i></span>
                                                      </div>
                                                      <div className="card-reveal">
                                                            <span className="card-title grey-text text-darken-4">Description<i
                                                                  className="material-icons right">close</i></span>
                                                            <p>The goal of this project was to make a web based quiz that
                                                            generates
                                                            a score based on how much time is left, and correct answers.
                                                            The
                                                            users score is penalized by a constant for each question
                                                            plus a
                                                            factor of the time remaining. </p>
                                                            <a className="waves-effect waves-light btn"
                                                                  href="https://mcheering.github.io/Code-Quiz/">Deployed
                                                            Application</a>
                                                            <a className="waves-effect waves-light btn"
                                                                  href="https://github.com/mcheering/Code-Quiz">Github</a>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col  s9 m4 l3 cardPosition">
                                                <div className="card">
                                                      <div className="card-image waves-effect waves-block waves-light">
                                                            <img className="activator" src={WhataburgerImg}
                                                                  alt="code quiz thumbnail" />
                                                      </div>
                                                      <div className="card-content">
                                                            <span className="card-title activator grey-text text-darken-4">Whataburger
                                                            Eat-A-Burger<i
                                                                        className="material-icons right">more_vert</i></span>
                                                      </div>
                                                      <div className="card-reveal">
                                                            <span className="card-title grey-text text-darken-4">Description<i
                                                                  className="material-icons right">close</i></span>
                                                            <p>The goal of this project was to make a web based app to
                                                            demonstrate my ability to utilize MVC design.</p>
                                                            <a className="waves-effect waves-light btn"
                                                                  href="https://arcane-crag-01125.herokuapp.com">Deployed
                                                            Application</a>
                                                            <a className="waves-effect waves-light btn"
                                                                  href="https://github.com/mcheering/Whataburger_APP">Github</a>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                              </div>
                        </div>

                  </div>
            </div>
      );
}
export default ProjectSection;

