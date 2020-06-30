/*
    let , const

    var
    - Function scope
    - Can be ReDeclare 
    - Undefined When Accessing a Variable before it is declare
    - Create Properties in the window object

    let
    - Block scope
    - Cannot be ReDeclare
    - ReferenceError When Accessing a Variable before it is declare
    - Does not Create Properties in the window object

    const
    - Block scope
    - Cannot be ReDeclare
    - ReferenceError When Accessing a Variable before it is declare
    - Does not Create Properties in the window object

*/

// function varTest() {
//   var x = 1;
//   if (true) {
//     var x = 2;
//     console.log(x);
//   }
//   console.log(x);
//   return "done";
// }
// console.log(varTest());
//------------------------------------------
// function letTest() {
//   let x = 1;
//   if (true) {
//     let x = 2;
//     console.log('inside if condition ' + x);
//   }
//   console.log(x);
//   return 'done';
// }
// console.log(letTest());
//------------------------------------------
// var mutasem = 1;
// let moh = 2;
// console.log(this.mutasem);
// console.log(this.moh);

// console.log(this);
//-----------------------------------------

// const SETTINGS = 1;
// if (true) {
//   const SETTINGS = 2;
//   console.log(SETTINGS);
// }
// console.log(SETTINGS);
//----------------------------------------

// const SETTINGS = [];

// SETTINGS.push('html', 'css', 'js');
// console.log(SETTINGS);
//-------------------------------------------

// const SETTINGS = {
//   name: 'mutasem',
//   age: 21,
// };
// SETTINGS.name = 'ahmed';
// console.log(SETTINGS);
//----------------------------------------------
const SETTINGS = {
  name: 'mutasem',
  age: 21,
};
Object.freeze(SETTINGS);
SETTINGS.name = 'ahmed';
console.log(SETTINGS);
