const address = ["101 Canal Street", "Salem", "MA", "01970"];
// const address = [];
// const [, , state = "Kansas"] = address;

// ordered list of variable names
// not matching up by name but by position
// can have empty name
const [, city, state] = address;
// const [street, city, state, zip] = address;
// console.log(`You are in ${state}.`);
console.log(`You are in ${city} ${state}`);

// coffee shop items
//
const item = ["Coffee (iced)", "$2.75", "3.50", "$4.25"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);

// log a medum coffee costs

// Object Destructuring
// const person = {
//   name: "Jonathan",
//   age: 31,
//   location: {
//     city: "Salem",
//     temp: 69,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;

// if (temperature && city) {
//   console.log(`It's ${temperature} in ${city}.`);
//   console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// }

// const book = {
//   title: "Thinking Fast and Slow",
//   author: "Not Ryan Holiday",
//   publisher: {
//     name: "Not Penguin maybe",
//   },
// };

// console logs
// publisherName renaming
//  default value -- 'Self-Published'
// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);
