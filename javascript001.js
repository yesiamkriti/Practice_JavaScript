// chapter1
//  nn ss bb u
// number, null, string, symbol, BigInt,Bollean,undefined
let a = 12254;
let b = null;
let c = "This is a string";
let d = Symbol("This is symbol");
let e = BigInt(4451);
let f = true;
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)

// objects is non primitive
const item = {
  name: "kriti",
  class1: "btech cse"
}
console.log(item)
console.log(item["name"])
console.log(item.name)
//practice of questions
// 1.. create a variable of type string and try to add a number to it 
//2.. use type of operator to find the datatype of the string in last question 
// 3.. create a const object in javascript can you change it to hold a number later ?
// 4.. try to add a new key to the const object in problem 3 were you able to do it ?
// 5.. write a JS program to create a word-meaning dicitionary of 5 words
// solution 1
let a1 = "kriti";
let b1 = 1254
console.log(a1 + b1)

// solution2
console.log(typeof (a1 + b1))

// solution3
const c1 = {
  sunita: 20,
  mangal: 70,
  janki: 50
}
console.log(c1)
// solution4
c1["rohini"] = 10
console.log(c1)

// solution 5
const word = {
  yakka: "hard work",
  container: "something which is used to put something",
  book: "collection of written pages full of knowledge",
  charger: "used to give energy to anybody",
  earing: "type of jewellery"
}
console.log(word)