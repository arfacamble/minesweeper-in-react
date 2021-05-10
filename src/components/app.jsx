import React, { Component } from 'react';

import Grid from './grid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      col: 8,
      row: 8,
      cells: [
        { id: '1-1', mine: false, type: 1, display: 'unopened' },
        { id: '1-2', mine: false, type: 1, display: 'unopened' },
        { id: '1-3', mine: false, type: 0, display: 'unopened' },
        { id: '1-4', mine: false, type: 1, display: 'unopened' },
        { id: '1-5', mine: false, type: 2, display: 'unopened' },
        { id: '1-6', mine: false, type: 3, display: 'unopened' },
        { id: '1-7', mine: true, type: '*', display: 'unopened' },
        { id: '1-8', mine: false, type: 1, display: 'unopened' },
        { id: '2-1', mine: true, type: '*', display: 'unopened' },
        { id: '2-2', mine: false, type: 1, display: 'unopened' },
        { id: '2-3', mine: false, type: 0, display: 'unopened' },
        { id: '2-4', mine: false, type: 1, display: 'unopened' },
        { id: '2-5', mine: true, type: '*', display: 'unopened' },
        { id: '2-6', mine: true, type: '*', display: 'unopened' },
        { id: '2-7', mine: false, type: 2, display: 'unopened' },
        { id: '2-8', mine: false, type: 1, display: 'unopened' },
        { id: '3-1', mine: false, type: 1, display: 'unopened' },
        { id: '3-2', mine: false, type: 1, display: 'unopened' },
        { id: '3-3', mine: false, type: 0, display: 'unopened' },
        { id: '3-4', mine: false, type: 1, display: 'unopened' },
        { id: '3-5', mine: false, type: 2, display: 'unopened' },
        { id: '3-6', mine: false, type: 2, display: 'unopened' },
        { id: '3-7', mine: false, type: 2, display: 'unopened' },
        { id: '3-8', mine: false, type: 1, display: 'unopened' },
        { id: '4-1', mine: false, type: 0, display: 'unopened' },
        { id: '4-2', mine: false, type: 1, display: 'unopened' },
        { id: '4-3', mine: false, type: 2, display: 'unopened' },
        { id: '4-4', mine: false, type: 2, display: 'unopened' },
        { id: '4-5', mine: false, type: 1, display: 'unopened' },
        { id: '4-6', mine: false, type: 0, display: 'unopened' },
        { id: '4-7', mine: false, type: 1, display: 'unopened' },
        { id: '4-8', mine: true, type: '*', display: 'unopened' },
        { id: '5-1', mine: false, type: 0, display: 'unopened' },
        { id: '5-2', mine: false, type: 1, display: 'unopened' },
        { id: '5-3', mine: true, type: '*', display: 'unopened' },
        { id: '5-4', mine: true, type: '*', display: 'unopened' },
        { id: '5-5', mine: false, type: 1, display: 'unopened' },
        { id: '5-6', mine: false, type: 0, display: 'unopened' },
        { id: '5-7', mine: false, type: 2, display: 'unopened' },
        { id: '5-8', mine: false, type: 2, display: 'unopened' },
        { id: '6-1', mine: false, type: 0, display: 'unopened' },
        { id: '6-2', mine: false, type: 1, display: 'unopened' },
        { id: '6-3', mine: false, type: 2, display: 'unopened' },
        { id: '6-4', mine: false, type: 2, display: 'unopened' },
        { id: '6-5', mine: false, type: 1, display: 'unopened' },
        { id: '6-6', mine: false, type: 0, display: 'unopened' },
        { id: '6-7', mine: false, type: 1, display: 'unopened' },
        { id: '6-8', mine: true, type: '*', display: 'unopened' },
        { id: '7-1', mine: false, type: 1, display: 'unopened' },
        { id: '7-2', mine: false, type: 1, display: 'unopened' },
        { id: '7-3', mine: false, type: 1, display: 'unopened' },
        { id: '7-4', mine: false, type: 0, display: 'unopened' },
        { id: '7-5', mine: false, type: 1, display: 'unopened' },
        { id: '7-6', mine: false, type: 1, display: 'unopened' },
        { id: '7-7', mine: false, type: 2, display: 'unopened' },
        { id: '7-8', mine: false, type: 1, display: 'unopened' },
        { id: '8-1', mine: false, type: 1, display: 'unopened' },
        { id: '8-2', mine: true, type: '*', display: 'unopened' },
        { id: '8-3', mine: false, type: 1, display: 'unopened' },
        { id: '8-4', mine: false, type: 0, display: 'unopened' },
        { id: '8-5', mine: false, type: 1, display: 'unopened' },
        { id: '8-6', mine: true, type: '*', display: 'unopened' },
        { id: '8-7', mine: false, type: 1, display: 'unopened' },
        { id: '8-8', mine: false, type: 0, display: 'unopened' }
      ]
    };
  }

  render() {
    const { col, row, cells } = this.state;
    return (
      <div>
        <Grid col={col} row={row} cells={cells} />
      </div>
    );
  }
}

export default App;
