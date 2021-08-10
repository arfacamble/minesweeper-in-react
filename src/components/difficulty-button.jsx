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
        type="button"
        className="difficulty-button"
        onClick={this.handleClick}
        style={{
          borderRadius: '0',
          marginRight: '8px'
        }}
      >
        {label}
      </button>
    );
  }
}

export default DifficultyButton;
