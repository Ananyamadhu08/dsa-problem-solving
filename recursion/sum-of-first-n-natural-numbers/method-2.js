// Given a number ‘n’, find out the sum of the first 'n' natural numbers.

function sumOfNaturalNumbers(n, currNum = 1) {
  if (currNum > n) return 0;

  return currNum + sumOfNaturalNumbers(n, currNum + 1);
}

let result = sumOfNaturalNumbers(5);

console.log(result);
