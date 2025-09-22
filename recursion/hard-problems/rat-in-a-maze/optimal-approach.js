// Given a grid of dimensions n x n. A rat is placed at coordinates (0, 0) and wants to reach at coordinates (n-1, n-1). Find all possible paths that rat can take to travel from (0, 0) to (n-1, n-1). The directions in which rat can move are 'U' (up) , 'D' (down) , 'L' (left) , 'R' (right). The value 0 in grid denotes that the cell is blocked and rat cannot use that cell for traveling, whereas value 1 represents that rat can travel through the cell. If the cell (0, 0) has 0 value, then mouse cannot move to any other cell.
// Note :
// - In a path no cell can be visited more than once.
// - If there is no possible path then return empty vector.

function ratInMaze(grid) {
  // Grid dimension (n x n)
  const gridSize = grid.length;

  // Store all discovered valid paths
  const allPaths = [];

  // Extract the start and end cell values for readability
  const startCellValue = grid[0][0];
  const endCellValue = grid[gridSize - 1][gridSize - 1];

  // Early exit if start or destination is blocked
  if (startCellValue === 0 || endCellValue === 0) {
    return allPaths;
  }

  // Define the four possible moves (Down, Right, Up, Left)
  const possibleDirections = [
    { rowDelta: 1, colDelta: 0, direction: "D" },
    { rowDelta: 0, colDelta: 1, direction: "R" },
    { rowDelta: -1, colDelta: 0, direction: "U" },
    { rowDelta: 0, colDelta: -1, direction: "L" },
  ];

  // Check if a cell is inside bounds and open
  function canStepToCell(rowIndex, colIndex) {
    const isInsideBounds =
      rowIndex >= 0 &&
      rowIndex < gridSize &&
      colIndex >= 0 &&
      colIndex < gridSize;

    const isOpenCell = grid[rowIndex][colIndex] === 1;

    return isInsideBounds && isOpenCell;
  }

  // Recursive DFS with in-place marking
  function explore(currentRow, currentCol, currentPath) {
    // Base case: reached destination → record path
    if (currentRow === gridSize - 1 && currentCol === gridSize - 1) {
      allPaths.push(currentPath);
      return;
    }

    // Mark current cell as visited (in-place)
    grid[currentRow][currentCol] = 0;

    // Try all possible directions
    for (const { rowDelta, colDelta, direction } of possibleDirections) {
      const nextRow = currentRow + rowDelta;
      const nextCol = currentCol + colDelta;

      if (canStepToCell(nextRow, nextCol)) {
        explore(nextRow, nextCol, currentPath + direction);
      }
    }

    // Restore cell for other paths (backtracking)
    grid[currentRow][currentCol] = 1;
  }

  // Start exploration from the top-left cell
  explore(0, 0, "");

  // Return all valid paths
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

// Time Complexity: Exponential in the number of cells (worst case).
// - In an open grid, each cell can branch up to 4 directions,
//   and each cell is visited at most once per path due to in-place marking.
// - A loose upper bound is O(4^(n*n)), acceptable here because n ≤ 5.
// - Practical branching is lower due to walls (0s), bounds, and visited checks.

// Space Complexity: O(n^2) + output
// - O(n^2) recursion depth in the worst path (touching many cells).
// - O(1) extra (no visited matrix, uses in-place marking).
// - Output can be large depending on how many valid paths exist.
