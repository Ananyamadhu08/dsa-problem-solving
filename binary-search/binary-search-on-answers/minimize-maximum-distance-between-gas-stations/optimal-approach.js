// Given a sorted array of length ‘n’, which contains positive integer positions of ‘n’ gas stations on the X-axis. You are also given an integer ‘k’. You have to place 'k' new gas stations on the X-axis. You can place them anywhere on the non-negative side of the X-axis, even on non-integer positions. Let 'dist' be the maximum value of the distance between adjacent gas stations after adding k new gas stations. Find the minimum value of ‘dist’.

function calculateNumberOfGasStations(gasStations, distance) {
  const n = gasStations.length;

  let numOfGasStations = 0;

  for (let i = 1; i < n; i++) {
    const sectionDiff = gasStations[i] - gasStations[i - 1];

    const numOfGasStationsInBetween = Math.floor(sectionDiff / distance);

    if (sectionDiff === distance * numOfGasStationsInBetween) {
      numOfGasStations += numOfGasStationsInBetween - 1;
    } else {
      numOfGasStations += numOfGasStationsInBetween;
    }
  }

  return numOfGasStations;
}

function minimizeMaximumDistance(gasStations, numOfGasStations) {
  const n = gasStations.length;

  let maxLength = 0;

  for (let i = 0; i < n - 1; i++) {
    maxLength = Math.max(maxLength, gasStations[i + 1] - gasStations[i]);
  }

  let low = 0;
  let high = maxLength;

  const diff = 1e-6;

  while (high - low > diff) {
    let mid = (low + high) / 2;

    const countNumOfGasStations = calculateNumberOfGasStations(
      gasStations,
      mid
    );

    if (countNumOfGasStations > numOfGasStations) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return high;
}

const gasStations = [1, 2, 3, 4, 5];

const numOfGasStations = 4;

const result = minimizeMaximumDistance(gasStations, numOfGasStations);

console.log(result);

// Time complexity: O(N log maxLength) + O(N)
// Space complexity: O(1)
