import React, { Component } from "react";

export default class RefComp extends Component {
  constructor() {
    super();
    this.cbRef = null;
    this.setCbRef = element => (this.cbRef = element);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    //This is how its done in the traditional way!
    if (this.cbRef) {
      this.cbRef.focus();
    }

    //This is how its done in the createRef way!
    // this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <input type="text" ref={this.setCbRef}></input>
      </div>
    );
  }
}
