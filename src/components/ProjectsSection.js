/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Project from './Project'
import ProjectData from './projectData'

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
                                          {ProjectData.map(project => (
                                                <Project
                                                      name={project.name}
                                                      image={project.imageLink}
                                                      description={project.description}
                                                      deployed={project.deployedLink}
                                                      github={project.githubLink}
                                                />))}
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      );
}
export default ProjectSection;

