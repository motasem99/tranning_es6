/*
    Spread Operator ...

*/

// let arrayOne = [1, 2, 3],
//   arrayTwo = [4, 5];

// console.log(arrayOne.concat(arrayTwo));

// let allArrays = [...arrayOne, ...arrayTwo];

// console.log(allArrays);

// function sum(x, y, z) {
//   return x + y + z;
// }

// const myNumbers = [2, 4, 6];

// console.log(myNumbers);

// console.log(...myNumbers);

// console.log(sum(...myNumbers));

//------------------------------------------

// let arrayOne = [1, 2, 3],
//   arrayTwo = [4, 5],
//   customArray = [1, 2, 3, ...arrayTwo, 6, 7];

// console.log(customArray);

//-----------------------------------------------

// let arrayOne = [1, 2, 3],
//   arrayTwo = [...arrayOne];

// arrayTwo.push(4);

// console.log(arrayOne);

// console.log(arrayTwo);

//---------------------------------------------------

let arrayOne = [1, 2, 3, 100, 500, -20, -10, 542];

console.log(Math.min(...arrayOne));
