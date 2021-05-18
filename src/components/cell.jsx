import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { details } = this.props;
    return (
      <div>
        <p>{`${details.id}`}</p>
      </div>
    );
  }
}

export default Cell;
