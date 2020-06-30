/*
    Generators Part 4 

    Delegating Generators
*/

function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateNames() {
  yield 'mutasem';
  yield 'imad';
  yield 'ahmed';
}

function* generateAll() {
  yield* generateNumbers();
  yield* generateNames();
}

let genAll = generateAll();

console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
console.log(genAll.next());
