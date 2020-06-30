/*
    Generators Part 2

    Functionality And Return

*/

// function orderBook() {
//   window.alert('you clicked on button to order a book');
//   console.log('you clicked on button to order a book');

//   window.alert('you added the book to cart');
//   console.log('you added the book to cart');

//   window.alert('payment is done');
//   console.log('payment is done');
// }

// let ordering = orderBook();

//*************************************************************
// function* orderBook() {
//   window.alert('you clicked on button to order a book');
//   console.log('you clicked on button to order a book');

//   window.alert('you added the book to cart');
//   console.log('you added the book to cart');

//   window.alert('payment is done');
//   console.log('payment is done');
// }

// let ordering = orderBook();

function* mySkills() {
  yield 'html';
  yield 'css';
  yield 'php';
  yield 'python';
  yield 'javascript';
}

let theSkills = mySkills(); // Iterator

for (let skills of theSkills) {
  console.log(skills);
}

for (let s of mySkills()) {
  console.log(s);
}

// Test Return

function* sayName() {
  yield 'mutasem';
  yield 'ahmed';
  return 'khalil';
  yield 'mohammed';
}

let theNames = sayName();

console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());
console.log(theNames.next());
