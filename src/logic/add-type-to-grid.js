// receive an array of tile objects with id's and mine bool
// function that determines surrounding id's - does this function determine non-valid ones?
// function that maps array of id's to array of mine state, then counts
// iterate over tiles
  // if mine -> type = mine
  // otherwise count surrounding mines -> type = count
// return updated array with tile types
const exampleGrid = require('../data/example-grid.js').exampleGrid;

const surroundingIDs = (id) => {
  const x = parseInt(id.split('-')[0]);
  const y = parseInt(id.split('-')[1]);
  return [
    `${x - 1}-${y - 1}`, `${x}-${y - 1}`, `${x + 1}-${y - 1}`,
    `${x - 1}-${y}`    ,                  `${x + 1}-${y}`,
    `${x - 1}-${y + 1}`, `${x}-${y + 1}`, `${x + 1}-${y + 1}`,
  ];
};

const isTileMine = (id, grid) => {
  if (grid.find(tile => tile.id === id)) {
    return grid.find(tile => tile.id === id).mine;
  }
  return null;
};

const determineTileType = (tile, grid) => {
  if (tile.mine) {
    tile.type = '*.png';
  } else {
    const surroundingTileIds = surroundingIDs(tile.id);
    const minesSurrounding = surroundingTileIds.map(id => isTileMine(id, grid));
    tile.type = `${minesSurrounding.filter(val => val).length}.svg`;
  }
  tile.display = 'unopened.svg';
  return tile;
};

const addTypeToGrid = (grid) => {
  return grid.map(tile => determineTileType(tile, grid));
};

// console.log(surroundingIDs('3-5'));
// console.log(isTileMine('0-8', exampleGrid))

// const testTileIdMiddle = '3-5';
// const testTileIdEdge = '1-5';
// const testTileIdCorner = '8-8';
// const surroundingTileIds = surroundingIDs(testTileIdCorner);
// const minesSurrounding = surroundingTileIds.map(id => isTileMine(id, exampleGrid));

// console.log(determineTileType(exampleGrid[5], exampleGrid));

// console.log(addTypeToGrid(exampleGrid));

module.exports = { addTypeToGrid, surroundingIDs };
