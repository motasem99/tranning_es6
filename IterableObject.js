/*
    Custom Iterable Object

*/

const myObject = {
  name: 'mutasem',
  age: 36,
  country: 'gaza',
  favSkills: 'js',
  [Symbol.iterator]() {
    let step = 0;
    let properties = Object.keys(this);
    // console.log(properties);
    return {
      next() {
        return {
          value: myObject[properties[step]],
          done: step++ === properties.length,
        };
      },
    };
  },
};

for (let prop of myObject) {
  console.log(prop);
}
