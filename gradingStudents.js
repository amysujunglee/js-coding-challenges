let grade = [99, 84, 37, 33];

for (let i = 0; i < grade.length; i++) {
    if (grade[i] < 38) {
        grade[i];
    } else if (Math.abs(grade[i] - Math.ceil(grade[i] / 5) * 5) >= 3) {
        grade[i];
    } else if (Math.abs(grade[i] - Math.ceil(grade[i] / 5) * 5) < 3) {
        grade[i] = Math.ceil(grade[i] / 5) * 5;
    }
}

console.log(grade);