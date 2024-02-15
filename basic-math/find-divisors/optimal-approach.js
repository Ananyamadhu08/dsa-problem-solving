// Given a number create a function that finds all the divisors of that number.

function findDivisors(n) {
  let firstHalfNumArr = [];
  let secondHalfNumArr = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      firstHalfNumArr.push(i);

      if (i !== n / i) {
        secondHalfNumArr.push(n / i);
      }
    }
  }

  let numArr = firstHalfNumArr.concat(secondHalfNumArr.reverse());

  return numArr;
}

let result = findDivisors(36);

console.log(result);
