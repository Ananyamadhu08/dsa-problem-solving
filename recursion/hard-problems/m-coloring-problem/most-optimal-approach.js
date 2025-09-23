// Given M colors and an undirected graph with N vertices and E edges, decide if we can color the graph so adjacent vertices have different colors (MRV + forward checking).

function buildAdjacencyList(vertices, edges) {
  // Build adjacency list; for each edge (u,v) add v to u and u to v.
  const adjacencyList = Array.from({ length: vertices }, () => []);

  for (const [startVertex, endVertex] of edges) {
    adjacencyList[startVertex].push(endVertex);
    adjacencyList[endVertex].push(startVertex);
  }

  return adjacencyList; // Return neighbor list for all vertices.
}

function pickNextVertex(vertexColors, availableColors) {
  // Pick the uncolored vertex with the fewest available colors (Minimum Remaining Values).
  let selectedVertex = -1;
  let fewestAvailableColors = Infinity;

  for (let vertexIndex = 0; vertexIndex < vertexColors.length; vertexIndex++) {
    if (vertexColors[vertexIndex] !== 0) continue; // Skip already-colored vertices.

    // Count how many colors remain available for this vertex.
    let availableCount = 0;

    for (
      let colorIndex = 1;
      colorIndex < availableColors[vertexIndex].length;
      colorIndex++
    ) {
      if (availableColors[vertexIndex][colorIndex]) availableCount++;
    }

    // Update if this vertex is more constrained than the current selection.
    if (availableCount < fewestAvailableColors) {
      fewestAvailableColors = availableCount;

      selectedVertex = vertexIndex;

      if (availableCount === 0) return vertexIndex; // Immediate dead-end if no colors left.
    }
  }

  return selectedVertex; // Return the most constrained vertex, or -1 if all are colored.
}

function colorGraph(colors, vertices, edges) {
  // If colors === vertices, assign unique colors to all vertices → always valid.
  if (colors === vertices) return true;

  // Build adjacency list for efficient neighbor lookups.
  const adjacencyList = buildAdjacencyList(vertices, edges);

  // Track chosen color per vertex; 0 means "uncolored".
  const vertexColors = Array(vertices).fill(0);

  // Track availability of each color per vertex; indices 1..colors are used.
  const availableColors = Array.from({ length: vertices }, () =>
    Array(colors + 1).fill(true)
  );

  // Recursively color vertices using MRV to choose next and forward checking to prune.
  function colorVertices() {
    const currentVertex = pickNextVertex(vertexColors, availableColors);

    if (currentVertex === -1) return true; // Base case: all vertices successfully colored.

    // Try each color that is currently available for the chosen vertex.
    for (let chosenColor = 1; chosenColor <= colors; chosenColor++) {
      if (!availableColors[currentVertex][chosenColor]) continue; // Skip blocked colors.

      vertexColors[currentVertex] = chosenColor; // Tentatively assign this color.

      const removedOptions = []; // Record neighbor color removals for undo.
      let failedConstraint = false; // Flag if a neighbor is left with no colors.

      // Forward checking: disallow chosenColor from all uncolored neighbors.
      for (const neighbor of adjacencyList[currentVertex]) {
        if (
          vertexColors[neighbor] === 0 &&
          availableColors[neighbor][chosenColor]
        ) {
          availableColors[neighbor][chosenColor] = false; // Remove chosenColor from neighbor.

          removedOptions.push([neighbor, chosenColor]); // Save removal to undo later.

          // Verify neighbor still has at least one color available.
          let hasAnyAvailable = false;

          for (let colorOption = 1; colorOption <= colors; colorOption++) {
            if (availableColors[neighbor][colorOption]) {
              hasAnyAvailable = true;
              break;
            }
          }

          if (!hasAnyAvailable) {
            failedConstraint = true;
            break;
          } // Dead-end: neighbor blocked.
        }

        // Immediate conflict if neighbor is already colored with chosenColor.
        if (vertexColors[neighbor] === chosenColor) {
          failedConstraint = true;
          break;
        }
      }

      // If no constraint failed, recurse to color the remaining vertices.
      if (!failedConstraint && colorVertices()) return true;

      // Undo all availability changes and unassign the color (backtrack).
      for (const [neighbor, colorOption] of removedOptions) {
        availableColors[neighbor][colorOption] = true;
      }

      vertexColors[currentVertex] = 0;
    }

    return false; // No color worked for this vertex → backtrack further.
  }

  // Kick off MRV-based recursive coloring.
  return colorVertices();
}

const colors = 3;

const vertices = 4;

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [0, 2],
];

const result = colorGraph(colors, vertices, edges);

console.log(result);

// ⏱️ Time & Space Complexity -

// Time Complexity: Exponential in the worst case (backtracking), but MRV + forward checking prune many branches.
// - MRV selects the most constrained vertex to fail early when impossible.
// - Forward checking removes a chosen color from neighbors immediately, detecting dead-ends sooner.

// Space Complexity: O(vertices + edges) + O(vertices · colors) + O(vertices)
// - O(vertices + edges) for the adjacency list.
// - O(vertices · colors) for the availability table.
// - O(vertices) for the recursion stack and the vertexColors array.
