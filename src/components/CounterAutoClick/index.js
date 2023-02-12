import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./CounterAutoClick.module.css";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  addFrequency = () => {
    const { autoclickFrequency } = this.state;
    if (autoclickFrequency < 5) {
      this.setState((state, props) => {
        return { autoclickFrequency: state.autoclickFrequency + 1 };
      });
    }
  };
  subFrequency = () => {
    const { autoclickFrequency } = this.state;
    if (autoclickFrequency > 1) {
      this.setState((state, props) => {
        return { autoclickFrequency: state.autoclickFrequency - 1 };
      });
    }
  };
  render() {
    const { autoclickFrequency } = this.state;
    const { start, reset } = this.props;
    return (
      <>
        <section className={styles.center__autoclick}>
          <div className={styles.btn__positionAutoclick}>
            <button onClick={this.addFrequency} className={styles.btn__autoclick__subAdd}>
              +
            </button>
            <p className={styles.parahraph}>Take AutoClick frequency </p>
            <button onClick={this.subFrequency} className={styles.btn__autoclick__subAdd}>
              -
            </button>
          </div>
          <p className={styles.getCounter}>{autoclickFrequency}</p>

          <button onClick={start} className={styles.button__autoclick}>
            start autoclick
          </button>
          <button onClick={reset} className={styles.button__autoclick}>
            stop and reset autoclick
          </button>
        </section>
      </>
    );
  }
}

Index.propTypes = {};

export default Index;
