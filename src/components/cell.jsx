import React, { Component } from 'react';

class Cell extends Component {
  handleClick = (event) => {
    const { uncoverCell } = this.props;
    uncoverCell(event.target.id);
  }

  handleRightClick = (e) => {
    const { toggleFlag } = this.props;
    toggleFlag(e.target.id);
    // console.log(e.target.attributes.style.value.split('"')[1]);
  }

  render() {
    const { details } = this.props;
    return (
      <div
        style={{
          backgroundImage: `url(../../assets/${details.display})`,
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
