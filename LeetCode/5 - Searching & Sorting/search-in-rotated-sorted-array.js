var search = function (nums, target) {
  let pivot = findPivot(nums);
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  if (target <= nums[nums.length - 1] && target >= nums[pivot]) {
    return binarySearch(nums, target, pivot, nums.length - 1);
  } else return binarySearch(nums, target, 0, pivot - 1);
};

function findPivot(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let next = (mid + 1) % arr.length;
    let prev = (mid + arr.length - 1) % arr.length;
    if (arr[mid] < arr[prev] && arr[mid] < arr[next]) return mid;
    else if (arr[mid] > arr[arr.length - 1]) left = mid + 1;
    else right = mid - 1;
  }
}

function binarySearch(arr, target, left, right) {
  if (left > right) return -1;
  let mid = Math.floor(left + (right - left) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}
