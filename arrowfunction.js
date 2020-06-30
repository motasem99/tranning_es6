/*
    Arrow Function

*/

// Regular function with no parameters

let regularTestOne = function () {
  return 2;
};

// Arrow function with no parameter

let arrowTestOne = () => 2;

let arrowTestTwo = (_) => 2;

// Regular function with one parameters

let regularTestTwo = function (param) {
  return param * 2;
};

// Arrow function with one parameter

let arrowTestThree = (param) => 3 * param; // وممكن بدون اقواس اذا كان مدخل واحد

// Regular function with multiple parameters

let regularTestThree = function (param1, param2) {
  return param1 * param2;
};

// Arrow function with multiple parameter

let arrowTestFour = (param1, param2) => param1 * param2;

console.log(arrowTestFour(5, 23));
