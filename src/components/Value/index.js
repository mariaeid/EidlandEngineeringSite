import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Value = props => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

Value.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Value;
