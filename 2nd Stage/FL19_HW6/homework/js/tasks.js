/* Task 1 ⦁ 	Create a function which returns max even element in array from array of strings
⦁	Use Math.max(), reduce and other new operators.
*/
const getMaxEvenElement = (...arr) => Math.max.apply(null, arr.filter(el => el % 2 === 0))

console.log(getMaxEvenElement('1', '2', '3', '4', '5', '6', '7', '544', '89'))
/* Task 2⦁	Write a code which swap variables values without a temporary variable
⦁	Please, use destructuring assignment*/
let a = 3;
let b = 5;
[a, b] = [b, a];
console.log(a)
/* Task 3 ⦁	Create a function which simply return value when there is some defined value passed and empty text string ‘-‘ when it is not defined .

⦁	Check ES2020 operators, one of them can help here.
*/
const getValue = (str) => str ?? '-'
console.log(getValue(0))
console.log(getValue(4))
console.log(getValue('text'))
console.log(getValue())
console.log(getValue(undefined))
/* Task 4 ⦁	Create a function which return objects from array of arrays*/
const getObjFromArray = (arrayOfArrays) => Object.fromEntries(arrayOfArrays);
console.log(getObjFromArray([['name', 'dan'], ['age', '18']]))
/* Task 5 ⦁	Create function to enhance element with unique id. Here is how function should be invoked:
⦁	Use Symbol() as a unique identifier
*/
const addUniqueId = (object) => {
  return {...object, id: Symbol()}
}
console.log(addUniqueId({name: '123'}))

/*Task 6 ⦁	Write a function which regroups object properties
⦁	Destruct old object and construct new
*/
const oldObj = {
  name : 'Willow',
  details : {
    id: 1,
    age: 47,
    university: 'LNU'
  }
}
const getRegroupdObject = ({name, details}) => {
  return {
    university: details.university,
    user: {
      age: details.age,
      firstname: name,
      id: details.id
    }
  }
}
console.log(getRegroupdObject(oldObj))

/* Task 7⦁	Create a function which finds unique elements in array
⦁	Use one of the new data types
*/
const getArrayWithUnuquElements = arr => [...new Set(arr)]
console.log(getArrayWithUnuquElements([2,2,3,3,4,4,'a', 'a', 'c']))
/* Task 8⦁	Create a function which masks phone number, leaves only last 4 digits
⦁	Use padStart
*/
const hideNumber = (str) => str.slice(-4).padStart(str.length, '*');
console.log(hideNumber('0123456789'))
/* Task 9 ⦁	Create function which has all parameters always required. If they are not - throw error.
⦁	Use default parameters feature and assign a function to it
*/
function required() {
  throw new Error('b is required');
}
const add = (a, b=required()) => a+b;
console.log(add(2, 3))
//console.log(add(2))

/* Task 10⦁	Use generator function to create an iterable sequence of values: */
function* generateIterableSequense(){
  yield 'I'
  yield 'love'
  yield 'EPAM'
}
const generatorObject = generateIterableSequense();
for(let value of generatorObject){
  console.log(value)
}