// Given a grid of n x m dimension grid of characters board and a string word. The word can be created by assembling the letters of successively surrounding cells, whether they are next to each other vertically or horizontally. It is forbidden to use the same letter cell more than once. Return true if the word exists in the grid otherwise false.

function wordSearch(board, word) {
  // Get total number of rows in the board
  const rows = board.length;
  // Get total number of columns in the board
  const cols = board[0].length;

  // Recursive helper: check if word[index..] can be matched starting from (row, col)
  function search(row, col, index, visited) {
    // ✅ Base case: if index reached word.length, all characters matched
    if (index === word.length) {
      return true;
    }

    // ❌ If out of bounds, already visited, or character mismatch, stop here
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      visited.has(`${row},${col}`) ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    // Clone the visited set for this path
    const nextVisited = new Set(visited);

    // Mark current cell as visited
    nextVisited.add(`${row},${col}`);

    // Explore all 4 possible directions (down, up, right, left) recursively
    return (
      search(row + 1, col, index + 1, nextVisited) || // go down
      search(row - 1, col, index + 1, nextVisited) || // go up
      search(row, col + 1, index + 1, nextVisited) || // go right
      search(row, col - 1, index + 1, nextVisited) // go left
    );
  }

  // Try every cell in the board as a potential starting point
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Start searching from this cell if it matches word[0]
      if (search(row, col, 0, new Set())) {
        return true; // If any path works, word exists in board
      }
    }
  }

  // If no path matched after trying all cells, return false
  return false;
}

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const word = "ABCCED";

const result = wordSearch(board, word);

console.log(result);

// ⏱️ Time & Space Complexity

// Variables:
// n = number of rows in the board
// m = number of columns in the board
// L = length of the target word

// Time Complexity: O(n * m * 4^L)
// - n*m possible starting cells.
// - Each recursive step can branch in up to 4 directions.
// - L = length of the word.
// - Worst case: exponential growth with branching factor 4 and depth L.

// Space Complexity: O(L)
// - Recursion depth up to L.
// - Each path stores up to L visited cells.
// - Set cloning adds extra overhead but remains O(L).
