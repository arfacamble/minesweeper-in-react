import React, { Component } from 'react';

import Grid from './grid';
import Clock from './clock';
import DifficultyButton from './difficulty-button';
import { gridBuild } from '../logic/grid-build';
import { surroundingIDs, addTypeToGrid } from '../logic/add-type-to-grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.state = {
      col: 8,
      row: 8,
      currentCell: {},
      currentCellIndex: 0,
      gameState: 'pending',
      secondsElapsed: 0,
      currentDifficulty: 'Intermediate',
      cells: [
        { id: '1-1', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '1-2', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '1-3', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '1-4', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '1-5', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '1-6', mine: false, type: '3.svg', display: 'unopened.svg' },
        { id: '1-7', mine: true, type: '*.png', display: 'unopened.svg' },
        { id: '1-8', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '2-1', mine: true, type: '*.png', display: 'unopened.svg' },
        { id: '2-2', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '2-3', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '2-4', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '2-5', mine: true, type: '*.png', display: 'unopened.svg' },
        { id: '2-6', mine: true, type: '*.png', display: 'unopened.svg' },
        { id: '2-7', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '2-8', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '3-1', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '3-2', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '3-3', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '3-4', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '3-5', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '3-6', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '3-7', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '3-8', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '4-1', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '4-2', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '4-3', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '4-4', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '4-5', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '4-6', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '4-7', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '4-8', mine: true, type: '*.png', display: 'unopened.svg' },
        { id: '5-1', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '5-2', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '5-3', mine: true, type: '*.png', display: 'unopened.svg' },
        { id: '5-4', mine: true, type: '*.png', display: 'unopened.svg' },
        { id: '5-5', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '5-6', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '5-7', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '5-8', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '6-1', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '6-2', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '6-3', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '6-4', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '6-5', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '6-6', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '6-7', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '6-8', mine: true, type: '*.png', display: 'unopened.svg' },
        { id: '7-1', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '7-2', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '7-3', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '7-4', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '7-5', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '7-6', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '7-7', mine: false, type: '2.svg', display: 'unopened.svg' },
        { id: '7-8', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '8-1', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '8-2', mine: true, type: '*.png', display: 'unopened.svg' },
        { id: '8-3', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '8-4', mine: false, type: '0.svg', display: 'unopened.svg' },
        { id: '8-5', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '8-6', mine: true, type: '*.png', display: 'unopened.svg' },
        { id: '8-7', mine: false, type: '1.svg', display: 'unopened.svg' },
        { id: '8-8', mine: false, type: '0.svg', display: 'unopened.svg' }
      ]
    };
  }

  toggleFlag = () => {
    const { currentCell, currentCellIndex, cells } = this.state;
    if (currentCell.display === 'unopened.svg') {
      currentCell.display = 'flag.svg';
    } else if (currentCell.display === 'flag.svg') {
      currentCell.display = 'unopened.svg';
    }
    cells.currentCellIndex = currentCell;
    this.setState({ cells });
  }

  uncoverCell = () => {
    const { currentCell, currentCellIndex, cells } = this.state;
    currentCell.display = currentCell.type;
    cells.currentCellIndex = currentCell;
    this.setState({ cells });
  }

  uncoverNeighbour = (cellId) => {
    const { cells } = this.state;
    const neighbourCell = cells.find(cell => cell.id === cellId);
    if (neighbourCell === undefined || neighbourCell.display !== 'unopened.svg') { return; }
    const neighbourCellIndex = cells.indexOf(neighbourCell);
    neighbourCell.display = neighbourCell.type;
    cells.neighbourCellIndex = neighbourCell;
    this.setState({ cells });
    if (neighbourCell.type === '0.svg') {
      this.uncoverNeighbours(neighbourCell.id);
    }
  }

  uncoverNeighbours = (cellId) => {
    surroundingIDs(cellId).forEach(id => this.uncoverNeighbour(id));
  }

  failGame = () => {
    const { cells } = this.state;
    const updatedCells = cells.map((cell) => {
      if (cell.mine) {
        const exploded = cell;
        exploded.display = '*.png';
        return exploded;
      }
      return cell;
    });
    this.setState({ cells: updatedCells, gameState: 'fail' }, () => {
      this.stopClock();
      window.alert('YOU FAILED!!');
    });
  }

  testSuccess = () => {
    const { cells } = this.state;
    if (cells.every(cell => cell.mine || cell.display !== 'unopened.svg')) {
      this.setState({ gameState: 'win' }, () => {
        this.stopClock();
        window.alert('YOU WIN!!');
      });
    }
  }

  cellUncoverer = () => {
    const { currentCell } = this.state;
    this.uncoverCell();
    if (currentCell.mine) {
      this.failGame();
    } else if (currentCell.type === '0.svg') {
      this.uncoverNeighbours(currentCell.id);
    }
    this.testSuccess();
  }

  setCurrentCellDetails = (cellId, nextStep) => {
    const { cells } = this.state;
    const currentCell = cells.find(cell => cell.id === cellId);
    const currentCellIndex = cells.indexOf(currentCell);
    this.setState({ currentCell, currentCellIndex }, () => {
      if (nextStep === 'toggleFlag') {
        this.toggleFlag();
      } else if (nextStep === 'cellUncoverer') {
        this.cellUncoverer();
      }
    });
  }

  flagToggler = (cellId) => {
    this.setCurrentCellDetails(cellId, 'toggleFlag');
  }

  leftClicker = (cellId) => {
    const { gameState } = this.state;
    if (gameState === 'pending') {
      this.setState({ gameState: 'running' }, () => {
        this.startClock();
      });
    }
    this.setCurrentCellDetails(cellId, 'cellUncoverer');
  }

  resetClock = () => {
    this.setState({ secondsElapsed: 0 });
  }

  startClock = () => {
    this.timer = setInterval(() => { this.incrementClock(); }, 1000);
  }

  incrementClock = () => {
    const { secondsElapsed } = this.state;
    this.setState({ secondsElapsed: secondsElapsed + 1 });
  }

  stopClock = () => {
    clearInterval(this.timer);
  }

  setCellsState = (newCells) => {
    newCells = addTypeToGrid(newCells);
    this.setState({ cells: newCells, gameState: 'pending' });
  }

  newGame = (difficulty) => {
    this.setState({ currentDifficulty: difficulty }, () => {
      // beginner: 8x8 10mines, intermediate: 16x16 40 mines, expert: 16x30 99 mines
      let newCells = [];
      if (difficulty === 'Beginner') {
        newCells = gridBuild(8, 8, 10);
        this.setState({ col: 8, row: 8 }, () => {
          this.setCellsState(newCells);
        });
      } else if (difficulty === 'Intermediate') {
        newCells = gridBuild(16, 16, 40);
        this.setState({ col: 16, row: 16 }, () => {
          this.setCellsState(newCells);
        });
      } else if (difficulty === 'Expert') {
        newCells = gridBuild(16, 30, 99);
        this.setState({ col: 30, row: 16 }, () => {
          this.setCellsState(newCells);
        });
      }
    });
  }

  render() {
    const { col, row, cells, gameState, secondsElapsed } = this.state;
    const levels = ['Beginner', 'Intermediate', 'Expert'];
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '50%'
        }}
      >
        <Grid
          col={col}
          row={row}
          cells={cells}
          gameState={gameState}
          leftClicker={this.leftClicker}
          flagToggler={this.flagToggler}
        />
        <div className="control-panel">
          {levels.map(level => <DifficultyButton difficulty={level} key={level} newGame={this.newGame} />)}
          <Clock secondsElapsed={secondsElapsed} />
        </div>
      </div>
    );
  }
}

export default App;
