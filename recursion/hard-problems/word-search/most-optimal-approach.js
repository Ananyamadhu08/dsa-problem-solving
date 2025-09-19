// Given a grid of n x m dimension grid of characters board and a string word. The word can be created by assembling the letters of successively surrounding cells, whether they are next to each other vertically or horizontally. It is forbidden to use the same letter cell more than once. Return true if the word exists in the grid otherwise false.

function wordSearch(board, word) {
  // Dimensions: number of rows and columns
  const rows = board.length;
  const cols = board[0].length;

  // Count how many times each character appears on the board
  const boardFrequency = new Map();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const char = board[row][col];

      boardFrequency.set(char, (boardFrequency.get(char) || 0) + 1);
    }
  }

  // Count how many times each character is required by the word
  const wordFrequency = new Map();

  for (const char of word) {
    wordFrequency.set(char, (wordFrequency.get(char) || 0) + 1);
  }

  // If the board has fewer occurrences of any needed character, return false.
  for (const [char, requiredCount] of wordFrequency) {
    if ((boardFrequency.get(char) || 0) < requiredCount) return false;
  }

  // Optimization: start search from the rarer end of the word. If the last character appears fewer times on the board than the first, reverse the word so DFS begins from that side, reducing branching.
  const firstChar = word[0];
  const lastChar = word[word.length - 1];

  const firstCharFrequency = boardFrequency.get(firstChar) || 0;
  const lastCharFrequency = boardFrequency.get(lastChar) || 0;

  if (lastCharFrequency < firstCharFrequency) {
    word = word.split("").reverse().join("");
  }

  // Attempts to match word[index] starting from position (row, col)
  function search(row, col, index) {
    // Base case: all characters matched
    if (index === word.length) return true;

    // Stop if out of bounds, character mismatch, or cell already visited ('#').
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    // Save original character
    const originalCell = board[row][col];

    // Temporarily mark current cell as visited by replacing it with a sentinel (e.g., '#')
    board[row][col] = "#";

    // Explore all 4 possible directions (down, up, right, left) recursively
    const exists =
      search(row + 1, col, index + 1) || // down
      search(row - 1, col, index + 1) || // up
      search(row, col + 1, index + 1) || // right
      search(row, col - 1, index + 1); // left

    // Restore original cell value (backtrack) so other paths can use it
    board[row][col] = originalCell;

    // Return whether any direction completed the word
    return exists;
  }

  // Try every cell as a starting point, skip if first letter doesn't match.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] !== word[0]) continue;

      if (search(row, col, 0)) return true;
    }
  }

  // No path could form the word
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
// - n = number of rows (rows)
// - m = number of columns (cols)
// - L = length of the target word (word.length)

// Time Complexity: O(n * m * 4^L)
// - n*m possible starting cells.
// - Up to 4 recursive branches per step.
// - L recursive depth in the worst case.
// - Heuristics prune many branches in practice but do not change Big-O.

// Space Complexity: O(L)
// - Recursion depth up to L.
// - In-place marking avoids extra visited structures.
// - Only the call stack grows with depth L.
