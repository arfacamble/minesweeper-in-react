import React, { Component } from 'react';

class GameStateMessage extends Component {
  message = () => {
    const { gameState } = this.props;
    let message;
    switch (gameState) {
      case 'pending': message = "Click on the grid to start"; break;
      case 'running': message = "The clock's running!! CLICK CLICK CLICK BOOM"; break;
      case 'success': message = "What a WIN!!! You legend"; break;
      case 'failure': message = "LOSER! Click above buttons to have another crack"; break;
      default: message = "WORDS";
    }
    return message;
  }

  render() {
    return (
      <h3>{this.message()}</h3>
    );
  }
}

export default GameStateMessage;
