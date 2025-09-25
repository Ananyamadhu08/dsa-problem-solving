// Create a program that fills in the blank cells in a Sudoku puzzle to solve it. Every sudoku solution needs to follow to these guidelines:
// 1) In every row, the numbers 1 through 9 must appear exactly once.
// 2) In every column, the numbers 1 through 9 must appear exactly once.
// 3) In each of the grid's nine 3x3 sub-boxes, the numbers 1 through 9 must appear exactly once.
// Empty cells are indicated by the '.' character.

function solveSudoku(board) {
  const boardSize = 9;
  const subgridSize = 3;

  // Convert a digit (1–9) into a one-hot bitmask (1 -> 000000001b, 9 -> 100000000b)
  function digitToBitmask(digit) {
    return 1 << (digit - 1);
  }

  // Masks for row/column/subgrid: bit k set => digit (k+1) already used there
  const rowUsedMask = new Array(boardSize).fill(0);
  const colUsedMask = new Array(boardSize).fill(0);
  const subgridUsedMask = new Array(boardSize).fill(0);

  // Positions of all empty cells to fill
  const emptyCells = [];

  // A mask with the lowest `boardSize` bits set (for 9x9 = 0b1_1111_1111)
  const allDigitsMask = (1 << boardSize) - 1;

  // Initialize masks and collect empty cells
  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    for (let colIndex = 0; colIndex < boardSize; colIndex++) {
      const cellValue = board[rowIndex][colIndex];

      if (cellValue === ".") {
        emptyCells.push([rowIndex, colIndex]);
      } else {
        const digit = Number(cellValue); // "5" -> 5

        const subgridIndex =
          Math.floor(rowIndex / subgridSize) * subgridSize +
          Math.floor(colIndex / subgridSize);

        const bit = digitToBitmask(digit);

        rowUsedMask[rowIndex] |= bit;
        colUsedMask[colIndex] |= bit;
        subgridUsedMask[subgridIndex] |= bit;
      }
    }
  }

  // Count number of set bits (Hamming weight)
  function countSetBits(bitmask) {
    let count = 0;

    while (bitmask) {
      bitmask &= bitmask - 1; // remove lowest set bit
      count++;
    }

    return count;
  }

  // Choose the next empty cell using MRV (minimum remaining values)
  function selectNextCellIndex(startIndex) {
    let bestIndex = -1;
    let smallestCandidateCount = Infinity; // larger than any real candidate count

    for (
      let cellIndex = startIndex;
      cellIndex < emptyCells.length;
      cellIndex++
    ) {
      const [rowIndex, colIndex] = emptyCells[cellIndex];

      const subgridIndex =
        Math.floor(rowIndex / subgridSize) * subgridSize +
        Math.floor(colIndex / subgridSize);

      // Union of used digits in row/col/subgrid
      const usedMask =
        rowUsedMask[rowIndex] |
        colUsedMask[colIndex] |
        subgridUsedMask[subgridIndex];

      // Candidates are the digits NOT used (limit to the 9 relevant bits)
      const candidateMask = ~usedMask & allDigitsMask;

      const candidateCount = countSetBits(candidateMask);

      if (candidateCount < smallestCandidateCount) {
        smallestCandidateCount = candidateCount;
        bestIndex = cellIndex;

        if (candidateCount === 1) break; // best possible
      }
    }

    return bestIndex; // -1 means no valid candidates (dead end)
  }

  // Recursive solver (MRV + bitmasks)
  function solve(cellIndex) {
    // Solved when we've filled all empties
    if (cellIndex === emptyCells.length) return true;

    // Select most-constrained empty cell (MRV)
    const nextCellIndex = selectNextCellIndex(cellIndex);
    if (nextCellIndex === -1) return false; // contradiction → backtrack

    // Swap chosen cell into current processing position
    if (nextCellIndex !== cellIndex) {
      const temp = emptyCells[cellIndex];

      emptyCells[cellIndex] = emptyCells[nextCellIndex];

      emptyCells[nextCellIndex] = temp;
    }

    const [rowIndex, colIndex] = emptyCells[cellIndex];

    const subgridIndex =
      Math.floor(rowIndex / subgridSize) * subgridSize +
      Math.floor(colIndex / subgridSize);

    const usedMask =
      rowUsedMask[rowIndex] |
      colUsedMask[colIndex] |
      subgridUsedMask[subgridIndex];

    // 9 candidate bits (1..9) that are currently free
    let candidateMask = ~usedMask & allDigitsMask;

    // Iterate candidates by extracting the lowest set bit each time
    while (candidateMask) {
      const lowestBit = candidateMask & -candidateMask; // isolate lowest 1-bit

      const candidateDigit = Math.log2(lowestBit) + 1; // bit -> digit (1..9)

      // Place
      board[rowIndex][colIndex] = String(candidateDigit);
      rowUsedMask[rowIndex] |= lowestBit;
      colUsedMask[colIndex] |= lowestBit;
      subgridUsedMask[subgridIndex] |= lowestBit;

      // Explore
      if (solve(cellIndex + 1)) return true;

      // Undo (backtrack)
      board[rowIndex][colIndex] = ".";
      rowUsedMask[rowIndex] ^= lowestBit;
      colUsedMask[colIndex] ^= lowestBit;
      subgridUsedMask[subgridIndex] ^= lowestBit;

      // Try next candidate
      candidateMask ^= lowestBit;
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
// MRV chooses the most constrained cell first, reducing branching,
// and bitmasks make validity checks O(1), so practice is far faster than the bound.

// Space Complexity: O(E).
// Recursion depth is at most E (≤ 81). Row/col/subgrid masks are fixed-size
// (3 arrays of length 9), so auxiliary space is dominated by the call stack.
