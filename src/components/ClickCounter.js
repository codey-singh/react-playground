import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <button onClick={incrementCounter}>
        This button has been cliked {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 2);
