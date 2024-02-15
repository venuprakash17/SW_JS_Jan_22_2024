"use strict";

//  for loops

/*
for (let i = 0; i < 5; i++) {
    console.log('Value of i: ', i);
}
*/

//  math table:
/*
let n = Number(prompt('Enter the value of n'))
for (let i = 1; i <= 10; i++) {
    console.log(`${n}x${i}=${n * i}`)
}
*/
// 2X1=2
// 2X2=4

// While
/*
let count = 0;
while (count < 5) {
    console.log('Value of "Count": ', count)
    count++
}
*/

let n = Number(prompt('Enter the value of n'))
let sum = 0
while (n != 0) {
    let digit = n % 10;
    sum = digit + sum;
    n = Math.floor(n / 10);
}

console.log('SUM: ', sum)
