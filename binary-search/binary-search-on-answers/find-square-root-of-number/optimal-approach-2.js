// You are given a positive integer. Find and return it's square root. If the integer is not a perfect square, then return the floor value of the square root.

function findSquareRoot(num) {
  let low = 1;
  let high = num;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    const square = mid * mid;

    if (square <= num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
}

const num = 28;

const result = findSquareRoot(num);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
