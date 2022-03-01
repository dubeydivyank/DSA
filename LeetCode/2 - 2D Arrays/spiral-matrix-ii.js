var generateMatrix = function (n) {
    let result = new Array(n).fill(null).map(() => new Array(n));
    let startRow = 0;
    let startCol = 0;
    let endRow = n - 1;
    let endCol = n - 1;
    let i = 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result[startRow][col] = i++;
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            result[row][endCol] = i++;
        }
        for (let col = endCol - 1; col >= startCol; col--) {
            result[endRow][col] = i++;
        }
        for (let row = endRow - 1; row > startRow; row--) {
            result[row][startCol] = i++;
        }
        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }
    return result;
};
