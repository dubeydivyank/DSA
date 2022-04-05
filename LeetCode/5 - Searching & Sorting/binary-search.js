//Recursive
//O(logn) time | O(logn) space
var search = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
};

function binarySearch(nums, left, right, target) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) return mid;
  else if (nums[mid] > target) {
    return binarySearch(nums, left, mid - 1, target);
  } else {
    return binarySearch(nums, mid + 1, right, target);
  }
}

//Iterative
//O(logn) time | O(1) space
var search = function (nums, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (target === array[mid]) return mid;
    else if (target > array[mid]) left = mid + 1;
    else if (target < array[mid]) right = mid - 1;
  }
  return -1;
};
