'use strict';

//  for loops
/*
let n = Number(prompt('enter your number'));
// for (let i = 0; i < n; i++) {
//     console.log("value of i", i);
// }

let Ajay = function (n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${n} X ${i} = ${n * i}`);
    }
}

Ajay(n)

*/

//  While loops
/*
let n = Number(prompt('enter your number'));
let i = 0;

while (i < n) {
    console.log('Value of i:', i)
    i++;
}
*/


//  Amstrong number

let n = Number(prompt('enter your number')); // [1234 % 10 => 4]  [123 % 10 => 3]  [12%10 => 2]  [1 % 10 =>1] 
// let arr = []

//  153 = 1**3 => 1 5**3 => 125 3**3 => 27  1+125+27 = > 153 
// 407  = 4**3 + 0**3 + 7**3
function is_amstrong(n) {
    let sum = 0;
    let dummy_n = n
    while (n != 0) {
        let digit = n % 10;
        sum = sum + digit ** 3; // 0 + 9 => 9 // 
        n = Math.floor(n / 10);
    }
    if (dummy_n == sum) {
        return true;
    }
    else {
        return false
    }
}

console.log(is_amstrong(n))
