// Given a number ‘n’, find out the sum of the first 'n' natural numbers.

function sumOfNaturalNumbers(n) {
  if (n === 0) return 0;

  return n + sumOfNaturalNumbers(n - 1);
}

let result = sumOfNaturalNumbers(5);

console.log(result);
