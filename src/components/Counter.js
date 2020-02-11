import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // increment() {
  //     this.setState({ count: this.state.count + 1}, () => console.log(this.state.count));
  // }

  increment() {
    //for letting this to happen we should change state with regards to the
    //last or previous state ALWAYS OR WHERE NEEDED.
    this.setState((prevState, props) => ({ count: prevState.count + 1 }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div
        onClick={() => {
          this.incrementFive();
        }}
      >
        Count - {this.state.count}
        <p>
          <button>Increment</button>
        </p>
      </div>
    );
  }
}
