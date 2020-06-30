/*
    Destructuring
    - object  
    - array 
    -parameter
*/

// const food = [
//   'burger',
//   'pizza',
//   'chicken',
//   ['mango', 'apple', 'banana', ['EgyOrang', 'pakistanOrang']],
// ];

// const [one, three, four, [fr1, fr2, fr3, [o1, o2]]] = food;

// console.log(
//   `the food i love ${one} , ${three} , ${four} and the fruits i love is ${fr1} ,${fr2} ,${fr3}
//   and ${o1} , ${o2}`
// );

//-------------------------------------------------------------------

const food = ['burger', 'pizza', 'chicken', 'mango', 'apple', 'banana'];

const [one, two, three, ...otherFood] = food;

console.log(`the food i love ${one} , ${two}, ${three},${otherFood}`);
