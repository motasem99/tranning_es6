/*
    Modules - Part 3 Named Export Vs Default Export
*/

// import { a, b } from './app-3.js';
// import sayHello from './app-3.js';

import sayH, { a, b } from './app-3.js';

console.log(a);
console.log(b);
console.log(sayH);
