/*
    Symbol

*/

// const mySymbol = Symbol();

// console.log(typeof mySymbol);

// const mySymbolOne = Symbol('testing');

// const mySymbolTwo = Symbol('testing');

// console.log(mySymbolOne === mySymbolTwo);

//-----------------------------------------

// const myNewSymbol = Symbol();

// const myObject = {
//   username: 'mutasem',
//   website: 'elzero',
//   [myNewSymbol]: 'this is hidden iteration',
// };

// console.log(myObject);

// for (let val of Object.entries(myObject)) {
//   console.log(val);
// }

// console.log(Object.getOwnPropertyNames(myObject));

// console.log(Object.keys(myObject));

// console.log(Object.getOwnPropertySymbols(myObject));

// console.log(JSON.stringify(myObject));

//*************************************************************************************************

// const mySymbolOne = Symbol.for('one');

// const mySymbolTwo = Symbol.for('two');

// console.log(mySymbolOne === mySymbolTwo);

// console.log(Symbol.keyFor(mySymbolTwo));

const mySymbolOne = Symbol('one');

// alert(mySymbolOne.toString());
console.log(mySymbolOne.description);
