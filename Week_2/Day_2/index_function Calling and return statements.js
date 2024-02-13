'use strict';

// function calc(x, y) {
//     x = Number(document.getElementById('first_value').value)
//     y = Number(document.getElementById('second_value').value)
//     console.log(x ** 2 + y ** 2 + 2 * x * y)
// }
/*
let greet = function (name) {
    let greeting = `Hello ${name}`
    console.log(greeting);
}

greet('ScriptWave')
greet('Lokesh')
greet('Ajay')
greet('Suresh')
*/

let name = 'ScriptWave'
let marks = prompt('Enter all 6 subject marks with comma separated')
// 90,98,97,99,80,87;

// ['90','98','97','99','80','87']

function sum1(M) {
    let splited_marks = M.split(',');
    let total = 0
    for (let i = 0; i < 6; i++) {
        total = total + Number(splited_marks[i])
    }
    return total;
}

let final_score = sum1(marks);

function percentage(M) {
    console.log((sum1(M) / 600) * 100);
    return (sum1(M) / 600) * 100;
}

function Grade(M) {
    let percent = percentage(M);
    if (percent > 90) {
        console.log('Congratulations you got A grade :)')
        return 'A'
    } else if (percent > 75) {
        console.log('Congratulations you got B grade :)')
        return 'B'
    } else if (percent > 55) {
        console.log('Congratulations you got C grade :)')
        return 'C'
    } else if (percent > 45) {
        console.log('Congratulations you got D grade :)')
        return 'D'
    } else if (percent > 40) {
        console.log('Congratulations you got E grade :)')
        return 'E'
    } else {
        console.log('Sorry you are failed :(')
        return 'F'
    }
}
percentage(marks)
Grade(marks)

console.log(`Hello ${name}, you have got ${sum1(marks)} and ${percentage(marks)}% you have secured ${Grade(marks)} `)