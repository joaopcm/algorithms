// input: [10,3,8,9,4]
// output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// LeetCode link: https://leetcode.com/problems/relative-ranks/

function rerank(scores) {
  const sortedScores = [...scores].sort((a, b) => b - a);
  const map = new Map();

  sortedScores.forEach((score, index) => {
    if (index === 0) {
      map.set(score, "Gold Medal");
      return;
    }

    if (index === 1) {
      map.set(score, "Silver Medal");
      return;
    }

    if (index === 2) {
      map.set(score, "Bronze Medal");
      return;
    }

    map.set(score, index + 1);
  });

  return scores.map((score) => map.get(score));
}

console.log(rerank([10, 3, 8, 9, 4])); // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
console.log(rerank([5, 4, 3, 2, 1])); // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]