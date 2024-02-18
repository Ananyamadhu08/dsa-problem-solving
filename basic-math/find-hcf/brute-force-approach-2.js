// Create a function to find the hcf of two numbers.

function findHcf(numOne, numTwo) {
  for (let i = Math.min(numOne, numTwo); i >= 1; i--) {
    if (numOne % i === 0 && numTwo % i === 0) {
      return i;
    }
  }
}

let result = findHcf(9, 12);

console.log(result);
