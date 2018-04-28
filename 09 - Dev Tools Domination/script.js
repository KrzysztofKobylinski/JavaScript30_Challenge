function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}


// Regular
console.log('Hello');


// Interpolated - %s
console.log('Hello I am a %s string!','different language');


// Styled - %c, style properties
console.log('%c I am some great text', 
  'font-size:50px; background:red; text-shadow: 10px 10px 10px blue');


// Warning
console.warn('WARNING!');


// Error
console.error('ERROR TEST!');


// Info
console.info('Information Information Information'); 
//not working??


// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'ASSERT TEST = FALSE');
//only works if logic test is false


// Clearing
// console.clear();


// Viewing DOM Elements
console.log(p);
console.dir(p);
console.dir(p.textContent);


// Grouping together
const dogs = [
  { 
    name: 'Snickers', 
    age: 2 
  }, 
  { 
    name: 'hugo', 
    age: 8 
  }
];

console.table(dogs);


dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  //tworzenie grup na podstawie nazwy, plus collapsed

  console.log(`To jest ${dog.name}`);
  console.log(`${dog.name} ma ${dog.age} lat`);
  console.log(`${dog.name} ma ${dog.age * 7} psich lat`);

  console.groupEnd(`${dog.name}`);
  //zakonczenie
});


// counting
//ile razy bylo odpalone
console.count('test');
console.count('test');
console.count('check');
console.count('check');
console.count('test');
console.count('check');
console.count('test');
console.count('check');
console.count('check');
console.count('check');
console.count('check');
console.count('check');

// timing
console.time('ukonczono fetchowanie');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('ukonczono fetchowanie');
    console.log(data);
  });

