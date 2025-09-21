// The challenge of arranging n queens on a n × n chessboard so that no two queens attack one another is known as the "n-queens puzzle". Return every unique solution to the n-queens puzzle given an integer n. The answer can be returned in any sequence. Every solution has a unique board arrangement for the placement of the n-queens, where 'Q' and '.' stand for a queen and an empty space, respectively.

// Validate a completed placement by checking all queen pairs
function isConfigurationValid(queenPositionsByRow, boardSize) {
  // queenPositionsByRow[row] = column index where the queen is placed in that row
  for (let rowOne = 0; rowOne < boardSize; rowOne++) {
    // Compare each row...
    for (let rowTwo = rowOne + 1; rowTwo < boardSize; rowTwo++) {
      // ...with all rows below it (unique pairs)
      const colOne = queenPositionsByRow[rowOne]; // Column chosen for queen in rowOne
      const colTwo = queenPositionsByRow[rowTwo]; // Column chosen for queen in rowTwo

      if (colOne === colTwo) {
        return false; // Same column → immediate conflict
      }

      if (Math.abs(rowOne - rowTwo) === Math.abs(colOne - colTwo)) {
        // Equal row/col deltas → same diagonal
        return false; // Diagonal conflict → invalid configuration
      }
    }
  }

  return true; // No pair conflicts → configuration is valid
}

// Convert a placement into an array of strings like [".Q..","...Q",...]
function convertToBoardRepresentation(queenPositionsByRow, boardSize) {
  const boardLayout = []; // Collect rendered rows as strings

  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    // For each row on the board
    const rowCells = Array(boardSize).fill("."); // Start with all empty cells

    rowCells[queenPositionsByRow[rowIndex]] = "Q"; // Place the queen at its column

    boardLayout.push(rowCells.join("")); // Join cells into a string and store it
  }

  return boardLayout; // Return the full board representation
}

function nQueens(boardSize) {
  const allValidBoards = []; // Store every valid board we discover
  const queenColumnPositions = Array(boardSize).fill(-1); // Working plan: queenColumnPositions[row] = col

  // Recursively try all columns for the current row
  function placeQueens(currentRowIndex) {
    if (currentRowIndex === boardSize) {
      // Base case: placed queens for all rows
      if (isConfigurationValid(queenColumnPositions, boardSize)) {
        // Validate the completed placement
        allValidBoards.push(
          // If valid, render and save the board
          convertToBoardRepresentation(queenColumnPositions, boardSize)
        );
      }

      return; // Return to explore other column choices
    }

    for (
      let currentColumnIndex = 0;
      currentColumnIndex < boardSize;
      currentColumnIndex++
    ) {
      queenColumnPositions[currentRowIndex] = currentColumnIndex; // Tentatively place queen at (row, col)

      placeQueens(currentRowIndex + 1); // Recurse to fill the next row

      queenColumnPositions[currentRowIndex] = -1; // Backtrack: undo the placement and try next col
    }
  }

  placeQueens(0); // Kick off recursion from the first row

  return allValidBoards; // Return all discovered valid boards
}

const boardSize = 4;

const results = nQueens(boardSize);

console.log(results);

// ⏱️ Time & Space Complexity -

// Time Complexity: O(boardSize^boardSize · boardSize^2)
// - We try all column assignments for each row → boardSize^boardSize full assignments.
// - For each completed assignment, we validate by checking all pairs → O(boardSize^2).

// Space Complexity: O(boardSize) + output
// - O(boardSize) for recursion depth and the queenColumnPositions array.
// - Output itself can be large (number of valid boards times n characters per row).
