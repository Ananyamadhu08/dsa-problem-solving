// Given an integer M and an undirected graph with N vertices and E edges. The goal is to determine whether the graph can be coloured with a maximum of M colors so that no two of its adjacent vertices have the same colour applied to them. In this context, coloring a graph refers to giving each vertex a different colour. If the coloring of vertices is possible then return true, otherwise return false.

// Build an adjacency list from an edge list for an undirected graph. adjacencyList[v] will contain all neighbors of v.
function buildAdjacencyList(vertices, edges) {
  const adjacencyList = Array.from({ length: vertices }, () => []);

  for (const [startVertex, endVertex] of edges) {
    adjacencyList[startVertex].push(endVertex);
    adjacencyList[endVertex].push(startVertex); // undirected ⇒ push both ways
  }

  return adjacencyList;
}

// Validate a completed coloring by ensuring every edge connects vertices of different colors. We only check each undirected edge once using (vertex < neighbor).
function isColoringValid(vertexColors, adjacencyList) {
  const vertices = adjacencyList.length;

  for (let vertex = 0; vertex < vertices; vertex++) {
    for (const neighbor of adjacencyList[vertex]) {
      // Check each undirected edge exactly once
      if (
        vertex < neighbor &&
        vertexColors[vertex] === vertexColors[neighbor]
      ) {
        return false; // Adjacent vertices share the same color ⇒ invalid coloring
      }
    }
  }

  return true;
}

function colorGraph(colors, vertices, edges) {
  // If we have as many colors as vertices, we can give each vertex a unique color → always valid
  if (colors === vertices) return true;

  // Build adjacency list for efficient neighbor lookups.
  const adjacencyList = buildAdjacencyList(vertices, edges);

  // Track chosen color per vertex, 0 means "uncolored".
  const vertexColors = Array(vertices).fill(0);

  // Recursive function to try coloring vertices one by one
  function colorVertices(vertexIndex) {
    // Base case: all vertices are assigned a color → validate once
    if (vertexIndex === vertices) {
      return isColoringValid(vertexColors, adjacencyList);
    }

    // Try every possible color for the current vertex
    for (let chosenColor = 1; chosenColor <= colors; chosenColor++) {
      vertexColors[vertexIndex] = chosenColor; // Tentatively assign

      if (colorVertices(vertexIndex + 1)) {
        return true; // Found a valid coloring downstream
      }

      vertexColors[vertexIndex] = 0; // Backtrack (undo)
    }

    // If no color works for this vertex, this branch fails
    return false;
  }

  // Kick off recursion from vertex 0
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

// Time Complexity: O(colors^vertices * (vertices + edges))
// - We enumerate all full color assignments: colors^vertices combinations.
// - For each completed assignment (leaf of the recursion tree), we validate the coloring.
//   Validation scans the adjacency list and checks each undirected edge once ⇒ O(vertices + edges).

// Space Complexity: O(vertices + edges) + O(vertices)
// - O(vertices + edges) for the adjacency list.
// - O(vertices) for the current color assignment array and recursion depth (call stack).
// - Output is just a boolean, so no extra output storage is needed here.
