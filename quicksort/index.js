function quicksort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivotIndex = Math.floor(Math.random() * array.length);
  const pivot = array[pivotIndex];
  array.splice(pivotIndex, 1);

  const lower = array.filter((el) => el <= pivot);
  const higher = array.filter((el) => el > pivot);

  return quicksort(lower).concat([pivot], quicksort(higher));
}

console.log(quicksort([10, 5, 2, 3])); // [2, 3, 5, 10]
