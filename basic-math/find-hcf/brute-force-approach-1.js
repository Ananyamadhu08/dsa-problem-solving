// Create a function to find the hcf of two numbers.

function findHcf(numOne, numTwo) {
  let hcf = 1;

  for (let i = 2; i <= Math.min(numOne, numTwo); i++) {
    if (numOne % i === 0 && numTwo % i === 0) {
      hcf = i;
    }
  }

  return hcf;
}

let result = findHcf(9, 12);

console.log(result);
