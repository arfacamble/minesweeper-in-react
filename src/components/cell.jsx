import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props;
    return (
      <div>
        <p>{`${id}`}</p>
      </div>
    );
  }
}

export default Cell;
