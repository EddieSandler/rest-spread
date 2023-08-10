// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }
const filterOutOdds = (...args) => {
  return args.filter((arg) => arg % 2 === 0);

};

// console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8));



const findMin = (...args) => Math.min(...args);

// console.log(findMin(1,4,12,-3)) // -3
// console.log(findMin(1,-1)) // -1
// console.log(findMin(3,1)) // 1

const mergeObjects = (...args) => {
  const combined = { ...args[0], ...args[1] };

  return combined;

};


// console.log(mergeObjects({a:1, b:2}, {c:3, d:4}))

const doubleAndReturnArgs = (arr, ...args) => {
  const newArr = [...arr];
  for (let arg of args) {
    newArr.push(arg * 2);
  }

  return newArr;
};



// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1,2,3,8,8]
// console.log(doubleAndReturnArgs([2], 10, 4)); // [2, 20, 8]



/** remove a random element in the items array
and return a new array without that item. */
const items = [1, 2, 3, 4, 5];

const removeRandom = (items) => {
  const indexToRemove = Math.floor(Math.random() * items.length);
  const startOfNewArray = items.slice(0, indexToRemove);
  const endOfNewArray = items.slice(indexToRemove + 1);
  const newArray = startOfNewArray.concat(endOfNewArray);
  return newArray;

};


removeRandom(items);


/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];


/** Return a new object with all the keys and values
from obj and a new key/value pair */


const addKeyVal = (obj, key, val) => {

  const newObj = { ...obj, [key]: val };
  return newObj;
};

const names = {
  firstName: "Eddie",
  lastName: "Sandler"
};

addKeyVal(names, 'favoriteColor', 'purple');




/** Return a new object with a key removed. */

const removeKey = (obj, key) => { const newObj={...obj}
delete  newObj[key]
return newObj

};


const myStuff = {
  computer: "Dell XPS15",
  mouse: "Microsoft",
  printer: "HP InkJet",
  headphones: "Jabra Elite 45"
};

// console.log(removeKey(myStuff,'printer'))




/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  const combined = { ...obj1, ...obj2 };
  return combined;

};
const personName = {
  firstName: "Eddie",
  lastName: "Sandler"
};
const personData = {
  age: 55,
  home: "Brooklyn, NY"
};

combine(personName, personData);

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  const updatedName = { ...obj, [key]: val };
  return updatedName;

};

update(personName, 'firstName', 'Edward');