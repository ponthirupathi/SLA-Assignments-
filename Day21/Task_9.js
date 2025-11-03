//Combine two arrays using concat() or spread syntax [...a, ...b].

let arr1 = ['pon', 'sasi', 'naresh'];
let arr2 = ['karnan', 'kalai'];

let combined = arr1.concat(arr2);

console.log("Using concat() method to combined",combined);

{
let arr1 = ['pon', 'sasi', 'naresh'];
let arr2 = ['karnan', 'kalai'];

let combined = [...arr1,...arr2];

console.log("Syntax of combined",combined);

}
