// You are given a positive integer. Find and return it's square root. If the integer is not a perfect square, then return the floor value of the square root.

function findSquareRoot(num) {
  let squareRoot = 1;

  for (let i = 1; i <= num; i++) {
    if (i * i <= num) {
      squareRoot = i;
    } else {
      break;
    }
  }

  return squareRoot;
}

const num = 25;

const result = findSquareRoot(num);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
