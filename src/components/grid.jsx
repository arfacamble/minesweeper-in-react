import React, { Component } from 'react';

import Cell from './cell';

class Grid extends Component {
  render() {
    const { cells, col, row, leftClicker, flagToggler, gameState } = this.props;
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${col}, 25px)`,
        gridTemplateRows: `repeat(${row}, 25px)`,
        borderTop: "2px solid #7B7B7B",
        borderLeft: "2px solid #7B7B7B",
        borderBottom: "2px solid #fff",
        borderRight: "2px solid #fff"
      }}
      >
        {cells.map(cell => <Cell
                            details={cell}
                            key={cell.id}
                            leftClicker={leftClicker}
                            flagToggler={flagToggler}
                            gameState={gameState}
                           />)
        }
      </div>
    );
  }
}

export default Grid;
