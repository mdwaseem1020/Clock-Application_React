import React, { Component } from "react";
export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  

  render() {
    return (
      <>
        <div>
          <h1>
            {this.state.date.toLocaleTimeString()}
          </h1>
        </div>
      </>
    );
  }
}