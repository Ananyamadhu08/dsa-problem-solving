// Create a function to determine if a given number is a prime number or not. The function will return true if it's a prime number or false otherwise.

function isPrimeNumber(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

let result = isPrimeNumber(11);

console.log(result);
