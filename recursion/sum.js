function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers[0] + sum(numbers.slice(1));
}

console.log(sum([1, 2, 3, 4, 5])); // 15
