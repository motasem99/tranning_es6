/*
    Rest Parameter ...
*/

// function sum(x, y) {
//   return x + y;
// }

// console.log(sum(2, 7));
//---------------------------------------

// function showInfo(a, b, c, ...myParams) {
//   console.log('param a', a);
//   console.log('param b', b);
//   console.log('param c', c);
//   console.log('param myParams', myParams);

//   return 'console outPur done';
// }

// console.log(showInfo('one', 'two', 'three', 'four', 'five', 'six', 'seven'));

//*---------------------------------------------------------------------

function addAll(...myParams) {
  let myNumber = 0;

  for (let myParam of myParams) {
    myNumber = myNumber + myParam;
  }

  return myNumber;
}

console.log(addAll(1));

console.log(addAll(1, 2, 3));

console.log(addAll(1, 5, 6, 8));
