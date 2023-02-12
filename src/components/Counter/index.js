import React, { Component } from "react";
import CountSetting from "../CountSetting";
import styles from "./Counter.module.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCounter: 1,
      intervalId: null,
      isAutoClick: false,
    };
  }
  inputHundler = ({ target: { name, value } }) => {
    if (value >= 1 && value <= 1000000) {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: "ERROR, TRY AGAIN" });
      this.intervalId = setTimeout(() => {
        this.setState({ [name]: 1 });
      }, 1000);
    }
  };

  componentDidMount() {}
  render() {
    const { stepCounter, isAutoClick } = this.state;
    return (
      <div className={styles.container}>
        <article>
          <p className={styles.parahraph}>Current step: {stepCounter}</p>
          <p className={styles.parahraph}>Change step:</p>
          <input
            className={styles.input}
            name="stepCounter"
            value={stepCounter}
            onChange={this.inputHundler}
            placeholder="Please, set step"
          ></input>
        </article>
        <CountSetting stepCounter={stepCounter} isAutoClick={isAutoClick} />
        
      </div>
    );
  }
}

export default Counter;
