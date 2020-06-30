/*
    Template Literals [Template String]

*/

// const theKine = 'male';

// let oldWay =
//   'hello its me ' +
//   (theKine === 'male' ? 'Mr ' : 'Mrs ') +
//   'mutasem \n' +
//   'iam ' +
//   theKine +
//   ' \n' +
//   'iam from gaza \n' +
//   'and i love js';

// let newWay = `hello its me ${theKine === 'male' ? 'Mr' : 'Mrs'} mutasem
// iam ${theKine}
// iam from gaza
// and i love jsّ`;

// console.log(oldWay);

// console.log(newWay);

//----------------------------------------------------------
let userName = 'Mutasem',
  age = 21;

const myHtmlMarkup = `
    <div class="card">
    <h2 class="name">${userName}</h2>
    <span class="age">${age}</span>
    </div>

`;

// console.log(myHtmlMarkup);

document.body.innerHTML = myHtmlMarkup;
