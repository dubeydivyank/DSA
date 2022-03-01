// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
    for (let firstNum of array) {
        for (let secNum of array) {
            if (firstNum + secNum === targetSum && firstNum != secNum) {
                return [firstNum, secNum];
            }
        }
    }
    return [];
}

// O(nlogn) time | O(1) space
function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) return [array[left], array[right]];
        else if (currentSum < targetSum) left++;
        else right--;
    }
    return [];
}

// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
    const obj = {};
    for (let value of array) {
        let potentialMatch = targetSum - value;
        if (obj[potentialMatch] == true) return [potentialMatch, value];
        else obj[value] = true;
    }
    return [];
}
