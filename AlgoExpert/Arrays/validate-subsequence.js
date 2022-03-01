// https://www.algoexpert.io/questions/Validate%20Subsequence

function isValidSubsequence(array, sequence) {
    for (let value of array) {
        if (sequence[0] === value) sequence.shift();
    }
    return sequence.length === 0;
}

function isValidSubsequence(array, sequence) {
    let idx = 0;
    for (let value of array) {
        if (idx === sequence.length) break;
        if (value === sequence[idx]) idx++;
    }
    return idx === sequence.length;
}
