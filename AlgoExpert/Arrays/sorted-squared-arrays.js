// O(nlogn) time | O(n) space
function sortedSquaredArray(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i] * array[i];
    }
    result.sort((a, b) => a - b);
    return result;
}

// O(n) time | O(n) space
function sortedSquaredArray(array) {
    const result = new Array(array.length).fill(0);
    let left = 0;
    let right = array.length - 1;
    for (let i = result.length - 1; i >= 0; i--) {
        if (Math.abs(array[left]) >= Math.abs(array[right])) {
            result[i] = array[left] * array[left];
            left++;
        } else {
            result[i] = array[right] * array[right];
            right--;
        }
    }
    return result;
}
