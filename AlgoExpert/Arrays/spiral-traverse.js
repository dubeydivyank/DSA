function spiralTraverse(array) {
    const result = [];
    let startRow = 0;
    let startCol = 0;
    let endRow = array.length - 1;
    let endCol = array[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }
        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) break; //we must break out of the loop to avoid double counting of numbers
            result.push(array[endRow][col]);
        }
        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) break; //we must break out of the loop to avoid double counting of numbers
            result.push(array[row][startCol]);
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return result;
}
