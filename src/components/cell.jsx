import React, { Component } from 'react';

class Cell extends Component {
  handleClick = (event) => {
    console.log(event.type);
    const { uncoverCell } = this.props;
    uncoverCell(event.target.id);
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
      />
    );
  }
}

export default Cell;
