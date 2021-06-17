import React, { Component } from 'react';

class DifficultyButton extends Component {
  handleClick = () => {
    const { difficulty, newGame } = this.props;
    newGame(difficulty);
  }

  render() {
    const { label } = this.props;
    return (
      <button
        className="difficulty-button"
        onClick={this.handleClick}
      >
        {label}
      </button>
    );
  }
}

export default DifficultyButton;
