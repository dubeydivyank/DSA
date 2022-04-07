/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0;
    let right = n;
    let currentBadVersion = 0;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      let res = isBadVersion(mid);

      if (res) {
        currentBadVersion = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return currentBadVersion;
  };
};
