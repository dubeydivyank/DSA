//O(logn) time | O(1)space
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let next = (mid + 1) % nums.length;
    let prev = (mid + nums.length - 1) % nums.length;

    if (nums[mid] < nums[next] && nums[mid] < nums[prev]) return nums[mid];
    else if (nums[mid] >= nums[nums.length - 1]) left = mid + 1;
    else right = mid - 1;
  }
};
