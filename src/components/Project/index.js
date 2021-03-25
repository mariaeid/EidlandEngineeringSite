import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Project = props => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.title} />
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
