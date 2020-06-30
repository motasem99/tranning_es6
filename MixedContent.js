/*
    Destructuring 
    - Object 
    - Array
    - Parameter

*/

// const user = {
//   userName: 'mutasem',
//   city: 'gaza',
//   skills: {
//     html: '80%',
//     css: '70% ',
//     js: ['VueJs', 'ReactJs', 'AngularJs'],
//   },
// };

// const {
//   userName,
//   city,
//   skills: {
//     html,
//     css,
//     js: [vjs, rjs, ajs],
//   },
// } = user;

// console.log(`my name is ${userName}, and i live in ${city}`);

// console.log(`my html skills progress is ${html}, and css is ${css}`);

// console.log(`i have knowledge in Js frameworks like ${vjs}, ${rjs}, ${ajs}`);

//-----------------------------------------------------------------------------------------

// const user = {
//   userName: 'mutasem',
//   city: 'gaza',
//   skills: {
//     html: '80%',
//     css: '70% ',
//     js: ['VueJs', 'ReactJs', 'AngularJs'],
//   },
// };

// // const {
// //   userName,
// //   city,
// //   skills: {
// //     html,
// //     css,
// //     js: [vjs, rjs, ajs],
// //   },
// // } = user;

// function ShowMyInfo(user) {
//   console.log(`my name is ${user.userName}, and i live in ${user.city}`);

//   console.log(
//     `my html skills progress is ${user.skills.html}, and css is ${user.skills.css}`
//   );

//   console.log(
//     `i have knowledge in Js frameworks like ${user.skills.js[0]}, ${user.skills.js[1]}, ${user.skills.js[2]}`
//   );
// }

// ShowMyInfo(user);
///--------------------------------------------------------------------------

const user = {
  userName: 'mutasem',
  city: 'gaza',
  skills: {
    html: '80%',
    css: '70% ',
    js: ['VueJs', 'ReactJs', 'AngularJs'],
  },
};

// const {
//   userName,
//   city,
//   skills: {
//     html,
//     css,
//     js: [vjs, rjs, ajs],
//   },
// } = user;

function ShowMyInfo({
  userName,
  city,
  skills: {
    html,
    css,
    js: [vjs, rjs, ajs],
  },
}) {
  console.log(`my name is ${userName}, and i live in ${city}`);

  console.log(`my html skills progress is ${html}, and css is ${css}`);

  console.log(`i have knowledge in Js frameworks like ${vjs}, ${rjs}, ${ajs}`);
}

ShowMyInfo(user);
