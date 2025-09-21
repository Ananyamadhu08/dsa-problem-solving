// The challenge of arranging n queens on a n × n chessboard so that no two queens attack one another is known as the "n-queens puzzle". Return every unique solution to the n-queens puzzle given an integer n. The answer can be returned in any sequence. Every solution has a unique board arrangement for the placement of the n-queens, where 'Q' and '.' stand for a queen and an empty space, respectively.

// Convert queen positions into a board of strings like [".Q..","...Q",...]
function convertToBoardRepresentation(queenColumnPositions, boardSize) {
  const boardLayout = []; // Collect rendered rows as strings

  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    const rowCells = Array(boardSize).fill("."); // Start with all empty cells
    rowCells[queenColumnPositions[rowIndex]] = "Q"; // Place the queen at its column
    boardLayout.push(rowCells.join("")); // Join cells into a string and store it
  }

  return boardLayout; // Return the full board representation
}

function nQueens(boardSize) {
  const allBoards = []; // Store every valid board we discover
  const queenColumnPositions = Array(boardSize).fill(-1); // queenColumnPositions[row] = column index

  const usedColumns = new Set(); // Track columns that already have queens
  const usedMajorDiagonals = new Set(); // Track "\" diagonals using (row - col)
  const usedMinorDiagonals = new Set(); // Track "/" diagonals using (row + col)

  // Recursively place queens row by row
  function placeQueens(currentRowIndex) {
    if (currentRowIndex === boardSize) {
      // Base case: all rows are filled → save configuration
      allBoards.push(
        convertToBoardRepresentation(queenColumnPositions, boardSize)
      );
      return; // Return to explore other column choices
    }

    for (
      let currentColumnIndex = 0;
      currentColumnIndex < boardSize;
      currentColumnIndex++
    ) {
      const majorDiagonalKey = currentRowIndex - currentColumnIndex; // "\" diagonal identifier
      const minorDiagonalKey = currentRowIndex + currentColumnIndex; // "/" diagonal identifier

      // Skip if column or diagonals are already used
      if (
        usedColumns.has(currentColumnIndex) ||
        usedMajorDiagonals.has(majorDiagonalKey) ||
        usedMinorDiagonals.has(minorDiagonalKey)
      ) {
        continue;
      }

      // Place queen
      queenColumnPositions[currentRowIndex] = currentColumnIndex;
      usedColumns.add(currentColumnIndex);
      usedMajorDiagonals.add(majorDiagonalKey);
      usedMinorDiagonals.add(minorDiagonalKey);

      // Recurse to the next row
      placeQueens(currentRowIndex + 1);

      // Backtrack: undo placement
      queenColumnPositions[currentRowIndex] = -1;
      usedColumns.delete(currentColumnIndex);
      usedMajorDiagonals.delete(majorDiagonalKey);
      usedMinorDiagonals.delete(minorDiagonalKey);
    }
  }

  placeQueens(0); // Kick off recursion from the first row

  return allBoards; // Return all discovered valid boards
}

const boardSize = 4;

const results = nQueens(boardSize);

console.log(results);

// ⏱️ Time & Space Complexity -

// Time Complexity: O(n!) in practice
// - We place one queen per row.
// - At each step, invalid columns/diagonals are pruned immediately.
// - This reduces the branching factor dramatically compared to brute force (O(n^n)).

// Space Complexity: O(n) + output
// - O(n) for recursion depth and queenColumnPositions.
// - O(n) extra for the three "used" sets (columns, major diagonals, minor diagonals).
// - Output itself can be large (number of valid boards × n characters per row).
