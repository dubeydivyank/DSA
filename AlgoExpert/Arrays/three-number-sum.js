// O(n^2) time | o(n) space
function threeNumberSum(array, targetSum) {
  const result = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let l = i + 1;
    let r = array.length - 1;
    while (l < r) {
      const currentSum = array[i] + array[l] + array[r];
      if (currentSum > targetSum) r--;
      else if (currentSum < targetSum) l++;
      else if (currentSum === targetSum) {
        result.push([array[i], array[l], array[r]]);
        l++;
        r--;
      }
    }
  }
  return result;
}
