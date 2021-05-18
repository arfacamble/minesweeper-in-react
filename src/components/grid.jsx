import React, { Component } from 'react';

import Cell from './cell';

const gridStyle = {
  display: 'grid',
  border: 'solid 2px blue'
};

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cells, col, row } = this.props;
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${col}, 30px)`,
        gridTemplateRows: `repeat(${row}, 30px)`
      }}>
        {cells.map(cell => <Cell details={cell} key={cell.id}/>)}
      </div>
    );
  }
}

export default Grid;
