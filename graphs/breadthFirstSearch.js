const graph = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

function breadthFirstSearch(name) {
  let queue = graph[name].slice();
  const verified = [];

  while (queue.length) {
    let person = queue.shift();

    if (!verified.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller`);
        return true;
      }

      queue = queue.concat(graph[person]);
      verified.push(person);
    }
  }

  return false;
}

function personIsSeller(name) {
  return name.endsWith("m");
}

breadthFirstSearch("you");
