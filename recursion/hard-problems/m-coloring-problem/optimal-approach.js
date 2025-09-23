// Given an integer M and an undirected graph with N vertices and E edges. The goal is to determine whether the graph can be coloured with a maximum of M colors so that no two of its adjacent vertices have the same colour applied to them. In this context, coloring a graph refers to giving each vertex a different colour. If the coloring of vertices is possible then return true, otherwise return false.

function buildAdjacencyList(vertices, edges) {
  // Build adjacency list; for each edge (u,v) add v to u and u to v.
  const adjacencyList = Array.from({ length: vertices }, () => []);

  for (const [startVertex, endVertex] of edges) {
    adjacencyList[startVertex].push(endVertex);
    adjacencyList[endVertex].push(startVertex);
  }

  return adjacencyList;
}

function isSafeToColor(
  currentVertex,
  chosenColor,
  vertexColors,
  adjacencyList
) {
  // Check neighbors of currentVertex; none should already have chosenColor.
  for (const neighbor of adjacencyList[currentVertex]) {
    if (vertexColors[neighbor] === chosenColor) {
      return false;
    }
  }

  return true;
}

function colorGraph(colors, vertices, edges) {
  // If colors === vertices, assign unique colors to all vertices → always valid.
  if (colors === vertices) return true;

  // Build adjacency list for efficient neighbor lookups.
  const adjacencyList = buildAdjacencyList(vertices, edges);

  // Track chosen color per vertex; 0 means "uncolored".
  const vertexColors = Array(vertices).fill(0);

  // Recursively try coloring vertices with early pruning on conflicts.
  function colorVertices(vertexIndex) {
    // If all vertices are assigned, we found a valid coloring.
    if (vertexIndex === vertices) return true;

    // Try every color for the current vertex, pruning invalid choices immediately.
    for (let chosenColor = 1; chosenColor <= colors; chosenColor++) {
      if (
        !isSafeToColor(vertexIndex, chosenColor, vertexColors, adjacencyList)
      ) {
        continue;
      }

      vertexColors[vertexIndex] = chosenColor; // Tentative assignment.

      if (colorVertices(vertexIndex + 1)) return true; // Found a valid coloring downstream.

      vertexColors[vertexIndex] = 0; // Backtrack.
    }

    return false; // No color worked here.
  }

  // Start recursion from vertex 0.
  return colorVertices(0);
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

// Time Complexity: O(colors^vertices) in the worst case, but typically much less due to pruning.
// We assign one vertex at a time and prune as soon as a neighbor conflict appears, avoiding full validations.

// Space Complexity: O(vertices + edges) + O(vertices).
// Adjacency list uses O(vertices + edges); recursion depth + color array use O(vertices).
