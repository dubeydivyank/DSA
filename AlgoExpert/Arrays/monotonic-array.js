function isMonotonic(array) {
    // Write your code here.
    let isIncreasing = false;
    let isDecreasing = false;

    if (array.length <= 1) return true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] >= array[i - 1]) isIncreasing = true;
        else {
            isIncreasing = false;
            break;
        }
    }
    if (isIncreasing) return true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] <= array[i - 1]) isDecreasing = true;
        else {
            isDecreasing = false;
            break;
        }
    }
    return isDecreasing ? true : false;
}

function isMonotonic(array) {
    // Write your code here.
    let isIncreasing = true;
    let isDecreasing = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) isIncreasing = false;
        if (array[i] > array[i - 1]) isDecreasing = false;
    }
    return isIncreasing || isDecreasing;
}
