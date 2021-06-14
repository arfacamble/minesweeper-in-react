import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
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
      />
    );
  }
}

export default Cell;
