// given an array 'arr' of size 'n' which denotes the position of stalls. You are also given an integer 'k' which denotes the number of aggressive cows. Assign stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible. Find the maximum possible minimum distance.

function canWePlaceCows(stalls, distance, numOfCows) {
  const n = stalls.length;

  let countOfPlacedCows = 1;

  let placementOfLastCow = stalls[0];

  for (let i = 1; i < n; i++) {
    if (stalls[i] - placementOfLastCow >= distance) {
      countOfPlacedCows++;

      placementOfLastCow = stalls[i];
    }

    if (countOfPlacedCows >= numOfCows) return true;
  }

  return false;
}

function calculateDistance(stalls, numOfCows) {
  const n = stalls.length;

  stalls.sort((a, b) => a - b);

  const maxLimit = stalls[n - 1] - stalls[0];

  let low = 1;
  let high = maxLimit;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    const checkCanPlaceCows = canWePlaceCows(stalls, mid, numOfCows);

    if (checkCanPlaceCows) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
}

const stalls = [0, 3, 4, 7, 10, 9];

const numOfCows = 4;

const result = calculateDistance(stalls, numOfCows);

console.log(result);

// Time complexity: O(N log N) + O(N * log(maxLimit))
// Space complexity: O(1)
