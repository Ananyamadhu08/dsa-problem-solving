// The challenge of arranging n queens on a n × n chessboard so that no two queens attack one another is known as the "n-queens puzzle". Return every unique solution to the n-queens puzzle given an integer n. The answer can be returned in any sequence. Every solution has a unique board arrangement for the placement of the n-queens, where 'Q' and '.' stand for a queen and an empty space, respectively.

function convertToBoardRepresentation(queenColumnPositions, boardSize) {
  const boardLayout = [];

  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    const rowCells = Array(boardSize).fill("."); // fill row with empty cells

    rowCells[queenColumnPositions[rowIndex]] = "Q"; // put queen at chosen column

    boardLayout.push(rowCells.join("")); // convert row to string and store
  }

  return boardLayout;
}

function nQueens(boardSize) {
  const allBoards = []; // collect all valid solutions

  const queenColumnPositions = Array(boardSize).fill(-1); // remember queen positions row by row

  function placeQueens(
    currentRowIndex,
    usedColumnsMask,
    usedMajorDiagonalMask,
    usedMinorDiagonalMask
  ) {
    if (currentRowIndex === boardSize) {
      // all rows filled → valid solution
      allBoards.push(
        convertToBoardRepresentation(queenColumnPositions, boardSize)
      );

      return;
    }

    // Build freeColumnsMask:
    // - (1 << boardSize) gives 1 followed by boardSize zeros
    // - subtracting 1 makes boardSize ones (for n=4 → 1111)
    // - | is OR → combine blocked columns and diagonals
    // - ~ flips bits → 1s become 0s, 0s become 1s
    // - & is AND → keep only bits that are free and inside board
    let freeColumnsMask =
      ((1 << boardSize) - 1) &
      ~(usedColumnsMask | usedMajorDiagonalMask | usedMinorDiagonalMask);

    // loop while there are free columns
    while (freeColumnsMask) {
      // freeColumnsMask & -freeColumnsMask:
      // - isolates the rightmost 1
      // - gives the lowest-index free column to try
      const currentColumnBit = freeColumnsMask & -freeColumnsMask;

      freeColumnsMask -= currentColumnBit; // remove this column from free set

      // Math.log2 turns the bit (1,2,4,8) into its column index (0,1,2,3), | 0 forces integer
      const currentColumnIndex = Math.log2(currentColumnBit) | 0;

      queenColumnPositions[currentRowIndex] = currentColumnIndex; // place queen here

      placeQueens(
        currentRowIndex + 1, // move to next row
        usedColumnsMask | currentColumnBit, // mark column as used
        (usedMajorDiagonalMask | currentColumnBit) << 1, // "\" diagonals shift left
        (usedMinorDiagonalMask | currentColumnBit) >> 1 // "/" diagonals shift right
      );

      queenColumnPositions[currentRowIndex] = -1; // backtrack: undo placement
    }
  }

  placeQueens(0, 0, 0, 0); // start recursion from row 0

  return allBoards;
}

const boardSize = 4;

const results = nQueens(boardSize);

console.log(results);

// ⏱️ Time & Space Complexity -

// Time Complexity: about O(n!)
// - each row tries available columns with O(1) checks via bitmasks
// - invalid branches are pruned early

// Space Complexity: O(n) + output
// - O(n) for recursion stack and queen positions
// - bitmasks use O(1) space
// - output grows with number of valid boards × board size
