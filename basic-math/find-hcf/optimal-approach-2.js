// Create a function to find the hcf of two numbers.
// This solution is based on the euclidean algorithm that states that hcf(a, b) is equal to hcf(a - b, b) where a is greater than b.

function findHcf(numOne, numTwo) {
  if (numTwo === 0) {
    return numOne;
  }

  return findHcf(numTwo, numOne % numTwo);
}

let result = findHcf(9, 12);

console.log(result);
