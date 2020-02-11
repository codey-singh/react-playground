import React, { Component } from "react";

const withCounter = (OriginalComponent, incrementNumber = 1) => {
  class WrappedComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    incrementCounter = () => {
      return this.setState(prevState => ({
        count: prevState.count + incrementNumber
      }));
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props} // ALWAYS remember to pass the rest of the props to make sure that everything is the same after wrapping the original component.
        />
      );
    }
  }
  return WrappedComponent;
};

export default withCounter;
