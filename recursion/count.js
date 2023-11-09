function count(items) {
  if (items.length === 0) {
    return 0;
  }

  return 1 + count(items.slice(1));
}

console.log(count(["one", "two", "three", "four", "five"])); // 5
