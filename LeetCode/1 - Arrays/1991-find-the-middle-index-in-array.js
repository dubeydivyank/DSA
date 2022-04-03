var findMiddleIndex = function (nums) {
  let rightSum = 0;
  let leftSum = 0;
  for (let i of nums) rightSum += i;
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (rightSum === leftSum) return i;
    else leftSum += nums[i];
  }
  return -1;
};
