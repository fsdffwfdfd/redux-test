import React, { Component } from "react";

class StepInput extends Component {
  state = {
    rate: 1,
  };
  onStepChange = (e) => {};
  render() {
    let { rate } = this.state;
    return (
      <div style={{marginTop: 10 }}>
        <input onChange={this.onStepChange} value={rate} />
      </div>
    );
  }
}

export default StepInput;