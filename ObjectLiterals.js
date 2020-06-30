/*
    Enhanced Object Literals
    1- Property value shorthand
    2- Method shorthand
    3- Computed object property Name 

*/

// const username = 'mutasem',
//   website = 'elzero.org';

// const user = {
//   username: username,
//   website: website,
// };
// console.log(user);
//--------------------------------------------------------------

// const user = {
//   myMethod(param1) {
//     return param1;
//   },
// };
// console.log(user.myMethod('hello from parameter'));

//---------------------------------------------------------------------

// normal variable
const myVariable = 'key';

// create new object
const myObject = { myProperty: 'my value', [myVariable]: 'value' };

// add Dynamic Property and assign value

// myObject[myVariable] = 'value';

console.log(myObject);
