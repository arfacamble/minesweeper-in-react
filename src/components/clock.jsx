import React, { Component } from 'react';

class Clock extends Component {
  render() {
    const { secondsElapsed } = this.props;
    return (
      <div className="clockContainer">
        <h3
          style={{margin: 0}}
        >
          Time: <span style={{ fontFamily: "digital-7_monomono" }}>{secondsElapsed}</span>
        </h3>
      </div>
    );
  }
}

export default Clock;
