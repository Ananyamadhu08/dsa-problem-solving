// Given a grid of dimensions n x n. A rat is placed at coordinates (0, 0) and wants to reach at coordinates (n-1, n-1). Find all possible paths that rat can take to travel from (0, 0) to (n-1, n-1). The directions in which rat can move are 'U' (up) , 'D' (down) , 'L' (left) , 'R' (right). The value 0 in grid denotes that the cell is blocked and rat cannot use that cell for traveling, whereas value 1 represents that rat can travel through the cell. If the cell (0, 0) has 0 value, then mouse cannot move to any other cell.
// Note :
// - In a path no cell can be visited more than once.
// - If there is no possible path then return empty vector.

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

  // Track per-path visitation to prevent stepping on the same cell twice.
  const visitedCells = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(false)
  );

  // Enumerate the four possible moves (ordered deterministically for readability).
  const possibleDirections = [
    { rowDelta: -1, colDelta: 0, direction: "U" }, // Up
    { rowDelta: 1, colDelta: 0, direction: "D" }, // Down
    { rowDelta: 0, colDelta: -1, direction: "L" }, // Left
    { rowDelta: 0, colDelta: 1, direction: "R" }, // Right
  ];

  // Check bounds, openness (1), and that the cell hasn’t been visited in the current path.
  function canStepToCell(rowIndex, colIndex) {
    const isInsideBounds =
      rowIndex >= 0 &&
      rowIndex < gridSize &&
      colIndex >= 0 &&
      colIndex < gridSize;
    if (!isInsideBounds) return false;

    const isOpenCell = grid[rowIndex][colIndex] === 1;
    const hasNotBeenVisitedYet = !visitedCells[rowIndex][colIndex];

    return isOpenCell && hasNotBeenVisitedYet;
  }

  // Depth-first search: try all directions from (currentRow, currentCol), building currentPath.
  function explore(currentRow, currentCol, currentPath) {
    // Base case: reached destination → record the completed path string.
    if (currentRow === gridSize - 1 && currentCol === gridSize - 1) {
      allPaths.push(currentPath);
      return;
    }

    // Mark current cell visited for this path.
    visitedCells[currentRow][currentCol] = true;

    // Try each direction and recurse when the step is valid.
    for (const { rowDelta, colDelta, direction } of possibleDirections) {
      const nextRowIndex = currentRow + rowDelta;
      const nextColIndex = currentCol + colDelta;

      if (canStepToCell(nextRowIndex, nextColIndex)) {
        explore(nextRowIndex, nextColIndex, currentPath + direction);
      }
    }

    // Backtrack: unmark current cell so other paths can reuse it.
    visitedCells[currentRow][currentCol] = false;
  }

  // Kick off recursion from the starting cell with an empty path string.
  explore(0, 0, "");

  // Return all discovered valid path strings (empty array means no paths).
  return allPaths;
}

const exampleGrid = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

const result = ratInMaze(exampleGrid);

console.log(result);

// ⏱️ Time & Space Complexity -

// Time Complexity: Exponential in the number of cells (worst case).
// - In an open grid, each cell can branch up to 4 directions,
//   and each cell is visited at most once per path due to the visited rule.
// - A loose upper bound is O(4^(n*n)), acceptable here because n ≤ 5.
// - Practical branching is lower due to walls (0s), bounds, and visited checks.

// Space Complexity: O(n^2) + output
// - O(n^2) recursion depth in the worst path (touching many cells).
// - O(n^2) for the visitedCells matrix.
// - Output can be large depending on how many valid paths exist.
