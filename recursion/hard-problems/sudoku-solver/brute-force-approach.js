// Create a program that fills in the blank cells in a Sudoku puzzle to solve it. Every sudoku solution needs to follow to these guidelines:
// 1) In every row, the numbers 1 through 9 must appear exactly once.
// 2) In every column, the numbers 1 through 9 must appear exactly once.
// 3) In each of the grid's nine 3x3 sub-boxes, the numbers 1 through 9 must appear exactly once.
// Empty cells are indicated by the '.' character.

// Check whether placing digitChar at (rowIndex, colIndex) is valid
function isPlacementValid(board, rowIndex, colIndex, digitChar) {
  const boardSize = 9;
  const subgridSize = 3;

  // Check the row and the column (combined condition)
  for (let scanIndex = 0; scanIndex < boardSize; scanIndex++) {
    const cellInSameRow = board[rowIndex][scanIndex];
    const cellInSameCol = board[scanIndex][colIndex];

    if (cellInSameRow === digitChar || cellInSameCol === digitChar) {
      return false;
    }
  }

  // Check the 3x3 subgrid
  const subgridRowStart = Math.floor(rowIndex / subgridSize) * subgridSize;
  const subgridColStart = Math.floor(colIndex / subgridSize) * subgridSize;

  for (
    let subgridRowOffset = 0;
    subgridRowOffset < subgridSize;
    subgridRowOffset++
  ) {
    for (
      let subgridColOffset = 0;
      subgridColOffset < subgridSize;
      subgridColOffset++
    ) {
      const rowToCheck = subgridRowStart + subgridRowOffset;
      const colToCheck = subgridColStart + subgridColOffset;

      if (board[rowToCheck][colToCheck] === digitChar) return false;
    }
  }

  return true;
}

// Solve the given Sudoku board in place using recursive backtracking.
function solveSudoku(board) {
  const boardSize = 9;
  const totalCells = boardSize * boardSize;

  function solve(linearCellIndex) {
    // Base case: all 81 cells processed
    if (linearCellIndex === totalCells) return true;

    const currentRowIndex = Math.floor(linearCellIndex / boardSize);
    const currentColIndex = linearCellIndex % boardSize;

    // If already filled, move to the next cell
    if (board[currentRowIndex][currentColIndex] !== ".") {
      return solve(linearCellIndex + 1);
    }

    // Try digits '1'..'9'
    for (let candidateDigit = 1; candidateDigit <= 9; candidateDigit++) {
      const candidateDigitChar = String(candidateDigit);

      if (
        isPlacementValid(
          board,
          currentRowIndex,
          currentColIndex,
          candidateDigitChar
        )
      ) {
        // Choose
        board[currentRowIndex][currentColIndex] = candidateDigitChar;

        // Explore
        if (solve(linearCellIndex + 1)) return true;

        // Undo (backtrack)
        board[currentRowIndex][currentColIndex] = ".";
      }
    }

    // No digit works here → backtrack
    return false;
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

// Time Complexity: O(9^E) in the worst case (E = number of empty cells, ≤ 81).
// At each empty cell we may branch into up to 9 recursive tries.
// Each validation scans its row, column, and box (27 checks = constant time for fixed 9x9).
// In practice pruning makes it much faster, but the theoretical upper bound is exponential.

// Space Complexity: O(E).
// Recursion depth is at most E (≤ 81).
// The board is mutated in place, so no extra structures are needed beyond recursion stack.
