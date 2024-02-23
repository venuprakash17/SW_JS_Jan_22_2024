// let a = {
//     'user': 'scriptwave',
//     'passwrord': '123456'
// }

// Convert the object to a JSON string
// let jsonStr = JSON.stringify(a);

// // Store the JSON string in local storage with a key
// localStorage.setItem("personData", jsonStr);






// Retrieve the JSON string from local storage using the key
let storedJsonStr = localStorage.getItem("personData");

// Parse the JSON string back to an object
let a = JSON.parse(storedJsonStr);

// Now 'storedPerson' contains the object retrieved from local storage
// console.log(storedPerson); // Output: { name: "John", age: 30 }
let u = document.getElementById('first_value')
let p = document.getElementById('second_value')

function calc() {
    if (u.value == a.user && p.value == a.passwrord) {
        alert('Your authntication is successfull')
    } else {
        alert('Sorry, Your authntication is unsuccessfull')
    }
}