// Write a program to simulate calculator working.


// let ask = prompt('Enter the first value and second value with a comma')
// // let b = Number(prompt('Enter the Second value'))
// let opp = prompt('Enter the operation: + - addition; - - for subtraction; / for division; * for multiplication; % - for reminder; ** for exponential')


function calc() {
    let a = Number(document.getElementById('first_value').value);
    let b = Number(document.getElementById('second_value').value);
    let opp = document.getElementById('operation').value;
    let output;
    switch (opp) {
        case '+':
            output = `Sum of ${a} and ${b} is ${a + b}`;
            break;
        case '-':
            output = `Sum of ${a} and ${b} is ${a - b}`;
            break;
        case '*':
            output = `Sum of ${a} and ${b} is ${a * b}`;
            break;
        case '/':
            output = `Sum of ${a} and ${b} is ${a / b}`;
            break;
        case '**':
            output = `Sum of ${a} and ${b} is ${a ** b}`;
            break;
        case '%':
            output = `Sum of ${a} and ${b} is ${a % b}`
            break;
        default:
            output = `enter valid oppeation for a and b`
            break;
    }
    console.log(output);
    document.getElementById('H1_output').innerText = output;

}
