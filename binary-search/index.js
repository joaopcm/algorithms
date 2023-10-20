function binarySearch(nums, item) {
  let left = 0;
  let right = nums.length - 1;

  do {
    let mid = Math.floor((left + right) / 2);
    let guess = nums[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      // too high
      right = mid - 1;
    } else {
      // too low
      left = mid + 1;
    }
  } while (left <= right);

  return -1;
}

const result = binarySearch([1, 2, 3, 4, 5], 4); // 3
console.log({ result });
