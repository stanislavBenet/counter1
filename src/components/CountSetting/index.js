import React, { Component } from "react";
import styles from "./CountSetting.module.css";
import CounterAutoClick from "../CounterAutoClick";
import cx from "classnames";

class CountSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountCounter: 0,
      isAddMode: true,
      date: new Date(0, 0, 0, 0, 0, 30, 0),
      autoclickFrequency: 1,
    };
    this.idInterval2 = null;
  }

  tick = () => {
    const { isAddMode } = this.state;
    if (this.state.date.getSeconds() !== 0) {
      isAddMode ? this.addCounter() : this.subCounter();
      this.setState((state, props) => {
        const { date } = this.state;
        const newDate = new Date(date);
        newDate.setSeconds(newDate.getSeconds() - 1);
        return { date: newDate };
      });
    }
  };

  reset = () => {
    this.setState({ date: new Date(0, 0, 0, 0, 0, 30, 0), amountCounter: 0 });
    clearInterval(this.idInterval2);
    this.idInterval2 = null;
  };
  start = () => {
    if (this.idInterval2 === null) {
      this.idInterval2 = setInterval(this.tick, 1000);
    }
  };
  componentDidMount() {
    this.start();
  }

  changeHundler = () => {
    this.setState({ isAddMode: !this.state.isAddMode });
  };

  addCounter = () => {
    //const { autoclickFrequency } = this.state;
    const { stepCounter } = this.props;
    this.setState((state, props) => {
      return {
        amountCounter: this.state.amountCounter + stepCounter * this.state.autoclickFrequency,
      };
    });
  };
  subCounter = () => {
    const { stepCounter } = this.props;
    this.setState((state, props) => {
      return {
        amountCounter: this.state.amountCounter - stepCounter * this.state.autoclickFrequency,
      };
    });
  };

  render() {
    const { amountCounter, isAddMode, date } = this.state;
    const classChangeModeSub = cx(styles.button, {
      [styles.none]: !isAddMode,
    });
    const classChangeModeAdd = cx(styles.button, {
      [styles.none]: isAddMode,
    });
    return (
      <>
        <section className={styles.container}>
          <p className={styles.getCounter}>{amountCounter}</p>
          <h2>{date.toLocaleTimeString("en-GB")}</h2>
          <button className={classChangeModeAdd} onClick={this.addCounter}>
            <span className={styles.buttonContent}>Add</span>
          </button>
          <button className={classChangeModeSub} onClick={this.subCounter}>
            <span className={styles.buttonContent}>Sub</span>
          </button>
          <button className={styles.button} onClick={this.changeHundler}>
            <span className={styles.buttonContent}>Change mode </span>
          </button>
        </section>
        <CounterAutoClick />
      </>
    );
  }
}

export default CountSetting;
