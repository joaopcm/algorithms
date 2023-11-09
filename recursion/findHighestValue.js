function findHighestValue(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return Math.max(arr[0], findHighestValue(arr.slice(1)));
}

console.log(findHighestValue([1, 2, 3, 4, 5])); // 5
