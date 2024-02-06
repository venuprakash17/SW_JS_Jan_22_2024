// Video link : https://www.youtube.com/watch?v=wD8IK-QmHys


// ***** var ****** 
/*
var a = 10;
function fun() {
    if(true){
    var b = 20;
    console.log('A,B: ',a,b)
    }
    console.log('A,B: ',a,b)
}
fun();
console.log(a)
*/

// *** let ***
/*
let a1 = 10;
function fun1() {
    if(true){
        let b1 = 20;
        console.log(a1,b1)
    }
    console.log(a1,b1)
}
fun1();
*/

// *** Const ***
/*
const c1 = "ScriptWave"

console.log(c1)
*/




// **** var vs let ****

// function scope:
// Var: 
/*
function ExampleOfFunctionBlock() {
  if (true) {
    var a = 50;
    console.log("Inside Normal Block", a); // Result of a will be 50 }
    
  }
    console.log("OutSide function block", a); // Result of a will be 50
}

ExampleOfFunctionBlock();
*/

// let:

/*
function ExampleOfFunctionBlock() {
  if (true) {
    let a = 50;
    console.log("Inside Normal Block", a); // Result of a will be 50 }
    
  }
    console.log("OutSide function block", a); // Result of a will be error: a is not defined
}

ExampleOfFunctionBlock();
*/



// Redeclaration:
/*

var dec_1 = 10
var dec_1 = 20
console.log('dec_1:  ',dec_1)

let dec_let = 10
let dec_let = 20
console.log(dec_let)
*/

// Initialising before declaration:

console.log(dec_var_1)
var dec_var_1;


console.log(dec_let_1)
let dec_let_1 = 10;
