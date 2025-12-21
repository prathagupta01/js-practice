/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!
 
let firstName = 'Carlos'
let lastName = 'Stevenson'
thisYear = 1965
birthYear = 1947
let fullName = firstName + ' ' + lastName
let age = thisYear - birthYear
let greeting = `Hello! My name is ` + fullName + ` and I am ` + age + ` years old.`




// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age //This line checks if the variable age is undefined. If it is, it sets the value to undefined; otherwise, it sets it to the value of age. This is useful for exporting variables in Node.js modules to avoid ReferenceErrors if the variable was never defined. In your file, it ensures that age is either its calculated value or undefined if not set.
}
