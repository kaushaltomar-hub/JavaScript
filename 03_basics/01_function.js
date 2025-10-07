 function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("T");
 }
 // sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//function calcuCartPrice(...num1){      //  rest as well spread operator 
function calcuCartPrice(val1,val2,...num1){      //  rest as well spread operator 
          return num1
}

console.log(calcuCartPrice(200,400,500,1000))

const user = {
   username: "Virat",
   price: 199
}

function handleObject(anyObject){
   console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
   
}
//handleObject(user)
handleObject({
   username: "Sam",
   price: 299
})

const myNewArr = [200,300,400,600]
function returnSecondValue(getArray){
   return getArray[1]
}

//console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([200,100,200]))  /// can also be done by this method