const marvelheros= ["thor", "ironman", "spiderman"]
const dc=["superman", "flash", "batman"]
//marvelheros.push(dc);
// console.log(marvelheros);
// console.log(marvelheros[3][1]);

const allheros= marvelheros.concat(dc);
console.log(allheros);

const allnewheros= [...marvelheros, ...dc];
console.log(allnewheros);

const another_array=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("nafisha"));
console.log(Array.from("nafisha"));
console.log(Array.from({name: "nafisha"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3));
