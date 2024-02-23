//  Objects

arr = [1, 2, 4, 4, 5, 6]
let student_name = ['Script wave', "Ajay", "Suresh", "Lokesh"]

let S1 = {
    'name': "Script Wave",
    'DOB': '17/10/1999'
}

let S2 = {
    'name': "Ajay",
    'DOB': '17/09/1999'
}

let S3 = {
    'name': "Lokesh",
    'DOB': '17/10/2001'
}

let S4 = {
    'name': "Suresh",
    'DOB': '17/10/2000'
}

let S5 = {
    'name': "Ravi",
    'DOB': '19/10/1999'
}




function Student(name, DOB) {
    this.name = name;
    this.DOB = DOB;

    // this.greet = function() {
    //     console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
    // }
}


let n = document.getElementById('first_value')
let d = document.getElementById('second_value')

function calc() {
    let nValue = n.value;
    let dValue = d.value;
    let S7 = new Student(nValue, dValue)
    console.log(S7)
}

// let S7 = new Student('Script_wave_2', "10/12/2004")

// console.log(S7.name)



// console.log(S7)




// let person1 = new Person("Alice", 25);
// person1.greet(); // Output: Hello, my name is Alice and I'm 25 years old.




// console.log(S1.name)
// console.log(S2.name)
// console.log(S3.name)
// console.log(S4.name)