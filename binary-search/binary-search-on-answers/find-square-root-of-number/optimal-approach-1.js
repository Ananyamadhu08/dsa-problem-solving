// You are given a positive integer. Find and return it's square root. If the integer is not a perfect square, then return the floor value of the square root.

function findSquareRoot(num) {
  const squareRoot = Math.floor(Math.sqrt(num));

  return squareRoot;
}

const num = 25;

const result = findSquareRoot(num);

console.log(result);

// Time complexity: O(1)
// Space complexity: O(1)
