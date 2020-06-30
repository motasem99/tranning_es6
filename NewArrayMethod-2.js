/*
    New Array Methods
    array.find()
    array.findIndex()
    array.copyWithin()
 */

// array.find() not retiring all values

let myNumbers1 = [1, 10, 20, 30, 40];
let found1 = myNumbers1.find((el) => el > 10);
console.log(found1);

console.log(`${'#'.repeat(30)}`);

// array.findIndex() not retiring all values

let myNumbers2 = [1, 10, 20, 30, 40];
let found2 = myNumbers2.findIndex((el) => el > 10);
console.log(found2);

console.log(`${'#'.repeat(30)}`);

// array.copyWithin(target , start default 0 ,end default array.length)

// let myLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// myLetters.copyWithin(0, 3, 6);
// console.log(myLetters);

let myLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
myLetters.copyWithin(1, 5, 7);
console.log(myLetters);
