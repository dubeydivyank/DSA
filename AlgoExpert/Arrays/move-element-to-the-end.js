//O(n)time | O(1)space
function moveElementToEnd(array, toMove) {
    let r = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == toMove) {
            let temp = array[i];
            array[i] = array[r];
            array[r] = temp;
            r--;
        }
    }
    return array;
}

//O(n)time | O(1)space
function moveElementToEnd(array, toMove) {
    let pos = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != toMove) {
            let temp = array[pos];
            array[pos] = array[i];
            array[i] = temp;
            pos++;
        }
    }
    return array;
}
