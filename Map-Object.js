/*
    Map
*/

var user = {};

user['username'] = 'mutasem';
user.website = 'elzero.org';
user['10'] = 'string';
user[10] = 'number';

console.log(user);
console.log(user.username);
console.log(user['website']);

let myMap = new Map([
  ['10', 'String'],
  [10, 'number'],
  [false, 'boolean'],
  [{ a: 1, b: 2 }, 'object'],
  [function doSomething() {}, 'function'],
]);

// myMap.set('10', 'String');
// myMap.set(10, 'number');
// myMap.set(false, 'boolean');
// myMap.set({ a: 1, b: 2 }, 'object');
// myMap.set(function doSomething() {}, 'function');

console.log(myMap);

console.log(`my map element count is: ${myMap.size}`);

console.log(`using get method: ${myMap.get('10')}`);

console.log(`using get method: ${myMap.get(10)}`);

console.log(`using has method: ${myMap.has(false)}`);

console.log(`using delete method: ${myMap.delete(false)}`);

console.log(`my map element count is: ${myMap.size}`);

myMap.clear();

console.log(`my map element count is: ${myMap.size}`);
