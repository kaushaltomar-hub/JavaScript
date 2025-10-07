const marvel_heros = [ "thor", " Ironman" , "spiderman"]
const dc_heros = ["Superman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allhero = marvel_heros.concat(dc_heros)
console.log(allhero);

const all_new_heros = [...marvel_heros,...dc_heros] //spread
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Kaushal")); 
console.log(Array.from("Virat"));
console.log(Array.from({name:"Abhishek"})); // Interesting case for interview 

let score = 100
let score1 = 10
let score2 = 1000

console.log(Array.of(score,score1,score2));
