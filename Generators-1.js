/*
    Generators Part 1
    Intro And Whats Generator

*/

function* generateTickets() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let iterator = generateTickets();

console.log(typeof iterator);
console.log(iterator.next().value);

console.log(`${'#'.repeat(40)}`);
console.log(`we will do something before yielding the next ticket`);

console.log(iterator.next().value);

console.log(`${'#'.repeat(40)}`);
console.log(`function stop execution after each yield`);

console.log(iterator.next().value);

console.log(`${'#'.repeat(40)}`);
console.log(`function give you the control to yield `);

console.log(iterator.next().value);

console.log(`${'#'.repeat(40)}`);

let myNumber = [10, 20, 30, 40, 50];

function* generateNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    yield nums[i];
  }
}

let generator = generateNumbers(myNumber);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

console.log(`${'#'.repeat(40)}`);

function* generateNums() {
  yield* [1, 2, 3, 4, 5, 6];
  yield 7;
}

let theGenerator = generateNums();

console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
console.log(theGenerator.next().value);
