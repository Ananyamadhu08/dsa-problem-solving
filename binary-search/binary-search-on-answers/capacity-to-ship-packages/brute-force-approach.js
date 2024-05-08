// You are the owner of a Shipment company. You use conveyor belts to ship packages from one port to another. The packages must be shipped within 'd' days. The weights of the packages are given in an array 'of weights'. The packages are loaded on the conveyor belts every day in the same order as they appear in the array. The loaded weights must not exceed the maximum weight capacity of the ship. Find out the least-weight capacity so that you can ship all the packages within 'd' days.

function calculateDaysRequired(arr, capacity) {
  let days = 1;
  let load = 0;

  for (let i = 0; i < arr.length; i++) {
    if (load + arr[i] > capacity) {
      days++;

      load = arr[i];
    } else {
      load += arr[i];
    }
  }

  return days;
}

function findCapacityToShipPackages(arr, days) {
  let maxElement = Math.max(...arr);

  let sumOfWeights = arr.reduce((acc, curr) => acc + curr);

  for (let i = maxElement; i <= sumOfWeights; i++) {
    const daysRequired = calculateDaysRequired(arr, i);

    if (daysRequired <= days) {
      return i;
    }
  }

  return -1;
}

const numArr = [5, 4, 5, 2, 3, 4, 5, 6];

const days = 5;

const result = findCapacityToShipPackages(numArr, days);

console.log(result);

// Time complexity: O(N * (sumOfWeights - maxElement))
// Space complexity: O(1)
