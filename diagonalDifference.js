let arr = [[1,2,3], [4,5,6], [9,8,9]];
let leftDiagonal = 0;
let rightDiagonal = 0;

for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][arr.length - 1 - i]
}

console.log(Math.abs(leftDiagonal - rightDiagonal));
