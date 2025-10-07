const user = {
   username: "Hitesh",
   price:999,

   welcomeMessage: function() {
    console.log(`${this.username} , welcome to website`);
    //console.log(this);
    
   }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
console.log(this);

// function chai(){
//     let username = "kaushal"
//     console.log(this.username); // cannot used in function but can be in obj
    
// }
// chai()
const chai=() => {     // arrow func.
    let username = "kaushal"
    console.log(this); 
} 
chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => (num1+num2) //Implicit return type 

const addTwo =( num1,num2) => ({username: "Virat"})

console.log(addTwo(3,4));

// const myArr = [2,34,5,2,]

// myArr.forEach()