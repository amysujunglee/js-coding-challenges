let alice = [1,2,3,4];
let bob = [3,2,1,2];
let aliceScore = 0;
let bobScore = 0;

console.log(alice);

for (var i = 0; i < alice.length; i++) {
    if (alice[i] > bob[i]) {
        aliceScore++;
    } else if (alice[i] < bob[i]) {
        bobScore++;
    } else if (alice[i] === bob[i]) {
        aliceScore += 0;
        bobScore += 0;
    }
}

let totlaScore = [aliceScore, bobScore];
console.log(totlaScore);

