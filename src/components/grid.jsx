import React, { Component } from 'react';

import Cell from './cell';

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cells = this.props.cells;
    return (
      <div>
        {cells.map(cell => <Cell details={cell} key={cell.id}/>)}
      </div>
    );
  }
}

export default Grid;
