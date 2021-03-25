import React, { Component } from "react";

import Project from "../Project";
import { projects } from './../../data/projects';

import styles from "./index.module.scss";

class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.setState({
      projects: projects
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.projectsContainer}>
          {this.state.projects.map(project => (
            <Project
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
