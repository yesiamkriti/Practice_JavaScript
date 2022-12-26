// chapter2
let a = prompt("hey whats your age ?")
a = Number.parseInt(a);//converting a string to a number
if (a < 0) {
  alert("this is an invalid age");
}
else if (a < 9) {
  alert("your are kid and you cannot even think of driving");
}
else if (a < 18 && a >= 9) {
  alert("you are a kid and you can only think of driving after 18");
}
else {
  alert("you can now drive as you are above 18");
}
console.log("done")
// homework --> explore switch statement and write a basic program in the comments
console.log("you can", (a < 18 ? "not drive" : "drive"))


// practice set
// 1. use logical operator to find whether the age of a person lies between 10 and 20
// sol1.
let age1 = prompt("what is your age?")
age1 = Number.parseInt(age1)
if (age1 > 10 && age1 < 20) {
  console.log("your age lies between 10 and 20")
}
else {
  console.log("your age donnot lies b/w 10 to20")
}
// 2.. Demonstrate the use of switch case statement in javascript
// sol2
let colour = prompt("what is you favourate colour? ")
switch (colour) {
  case 'yellow':
    console.log("your favourate colour is 'yellow'")
    break
  case 'pink':
    console.log("your favourate colour is 'pink'")

  case 'green':
    console.log("your favourate colour is 'green'")

  case 'blue':
    console.log("your favourate colour is 'blue'")

  case 'black':
    console.log("your favourate colour is 'black'")
  default:
    console.log("your colour is special")
}

// 3.. write a javascript program to find whether a number is divisible by 2 and 3
let number = prompt("Enter a number:")
if (number % 2 == 0 && number % 3 == 0) {
  console.log("your number is divisible by 2 and 3 both")
}
else {
  console.log("not divisible by 2 and 3 both")
}
// 4..write a javascript program to find whether a number is divisible by either 2 or 3
let number1 = prompt("Enter a number:")
if (number1 % 2 == 0 && number1 % 3 == 0) {
  console.log("your number is divisible by 2 and 3 both")
}
else if (number1 % 3 == 0) {
  console.log("your number is divisible by 3 only")
}
else if (number1 % 2 == 0) {
  console.log("your number is divisible by 2 only")
}
else {
  console.log("not divisible by 2 and 3")
}
// 5.. print"you can drive "or "you cannot drive based on age being graeter than 18 using known operator

// let drive_age = prompt("what is your age?")
// if (drive_age >= 18) {
//   console.log("you are eligible for driving")
// }
// else {
//   console.log("you are not eligible for driving")
// }

// using operaztor
let your_age = 12
console.log(your_age > 18 ? "you can drive" : "you cannot drive")