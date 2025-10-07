const myArr = [0,1,2,3,4,5,9]
const myHeros = ["Chota Bheem", "Motu-Patlu"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[0])

myArr.push(5)
myArr.push(6)
myArr.push(8)
myArr.pop()

myArr.unshift(8)
console.log(myArr);

console.log(myArr.includes(8));
console.log(myArr.indexOf(8));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);

/// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2 );
console.log(myn1 );


