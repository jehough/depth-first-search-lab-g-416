function depthFirstSearch(rootNode, vertices, edges){
  rootNode.discovered = true
  const queue = [rootNode]
  const visited = []
  while (queue.length !== 0){
    let firstNode = queue.pop()
    let adjvert = findAdjacent(firstNode.name, vertices, edges)
    for (let adj of adjvert){
      adj.discovered = true
      queue.push(adj)
    }
    visited.push(firstNode)
  }
  return visited
}

function findAdjacent(rootNode, vertices, edges){
  let vert = []
  for (let edge of edges){
    if (edge.includes(rootNode)){
      for (let vertex of edge){
        if( vertex !== rootNode){
          vertices.find(e => e.name === vertex && e.discovered === null)?
            vert.push(vertices.find(e => e.name === vertex && e.discovered === null)): null
        }
      }
    }
  }

  return vert
}
