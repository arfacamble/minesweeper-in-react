import React, { Component } from 'react';

import Grid from './grid';
import Clock from './clock';
import DifficultyButton from './difficulty-button';
import GameStateMessage from './game-state-message';
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
      currentDifficulty: 'Beginner',
      cells: []
    };
  }

  componentDidMount() {
    this.newGame('Intermediate');
  }

  toggleFlag = () => {
    const { currentCell, currentCellIndex, cells } = this.state;
    if (currentCell.display === 'unopened.svg') {
      currentCell.display = 'flag.svg';
    } else if (currentCell.display === 'flag.svg') {
      currentCell.display = 'unopened.svg';
    }
    cells[currentCellIndex] = currentCell;
    this.setState({ cells });
  }

  uncoverCell = () => {
    const { currentCell, currentCellIndex, cells } = this.state;
    currentCell.display = currentCell.type;
    cells[currentCellIndex] = currentCell;
    this.setState({ cells });
  }

  uncoverNeighbour = (cellId) => {
    const { cells } = this.state;
    const neighbourCell = cells.find(cell => cell.id === cellId);
    if (neighbourCell === undefined || neighbourCell.display !== 'unopened.svg') { return; }
    const neighbourCellIndex = cells.indexOf(neighbourCell);
    neighbourCell.display = neighbourCell.type;
    cells[neighbourCellIndex] = neighbourCell;
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
    this.setState({ cells: updatedCells, gameState: 'failure' }, () => {
      this.stopClock();
    });
  }

  testSuccess = () => {
    const { cells } = this.state;
    if (cells.every(cell => cell.mine || cell.display !== 'unopened.svg')) {
      this.setState({ gameState: 'success' }, () => {
        this.stopClock();
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
    const cellsWithType = addTypeToGrid(newCells);
    this.setState({ cells: cellsWithType, gameState: 'pending' });
  }

  newGame = (difficulty) => {
    this.stopClock();
    this.resetClock();
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
    const {
      col, row, cells, gameState, secondsElapsed, currentDifficulty
    } = this.state;
    const levels = ['Beginner', 'Intermediate', 'Expert'];
    return (
      <div
        style={{
          maxWidth: '50%'
        }}
      >
        <div
          className="control-panel"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <DifficultyButton difficulty={currentDifficulty} label="Restart" key="Restart" newGame={this.newGame} />
          {levels.map(level => (
            <DifficultyButton
              difficulty={level}
              label={level}
              key={level}
              newGame={this.newGame}
            />
          ))}
          <Clock secondsElapsed={secondsElapsed} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '16px'
          }}
        >
          <div
            style={{
              borderTop: "2px solid #fff",
              borderLeft: "2px solid #fff",
              borderBottom: "2px solid #7B7B7B",
              borderRight: "2px solid #7B7B7B"
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
          </div>
          <GameStateMessage gameState={gameState} />
        </div>
      </div>
    );
  }
}

export default App;
