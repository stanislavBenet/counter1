import React, { Component } from "react";
import styles from "./CountSetting.module.css";
import cx from "classnames";

class CountSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountCounter: 0,
      isAddMode: true,
    };
  }
  changeHundler = () => {
    this.setState({ isAddMode: !this.state.isAddMode });
  };

  addCounter = () => {
    const { stepCounter } = this.props;
    this.setState((state, props) => {
      return { amountCounter: this.state.amountCounter + stepCounter };
    });
  };
  subCounter = () => {
    const { stepCounter } = this.props;
    this.setState((state, props) => {
      return { amountCounter: this.state.amountCounter - stepCounter };
    });
  };

  render() {
    const { amountCounter, isAddMode } = this.state;
    const classChangeModeSub = cx(styles.btn, {
      [styles.none]: !isAddMode,
    });
    const classChangeModeAdd = cx(styles.btn, {
      [styles.none]: isAddMode,
    });
    return (
      <>
        <div className={styles.container}>
          <p className={styles.getCounter}>{amountCounter}</p>
          <button onClick={this.addCounter} className={classChangeModeSub}>
            Add
          </button>
          <button onClick={this.subCounter} className={classChangeModeAdd}>
            Sub
          </button>
          <button onClick={this.changeHundler} className={styles.btn}>
            Change mode
          </button>
        </div>
      </>
    );
  }
}

export default CountSetting;
