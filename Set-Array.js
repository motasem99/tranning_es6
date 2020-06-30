/*
    Set: New Set (Iterable)

    Set methods 
*/

// let myBook = new Set([1, 2, 3, 3]);

// let myArray = [1, 2, 3, 3];

// console.log(myBook);

// console.log(myArray);

//------------------------------------
// let x = 'mutasem';

// for (let i = 0; i < x.length; i++) {
//   console.log(x[i]);
// }

//----------------------------------------------------------------------------------------------------

// let myArray = [1, 2, 3, 3, 4, 4, 4];

// let myBook = new Set(myArray);

// console.log(myBook);

// console.log(...myBook);

//******************************************************************************************

// let myBooks = new Set().add('one').add('two').add('three'); هي حالة

// let myBooks = new Set(); // وهي حالة

// myBooks.add('one');
// myBooks.add('two');
// myBooks.add('three');

// console.log(myBooks);

let myBooks = new Set('mutasem');

myBooks.add('mutasem');

myBooks.delete('s');

myBooks.clear();

console.log(myBooks);

console.log(myBooks.has('Mutasem'.toLowerCase()));

console.log(myBooks.size);
