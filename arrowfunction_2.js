/*
    arrow function
*/

// let test = function () {
//   document.getElementById('show').innerHTML = this;
// };

// // window object called the function

// window.onload = test;

// // button object called the function

// document.getElementById('button').addEventListener('click', test);

// --------------------------------------

function person() {
  this.age = 0;

  setInterval(() => {
    this.age++;

    console.log(this.age);
  }, 1000);
}
let user = new person();
