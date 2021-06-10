const gridBuild = (x, y, mines) => {
  // build an array of tile objects with id's

  const blankTiles = [];
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      blankTiles.push(
        { id: `${i}-${j}` }
      )
    }
  }

  let minesLeft = mines;
  let tilesLeft = x * y;

  // determine whether each tile is a mine or not

  const tilesWithMines = blankTiles.map((tile) => {
    if ((minesLeft / tilesLeft) > Math.random()) {
      minesLeft--;
      tilesLeft--;
      tile.mine = true;
      return tile;
    } else {
      tilesLeft--;
      tile.mine = false;
      return tile;
    }
  })

  return tilesWithMines;
};

module.exports = { gridBuild };
