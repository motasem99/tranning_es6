/*
    New Array Methods

    array.of
    array.from
    array.fill
*/

// array.of(elements to create the array)

let oldArray = Array(100);
console.log(oldArray);
console.log(oldArray.length);

let newArray = Array.of(100);
console.log(newArray);
console.log(newArray.length);

// Array.from(Iterable, MapFun , This)

let myName = 'mutasem';

let ArrayOfLetters = Array.from(myName);

console.log(myName);
console.log(ArrayOfLetters);

let myNumbers = [10, 20, 30, 15, 28, 100, 60];

let numbersMTen = Array.from(myNumbers, (Number) => Number - 10);

console.log(numbersMTen);

// Array.fill(value to fill , start default 0 , end default array.length)

let theNumbers = [1, 10, 30, 70, 90];

// theNumbers.fill(100); // All will be 100
// theNumbers.fill(100, 2); // from 30

theNumbers.fill(100, 1, 3); // will fill 10 & 30

console.log(theNumbers);
