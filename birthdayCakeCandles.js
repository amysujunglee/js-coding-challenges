let arr = [4,4,1,3];
let largestNum = Math.max(...arr);
let result = arr.filter(num => num === largestNum).length;

console.log(result);