/*
    Destructuring
    - object  
    - array 
    -parameter
*/
// const user = {
//   name: 'mutasem',
//   gender: 'male',
//   age: 21,
//   city: 'gaza',
//   website: 'elzer',
//   theme: 'red',
// };

// const {
//   name: theName,
//   gender: theGender,
//   age: theAge,
//   theme: theTheme = 'default',
// } = user;

// console.log(
//   `iam ${theName} iam ${theGender} my age is:${theAge} and my theme color is ${theTheme}`
// );

//-------------------------------------------------------------------------------

// const user = {
//   name: 'mutasem',
//   gender: 'male',
//   age: 21,
//   city: 'gaza',
//   website: 'elzer',
//   theme: 'red',
//   langs: {
//     html: '80%',
//     css: '90%',
//     js: '20%',
//   },
// };

// const {
//   name,
//   gender,
//   langs: { html, css },
// } = user;

// console.log(`iam ${name} iam ${gender} my html progress is ${html}`);

//-------------------------------------------------------------------------------

const user = {
  name: 'mutasem',
  gender: 'male',
  age: 21,
  city: 'gaza',
  website: 'elzer',
  theme: 'red',
  langs: {
    html: '80%',
    css: '90%',
    js: '20%',
  },
};

const { html, css, js } = user.langs;

console.log(`${html} ${css} ${js}`);
