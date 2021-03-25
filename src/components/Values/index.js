import React, { Component } from "react";
import Value from "../Value";
import { values } from '../../data/values';

import styles from "./index.module.scss";

class Values extends Component {
  state = {
    values: []
  };

  componentDidMount() {
    this.setState({
      values: values
    });
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.values.map(value => (
          <div>
            <Value
              key={value.id}
              title={value.title}
              description={value.description}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Values;
