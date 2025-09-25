// Create a program that fills in the blank cells in a Sudoku puzzle to solve it. Every sudoku solution needs to follow to these guidelines:
// 1) In every row, the numbers 1 through 9 must appear exactly once.
// 2) In every column, the numbers 1 through 9 must appear exactly once.
// 3) In each of the grid's nine 3x3 sub-boxes, the numbers 1 through 9 must appear exactly once.
// Empty cells are indicated by the '.' character.

function solveSudoku(board) {
  const boardSize = 9;
  const subgridSize = 3;

  // Track used digits for each row, column, and 3x3 subgrid
  const rowDigitSets = Array.from({ length: boardSize }, () => new Set());
  const colDigitSets = Array.from({ length: boardSize }, () => new Set());
  const subgridDigitSets = Array.from({ length: boardSize }, () => new Set());

  // Positions of empty cells to fill
  const emptyCells = [];

  // Initialize tracking sets and collect empties
  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    for (let colIndex = 0; colIndex < boardSize; colIndex++) {
      const cellValue = board[rowIndex][colIndex];

      if (cellValue === ".") {
        emptyCells.push([rowIndex, colIndex]);
      } else {
        rowDigitSets[rowIndex].add(cellValue);
        colDigitSets[colIndex].add(cellValue);

        const subgridIndex =
          Math.floor(rowIndex / subgridSize) * subgridSize +
          Math.floor(colIndex / subgridSize);

        subgridDigitSets[subgridIndex].add(cellValue);
      }
    }
  }

  //   Fill emptyCells one by one
  function solve(emptyCellIndex) {
    if (emptyCellIndex === emptyCells.length) {
      return true; // all cells filled
    }

    const [rowIndex, colIndex] = emptyCells[emptyCellIndex];

    const subgridIndex =
      Math.floor(rowIndex / subgridSize) * subgridSize +
      Math.floor(colIndex / subgridSize);

    // Try digits '1'..'9' that are not yet used in row/col/subgrid
    for (let candidateDigit = 1; candidateDigit <= 9; candidateDigit++) {
      const candidateDigitChar = String(candidateDigit);

      if (
        rowDigitSets[rowIndex].has(candidateDigitChar) ||
        colDigitSets[colIndex].has(candidateDigitChar) ||
        subgridDigitSets[subgridIndex].has(candidateDigitChar)
      ) {
        continue; // not allowed here
      }

      // Place
      board[rowIndex][colIndex] = candidateDigitChar;
      rowDigitSets[rowIndex].add(candidateDigitChar);
      colDigitSets[colIndex].add(candidateDigitChar);
      subgridDigitSets[subgridIndex].add(candidateDigitChar);

      // Explore
      if (solve(emptyCellIndex + 1)) {
        return true;
      }

      // Undo (backtrack)
      board[rowIndex][colIndex] = ".";
      rowDigitSets[rowIndex].delete(candidateDigitChar);
      colDigitSets[colIndex].delete(candidateDigitChar);
      subgridDigitSets[subgridIndex].delete(candidateDigitChar);
    }

    return false; // no digit fits here → backtrack
  }

  solve(0);
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(board);

console.log(board);

// ⏱️ Time & Space Complexity -

// Time Complexity: O(9^E) in the worst case (E = number of empty cells).
// We branch up to 9 ways per empty cell, but each validity check is O(1)
// thanks to row/col/subgrid Sets (no scans). Real puzzles prune heavily,
// so practical performance is much better than the exponential upper bound.

// Space Complexity: O(E).
// Recursion depth is at most E (≤ 81). The Sets hold at most 81 digits total
// across rows/cols/subgrids (bounded by the fixed 9x9 board), so auxiliary
// space is dominated by the call stack: O(E).
