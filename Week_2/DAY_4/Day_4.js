'use strict';
// n = 5?
// Factorial: 5! -> 1*2*3*4*5 4! -> 1*2*3*4 0! -> 1 1!-> 1
// 5! -> 5*4*3*2*1

const number = Number(prompt('enter the value of n where you wanna find the factorial'))
/*
// const number = Number(prompt('enter the value of n where you wanna find the factorial'))
function factorial(n) {
    console.log('Value of n:', n)
    if (n == 1 || n == 0) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(number))

*/

// fabinocci  series:

function fab(n) {
    if (n == 0 || n == 1) {
        return n;
    }

    return fab(n - 1) + fab(n - 2);
}

console.log(fab(number))