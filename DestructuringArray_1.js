/*
    Destructuring
    - object  
    - array 
    -parameter
*/

const food = ['burger', 'pizza', 'chicken', 'meat', 'rice'];

const [one, , three, four] = food;

console.log(`i love ${one} , ${three} , ${four}`);
