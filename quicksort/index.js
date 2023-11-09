function quicksort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const lower = array.slice(1).filter((el) => el <= pivot);
  const higher = array.slice(1).filter((el) => el > pivot);
  return quicksort(lower).concat([pivot], quicksort(higher));
}

console.log(quicksort([10, 5, 2, 3])); // [2, 3, 5, 10]
