/*
    Destructuring 

    - Object 
    - Array
    -Parameter
*/

// var book = 'video',
//   video = 'book';

// // copy first variable into stash

// var stash = book;

// // swapping variables

// book = video;

// //get book value from stash
// video = stash;

// console.log(`book is ${book} and video is ${video}`);

//-------------------------------------------------------------

var book = 'video',
  video = 'book';

[book, video] = [video, book];
console.log(`book is ${book} and video is ${video}`);
