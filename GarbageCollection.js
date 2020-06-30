/*
    Set vs WeakSet And Garbage Collection

    -- Set 
    - contain any type of value 
    - get element count with .size
    - foreach available to iterate
    - you can get its key 

    -- WeakSet
    - contain only object 
    - you cant use size to get element count
    - foreach not available to iterate
    - you cant get its key 
    */

// let mainObject = { a: 1 };

// let mySet = new Set([mainObject]);

// let objectOne = { B: 2 };

// let objectTwo = { c: 3 };

// mySet.add(objectOne);
// mySet.add(objectTwo);

// console.log(mySet);

// console.log(mySet.has(objectOne));

// console.log(mySet.has(objectTwo));

// console.log(mySet.size);

// console.log(mySet.keys());

// mySet.delete(objectOne);

// console.log(mySet.has(objectOne));

// objectTwo = null;
// console.log(mySet.has(objectTwo));

// console.log(mySet);

// mySet.add('string');

// mySet.add(12);

// console.log(mySet);

// mySet.forEach((v) => {
//   console.log(v);
// });

//---------------------------------------------------------------------------------------------------------

let mainObject = { a: 1 };

let myWeakSet = new WeakSet([mainObject]);

let objectOne = { B: 2 };

let objectTwo = { c: 3 };

myWeakSet.add(objectOne);
myWeakSet.add(objectTwo);

console.log(myWeakSet);

console.log(myWeakSet.has(objectOne));

console.log(myWeakSet.has(objectTwo));

// console.log(myWeakSet.size);
// console.log(myWeakSet.keys());

myWeakSet.delete(objectOne);
console.log(myWeakSet.has(objectOne));

objectTwo = null;
console.log(myWeakSet.has(objectTwo));

console.log(myWeakSet);

// myWeakSet.add('string');
// myWeakSet.add(12);

// myWeakSet.forEach((v) => {
//   console.log(v);
// });
