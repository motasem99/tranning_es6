/*
    Map vs WeakMap And Garbage Collection

    -- MAp 
    - contain any type of value 
    - get element count with .size
    - foreach available to iterate
    - you can get its key 

    -- WeakMap
    - contain only object 
    - you cant use size to get element count
    - foreach not available to iterate
    - you cant get its key 
    */

// let myMap = new Map();

// let objectOne = { a: 1 };

// myMap.set(objectOne, 'test');
// myMap.set('b', 2);
// myMap.set('c', 3);
// myMap.set(1, 15);

// console.log(myMap);
// console.log(myMap.get('c'));
// console.log(myMap.get(objectOne));

// console.log(myMap.has('b'));
// myMap.delete('b');
// console.log(myMap.has('b'));

// objectOne = null;
// console.log(myMap.get(objectOne));

// console.log(myMap.size);

//--------------------------------------------------------------------------------------

let myWeakMap = new WeakMap();

let objectOne = { a: 1 };
let objectTwo = { b: 2 };

myWeakMap.set(objectOne, 'test1');
myWeakMap.set(objectTwo, 'test2');

// myWeakMap.set('b', 2);
// myWeakMap.set('c', 3);
// myWeakMap.set(1, 15);

console.log(myWeakMap);
console.log(myWeakMap.get(objectOne));

console.log(myWeakMap.has(objectTwo));
myWeakMap.delete(objectTwo);
console.log(myWeakMap.has(objectTwo));

objectOne = null;
console.log(myWeakMap.get(objectOne));

console.log(myWeakMap);

// console.log(myWeakMap.size);
