// Given a grid of dimensions n x n. A rat is placed at coordinates (0, 0) and wants to reach at coordinates (n-1, n-1). Find all possible paths that rat can take to travel from (0, 0) to (n-1, n-1). The directions in which rat can move are 'U' (up) , 'D' (down) , 'L' (left) , 'R' (right). The value 0 in grid denotes that the cell is blocked and rat cannot use that cell for traveling, whereas value 1 represents that rat can travel through the cell. If the cell (0, 0) has 0 value, then mouse cannot move to any other cell.
// Note :
// - In a path no cell can be visited more than once.
// - If there is no possible path then return empty vector.

// Most-optimal recursive backtracking with memoized dead-end states and a bitmask for visited cells.
function ratInMaze(grid) {
  // Determine grid dimension (n x n).
  const gridSize = grid.length;

  // Accumulator for all valid path strings discovered by backtracking.
  const allPaths = [];

  // Extract the start and end cell values for readability.
  const startCellValue = grid[0][0];
  const endCellValue = grid[gridSize - 1][gridSize - 1];

  // Early exit if start or destination is blocked.
  if (startCellValue === 0 || endCellValue === 0) {
    return allPaths; // Return [] to indicate "no paths"
  }

  // Memoization set of states proven to be dead ends (keyed as "row,col,visitedMask").
  const deadEndStates = new Set();

  // Enumerate the four possible moves (ordered deterministically for readability).
  const possibleDirections = [
    { rowDelta: 1, colDelta: 0, direction: "D" }, // Down
    { rowDelta: 0, colDelta: 1, direction: "R" }, // Right
    { rowDelta: -1, colDelta: 0, direction: "U" }, // Up
    { rowDelta: 0, colDelta: -1, direction: "L" }, // Left
  ];

  // Convert 2D cell coordinates into a unique 1D index for bitmasking (row-major order).
  function getCellIndex(rowIndex, colIndex) {
    return rowIndex * gridSize + colIndex;
  }

  // Check bounds and openness (1) of the target cell.
  function canStepToCell(rowIndex, colIndex) {
    const isInsideBounds =
      rowIndex >= 0 &&
      rowIndex < gridSize &&
      colIndex >= 0 &&
      colIndex < gridSize;

    if (!isInsideBounds) return false;

    const isOpenCell = grid[rowIndex][colIndex] === 1;

    return isOpenCell;
  }

  // Depth-first search with visited-bitmask and dead-end memoization.
  function explore(currentRow, currentCol, visitedMask, currentPath) {
    // Base case: reached destination → record the completed path string.
    if (currentRow === gridSize - 1 && currentCol === gridSize - 1) {
      allPaths.push(currentPath);
      return true; // Signal that at least one path is reachable from this state.
    }

    // If we have already proven this (row,col,visitedMask) leads nowhere, prune immediately.
    const stateKey = `${currentRow},${currentCol},${visitedMask}`;

    if (deadEndStates.has(stateKey)) {
      return false;
    }

    // Try each direction; mark success if any child branch can reach the destination.
    let foundAnyReachablePath = false;

    for (const { rowDelta, colDelta, direction } of possibleDirections) {
      const nextRow = currentRow + rowDelta;
      const nextCol = currentCol + colDelta;

      // Skip out-of-bounds or blocked cells.
      if (!canStepToCell(nextRow, nextCol)) continue;

      // Compute the single-bit flag for (nextRow, nextCol).
      const nextCellBit = 1 << getCellIndex(nextRow, nextCol);

      // Skip if (nextRow, nextCol) is already visited in the current path.
      if (visitedMask & nextCellBit) continue;

      // Recurse with updated visited bitmask and path string.
      const reachedPath = explore(
        nextRow,
        nextCol,
        visitedMask | nextCellBit, // Mark next cell as visited
        currentPath + direction
      );

      if (reachedPath) {
        foundAnyReachablePath = true;
      }
    }

    // If no direction from this state could reach the goal, memoize it as a dead end.
    if (!foundAnyReachablePath) {
      deadEndStates.add(stateKey);
    }

    // Indicate whether any path from this state reaches the destination.
    return foundAnyReachablePath;
  }

  // Initialize the visited bitmask with only the start cell (0,0) set.
  const startMask = 1 << getCellIndex(0, 0);

  // Kick off recursion from the starting cell with an empty path string.
  explore(0, 0, startMask, "");

  // Return all discovered valid path strings (empty array means no paths).
  return allPaths;
}

const grid = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

const result = ratInMaze(grid);

console.log(result);

// ⏱️ Time & Space Complexity -

// Time Complexity: Exponential in the worst case, but pruned by memoization.
// - Without pruning, exploring unique non-revisiting paths can blow up toward O(4^(n*n)) in very open grids.
// - With dead-end memoization keyed by (row, col, visitedMask), many repeated “doomed” states are skipped.
// - For n ≤ 5 (max 25 cells → 25 bits), memoization yields strong practical savings.

// Space Complexity: O(n^2) recursion stack + memo + output
// - Recursion depth: O(n^2) in the worst case (a path can touch many cells).
// - Memo (deadEndStates): up to the number of visited states encountered; theoretical upper bound is large,
//   but in practice much smaller for n ≤ 5 and typical grids.
// - Bitmask fits safely in JS bitwise ops for n ≤ 5 (25 bits), since JS bitwise is 32-bit.
// - Output size depends on the number of valid paths.
