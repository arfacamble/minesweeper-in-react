import React, { Component } from 'react';

class Cell extends Component {
  handleClick = (event) => {
    const { leftClicker, gameState } = this.props;
    if (gameState === 'running' || gameState === 'pending') {
      leftClicker(event.target.id);
    }
  }

  handleRightClick = (e) => {
    e.preventDefault();
    const { flagToggler, gameState } = this.props;
    if (gameState === 'running' || gameState === 'pending') {
      flagToggler(e.target.id);
    }
    // console.log(e.target.attributes.style.value.split('"')[1]);
  }

  render() {
    const { details } = this.props;
    return (
      <div
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/arfacamble/minesweeper-in-react/619af2697ddc28c8e2b7bb6fb35932ba668ae16c/assets/images/${details.display}')`,
          backgroundSize: 'cover'
        }}
        id={details.id}
        onClick={this.handleClick}
        onContextMenu={this.handleRightClick}
      />
    );
  }
}

export default Cell;
