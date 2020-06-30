/*
    Symbol Iterator & For Loop

    Iterable => object has symbol.Iterator
    Iterator
    - Object with Interface Designed for Iteration
    - All Iterators has next() method that return result object 
    -- [1] Value => hte next value
    -- [2] Done => Boolean Value to tell If the next value Exists or no 

    For ... of Loop 

    [1] Call Symbol.Iterator with Next Method 
    [2] Save VAlue Inside Variable
    [3] Check For Done Its True => Exit the Loop
*/

let myArray = [1, 2, 3];
let myName = 'mutasem';
let myNumber = 2748343;
let myObject = {};

console.log(typeof myArray[Symbol.iterator]);
console.log(typeof myName[Symbol.iterator]);
console.log(typeof myNumber[Symbol.iterator]);
console.log(typeof myObject[Symbol.iterator]);

let theIterator = myName[Symbol.iterator]();

console.log(theIterator);
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());
console.log(theIterator.next());

for (let char of myName) {
  console.log(char);
}

// for (let num of myNumber) {
//   console.log(num);
// }
for (let arr of myArray) {
  console.log(arr);
}
