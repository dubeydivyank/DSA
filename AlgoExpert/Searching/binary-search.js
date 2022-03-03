//Iterative
// O(logn)time | O(1)space
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (target === array[mid]) return mid;
        else if (target > array[mid]) left = mid + 1;
        else if (target < array[mid]) right = mid - 1;
    }
    return -1;
}

//Recursive
//O(logn)time | O(logn)space
function binarySearch(array, target) {
    return search(array, target, 0, array.length - 1);
}
function search(array, target, left, right) {
    if (left > right) return -1;
    let mid = Math.floor(left + (right - left) / 2);
    if (array[mid] === target) {
        return mid;
    } else if (array[mid] > target) {
        return search(array, target, left, mid - 1);
    } else {
        return search(array, target, mid + 1, right);
    }
}
