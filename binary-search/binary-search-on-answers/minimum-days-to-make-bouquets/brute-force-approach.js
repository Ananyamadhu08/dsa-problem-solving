// You are given 'n’ roses and you are also given an array where 'arr[i]' denotes that the 'ith' rose will bloom on the 'arr[i]th' day. You can only pick already bloomed roses that are adjacent to make a bouquet. You are also told that you require exactly 'k' adjacent bloomed roses to make a single bouquet. Find the minimum number of days required to make at least ‘m' bouquets each containing 'k' roses. Return -1 if it is not possible.

function findMinAndMaxElements(arr) {
  let minElement = Infinity;
  let maxElement = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    minElement = Math.min(minElement, arr[i]);
    maxElement = Math.max(maxElement, arr[i]);
  }

  return [minElement, maxElement];
}

function checkPossibleBouquets(arr, day, bouquets, flowers) {
  const n = arr.length;

  let count = 0;
  let numOfBouquets = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] <= day) {
      count++;
    } else {
      numOfBouquets += Math.floor(count / flowers);
      count = 0;
    }
  }

  numOfBouquets += Math.floor(count / flowers);

  return numOfBouquets >= bouquets;
}

function minimumDaysToMakeBouquets(arr, bouquets, flowers) {
  let totalFlowersRequired = bouquets * flowers;

  const n = arr.length;

  if (totalFlowersRequired > n) return -1;

  const minAndMaxElements = findMinAndMaxElements(arr);

  const minElement = minAndMaxElements[0];
  const maxElement = minAndMaxElements[1];

  for (let i = minElement; i <= maxElement; i++) {
    if (checkPossibleBouquets(arr, i, bouquets, flowers)) {
      return i;
    }
  }

  return -1;
}

const numArr = [7, 7, 7, 7, 13, 11, 12, 7];

const bouquets = 2;

const flowers = 3;

const result = minimumDaysToMakeBouquets(numArr, bouquets, flowers);

console.log(result);

// Time complexity: O((maxElement - (minElement + 1)) * N)
// Space complexity: O(1)
