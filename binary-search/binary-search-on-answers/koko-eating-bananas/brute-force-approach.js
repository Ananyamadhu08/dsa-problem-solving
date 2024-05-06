// A monkey is given ‘n’ piles of bananas, whereas the 'ith' pile has ‘a[i]’ bananas. An integer ‘h’ is also given, which denotes the time in hours for all the bananas to be eaten. Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas. If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour. Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.

function findMaximumElement(arr) {
  let maximumElement = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    maximumElement = Math.max(maximumElement, arr[i]);
  }

  return maximumElement;
}

function calculateTotalHours(arr, hourlyBananaRate) {
  let totalHours = 0;

  for (let i = 0; i < arr.length; i++) {
    totalHours += Math.ceil(arr[i] / hourlyBananaRate);
  }

  return totalHours;
}

function minimumRateToEatBananas(arr, hours) {
  let maximumElement = findMaximumElement(arr);

  for (let i = 1; i <= maximumElement; i++) {
    const requiredTime = calculateTotalHours(arr, i);

    if (requiredTime <= hours) {
      return i;
    }
  }

  return -1;
}

const numArr = [3, 6, 7, 11];

const hours = 8;

const result = minimumRateToEatBananas(numArr, hours);

console.log(result);

// Time complexity: O(maxElement * N)
// Space complexity: O(1)
