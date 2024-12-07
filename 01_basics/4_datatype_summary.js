//++++++++++++++++ Memory
//primitve => stack
//non primitve => heap

//  Primitive
// call by value hota he data ki copy bana ke pass krte he
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
//call by reference hota he 
//reference milta he original value ka

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)

// https://262.ecma-international.org/5.1/#sec-11.4.3

//primitve => stack
//non primitve => heap