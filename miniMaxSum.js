let arr = [1, 3, 5, 7, 9];
let largestNum = Math.max(...arr);
let smallestNum = Math.min(...arr);

// find the largest number
console.log('The largest number: ', largestNum);

// find the smallest number
console.log('The smallest number: ', smallestNum);

// sum the array
console.log('arrSum: ', arr.reduce((a,b) => a+b));

// miniSum
console.log('miniSum: ', arr.reduce((a,b) => a+b) - largestNum);

// maxSum
console.log('maxSum', arr.reduce((a,b) => a+b) - smallestNum);