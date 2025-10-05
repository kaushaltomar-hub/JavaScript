//primitive 

// 77 types : String,number,boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 235146134543514n

//Reference (Non-Primitive)

//Array, Object, Function

const heros = ["shaktiman", " doga"]
let myObj = {
    name: "Kaushal",
    age:19

}
const myFunction = function(){
    console.log("Hello world");
    
}
console.log(typeof myFunction);
console.log(typeof heros);
 
// ++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myyoutubename = "kaushaltomar"

let anothername = myyoutubename
anothername = "chaiaurcode"

console.log(myyoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
