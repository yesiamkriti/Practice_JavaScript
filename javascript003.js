// chapter3
for (let i = 0; i < 5; i++)
  console.log(i)
// to add first n natural number
let sum = 0
let n = prompt("Enter the value of n:")
n = Number.parseInt(n)
for (let j = 0; j < n; j++) {
  sum += (j + 1)
  console.log((j + 1), "+")
}
console.log("sum of first " + n + " natural numbers is" + sum)
// questions for practice
// write a sample for loop of your choice 

// for in loop
let obj = {
  basanti: 90,
  chlita: 20,
  bhakti: 86,
  nageshrwar: 52
}
for (let i in obj) {
  console.log("marks of students " + i + " are " + obj[i])
}
// for off loop
for (let b of "basanti") {
  console.log(b)
}