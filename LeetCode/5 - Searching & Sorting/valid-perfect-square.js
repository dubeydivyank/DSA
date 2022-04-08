var isPerfectSquare = function (num) {
  let lo = 0;
  let hi = num;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let possibleNum = mid * mid;
    if (possibleNum === num) return true;
    else if (possibleNum > num) hi = mid - 1;
    else lo = mid + 1;
  }
  return false;
};
