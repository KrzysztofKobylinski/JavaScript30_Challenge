// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Krzysiek';
let name2 = name;
console.log(name, name2);
name = 'Leszek';
console.log(name, name2);


//ARRAY
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';
console.log(players);

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// const team2 = players.slice();

// or create a new array and concat the old one in
// const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'heeee hawww';
console.log(team4);

//Array from method
const team5 = Array.from(players);
console.log(team5);
// now when we update it, the original one isn't changed


//OBJECTS
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;


// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

// We will hopefully soon see the object ...spread
// const cap3 = {...person};
//Jeszcze nie wprowadzone

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const krzys = {
    name: 'Krzychu',
    age: 20,
    social: {
        twitter: '@twiii',
        facebook: 'fb.login'
    }
};

console.clear();
console.log(krzys);

const dev = Object.assign({}, wes);