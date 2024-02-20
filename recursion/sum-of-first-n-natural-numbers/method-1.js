// Given a number ‘n’, find out the sum of the first 'n' natural numbers.

function sumOfNaturalNumbers(n, sum) {
  if (n < 1) return sum;

  return sumOfNaturalNumbers(n - 1, sum + n);
}

let result = sumOfNaturalNumbers(5, 0);

console.log(result);
