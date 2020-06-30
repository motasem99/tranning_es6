/*
    Destructuring
    - object  
    - array 
    -parameter
*/

// var user = {
//   name: 'mutasem',
//   gender: 'male',
//   age: 21,
//   city: 'gaza',
//   website: 'elzer',
// };

// var u = user.name,
//   g = user.gender,
//   a = user.age;

// console.log(`iam ${u} iam ${g} my age is:${a}`);

//-------------------------------------------------------------

const user = {
  name: 'mutasem',
  gender: 'male',
  age: 21,
  city: 'gaza',
  website: 'elzer',
  theme: 'red',
};

const { name, gender, age, theme = 'default' } = user;

console.log(
  `iam ${name} iam ${gender} my age is:${age} and my theme color is ${theme}`
);
