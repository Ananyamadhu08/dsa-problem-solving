// Given a sorted array of length ‘n’, which contains positive integer positions of ‘n’ gas stations on the X-axis. You are also given an integer ‘k’. You have to place 'k' new gas stations on the X-axis. You can place them anywhere on the non-negative side of the X-axis, even on non-integer positions. Let 'dist' be the maximum value of the distance between adjacent gas stations after adding k new gas stations. Find the minimum value of ‘dist’.

function minimizeMaximumDistance(gasStations, numOfGasStations) {
  const n = gasStations.length;

  const sections = new Array(n - 1).fill(0);

  for (let i = 1; i <= numOfGasStations; i++) {
    let maxSectionLength = -1;
    let maxSectionIndex = -1;

    for (let j = 0; j < n - 1; j++) {
      const sectionDiff = gasStations[j + 1] - gasStations[j];

      const sectionLength = sectionDiff / (sections[j] + 1);

      if (sectionLength > maxSectionLength) {
        maxSectionLength = sectionLength;
        maxSectionIndex = j;
      }
    }

    sections[maxSectionIndex]++;
  }

  let maxDistance = -1;

  for (let i = 0; i < n - 1; i++) {
    const sectionDiff = gasStations[i + 1] - gasStations[i];

    const sectionLength = sectionDiff / (sections[i] + 1);

    maxDistance = Math.max(maxDistance, sectionLength);
  }

  return maxDistance;
}

const gasStations = [1, 2, 3, 4, 5];

const numOfGasStations = 4;

const result = minimizeMaximumDistance(gasStations, numOfGasStations);

console.log(result);

// Time complexity: O(numOfGasStations * N) + O(N)
// Space complexity: O(N - 1)
