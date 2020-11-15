let num = 4;

// for (let i = 1; i <= num; i++) {
//     console.log('#'.repeat(i).padStart(num));
// }

// Two dimensional array concept
for (let i = 0; i < num; i++) {
    // Clear the result after each loop
    let result = '';
    for (let j = 0; j < num; j++) {
        // Loop through, whenever(n-1-i) is bigger than j concat a space else #
        j < num - 1 - i ? result += ' ' : result += '#';
    }
    console.log(result);
}