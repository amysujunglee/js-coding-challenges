let arr = [4,6,5,3,3,1];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (Math.abs(arr[i] - arr[j]) <= 1) {
            console.log(Math.abs(arr[i] - arr[j]));
        }
    }
}

console.log(arr);