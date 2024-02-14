// Given a number create a function that finds all the divisors of that number.

function findDivisors(n) {
  let numArr = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      numArr = [...numArr, i];
    }
  }

  return numArr;
}

let result = findDivisors(36);

console.log(result);
