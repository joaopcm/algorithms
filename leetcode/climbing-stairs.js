// input: 4
// output: 5
// LeetCode link: https://leetcode.com/problems/climbing-stairs

const map = new Map();

function climbStairs(n) {
  if (n < 2) {
    map.set(n, 1);
    return 1;
  }

  if (map.get(n)) {
    return map.get(n);
  }

  map.set(n, climbStairs(n - 1) + climbStairs(n - 2));
  return map.get(n - 1) + map.get(n - 2);
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
