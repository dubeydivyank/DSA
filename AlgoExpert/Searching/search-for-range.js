function searchForRange(array, target) {
  return [searchLeft(array, target), searchRight(array, target)];
}

function searchLeft(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  let res = -1;
  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    if (arr[mid] === target) {
      res = mid;
      hi = mid - 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return res;
}

function searchRight(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  let res = -1;
  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    if (arr[mid] === target) {
      res = mid;
      lo = mid + 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return res;
}
