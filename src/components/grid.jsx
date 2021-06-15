import React, { Component } from 'react';

import Cell from './cell';

class Grid extends Component {
  render() {
    const { cells, col, row, uncoverCell, toggleFlag } = this.props;
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${col}, 30px)`,
        gridTemplateRows: `repeat(${row}, 30px)`
      }}
      >
        {cells.map(cell => <Cell details={cell}
                                 key={cell.id}
                                 uncoverCell={uncoverCell}
                                 toggleFlag={toggleFlag}
                           />
                  )
        }
      </div>
    );
  }
}

export default Grid;
