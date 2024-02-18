// Create a function to find the hcf of two numbers.
// This solution is based on the euclidean algorithm that states that hcf(a, b) is equal to hcf(a - b, b) where a is greater than b.

function findHcf(numOne, numTwo) {
  while (numTwo !== 0) {
    let temp = numOne;
    numOne = numTwo;
    numTwo = temp % numTwo;
  }

  return numOne;
}

let result = findHcf(9, 12);

console.log(result);
