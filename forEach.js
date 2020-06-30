/*
    foreach(current value ,index , array)

*/

// const arr = ['a', 'b', 'c', 'd', , 'f'];

// for (let i = 0; i < arr.length; i++) {
//   console.log(`${i} - ${arr[i]}`);
// }
// console.log(`${'#'.repeat(40)}`);

// arr.forEach((el, i) => {
//   console.log(`${i} - ${el}`);
// });

// console.log(`${'#'.repeat(40)}`);

// let callbacks = 0;

// arr.forEach((el, i) => {
//   console.log(`${i} - ${el}`);

//   callbacks++;
// });

// console.log(callbacks);

// console.log(`${'#'.repeat(40)}`);

// function makeTheLoop(element, index) {
//   console.log(`${index} - ${element}`);
// }

// arr.forEach(makeTheLoop);

//****************************************************************************************************
/*
forEach With Set And Map
foreach (currentKey , currentValue , Set)
*/

const mySet = new Set([1, 1, 1, 2, 2, 2, 3, 3, 4, 5]);

mySet.forEach((item1, item2) => {
  console.log(`${item1} - ${item2}`);
});

console.log(`${'#'.repeat(40)}`);

/*
forEach With Set And Map
foreach (value , key , Set)
*/

const myMap = new Map([
  ['a', 1],
  ['c', 3],
  ['d', 2],
  ['x', {}],
]);

myMap.forEach((v, k) => {
  console.log(`${k} - ${v}`);
});

// test git
