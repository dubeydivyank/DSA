// O(n^2)time | O(1)space
function firstDuplicateValue(array) {
  let secondIdx = Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] == array[i]) {
        if (j < secondIdx) {
          secondIdx = j;
        }
      }
    }
  }
  return secondIdx === Infinity ? -1 : array[secondIdx];
}

// O(n)time | O(n)space
function firstDuplicateValue(array) {
  const duplicates = {};
  for (const value of array) {
    if (duplicates.hasOwnProperty(value)) return value;
    duplicates[value] = true;
  }
  return -1;
}

//O(n)time| O(1)space
function firstDuplicateValue(array) {
  for (let values of array) {
    const value = Math.abs(values);
    if (array[value - 1] < 0) return value;
    else array[value - 1] *= -1;
  }
  return -1;
}
