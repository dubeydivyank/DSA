var searchRange = function (nums, target) {
  let positions = [firstPosition(nums, target), lastPosition(nums, target)];
  return positions;
};

function firstPosition(arr, target) {
  let pos = -1;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      pos = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return pos;
}

function lastPosition(arr, target) {
  let pos = -1;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      pos = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return pos;
}
