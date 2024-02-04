class Graph {
  //adjacencyList: {}
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
    }
    delete this.adjacencyList[vertex];
  }
  printAdjacencyList() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} => ${this.adjacencyList[vertex].join(",")}`);
    }
  }
}


// const gr = new Graph();
// gr.addVertex("tokyo");
// gr.addVertex("dallas");
// gr.addVertex("aspen");

// gr.addEdge("tokyo", "dallas");
// gr.addEdge("dallas", "aspen");
// gr.addEdge("tokyo", "aspen");

// gr.removeEdge("dallas", "aspen")
// gr.removeVertex("aspen")
// gr.printAdjacencyList();

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

graph.printAdjacencyList();

////Depth First Traversal
const depthFirstTraversal = (graph, startVertex) => {
  if (!graph.adjacencyList[startVertex]) {
    return [];
  }

  const visited = {};
  const result = [];
  const stack = [];
  stack.push(startVertex);
  visited[startVertex] = true;
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current);
    graph.adjacencyList[current].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;

        stack.push(neighbor);
      }
    });
  }
  return result;
};


console.log(depthFirstTraversal(graph, "A"));

////Breadth First traversal
const breadthFirstTraversal = (graph, startVertex) => {
  const visited = new Set();
  const queue = [];
  const result = [];
  queue.push(startVertex);
  visited.add(startVertex);
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);
    graph.adjacencyList[current].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }
  return result;
};

console.log(breadthFirstTraversal(graph, "A"));
