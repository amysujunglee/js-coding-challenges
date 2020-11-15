let arr = [-4,3,-9,0,4,1];

// find positive, zero, negative integer
let positiveInt = arr.filter(num => num > 0);
let negativeInt = arr.filter(num => num < 0);
let zero = arr.filter(num => num === 0);

// divide the num length by the arr.length
let positiveRatio = (positiveInt.length/arr.length).toFixed(6);
let negativeRatio = (negativeInt.length/arr.length).toFixed(6);
let zeroRatio = (zero.length/arr.length).toFixed(6);

let result = [positiveRatio, negativeRatio, zeroRatio];

console.log(result);