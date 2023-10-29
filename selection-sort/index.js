function searchForSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  const newArr = [];

  while (arr.length) {
    const smallestIndex = searchForSmallest(arr);
    newArr.push(arr.splice(smallestIndex, 1)[0]);
  }

  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
