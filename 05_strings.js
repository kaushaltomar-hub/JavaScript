const name = "Virat Kohli"
const repoCount = 100 
//console.log(name+repoCount+" Value");
console.log(`Hello my name ${name} and my repo count is ${repoCount}`);

const gameName = new String('Virat-Kohli-IN')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)// cannot give -ve value in it
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Kaushal  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaodary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hite'))
console.log(gameName.split('-'));
