'use strict';
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 880 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
};

createBooking('LH100', 2);
createBooking('LK100');
createBooking('LK100', undefined, 780);

const oneWord = str => {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = str => {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

//High order function

const transformer = (str, fn) => {
  console.log(`transformed by: ${fn.name}`);
  console.log(`original str: ${str}`);
  console.log(`transformed str : ${fn(str)}`);
};

transformer('Pasindu lakmal JavaScripit', oneWord);
transformer('Pasindu lakmal JavaScripit', upperFirstWord);

//js uses callbacks all the time

const high5 = () => {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['pasindu', 'lakmal', 'mayakduwa'].forEach(high5);

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('hi')('pasindu');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`,
      name,
    });
  },
};

lufthansa.book(345, 'pasindu lakmal');
console.log(lufthansa.bookings);

lufthansa.book(545, 'pasindu');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// does not work  because this key word does not point
// book(234, 'kavindu');

//call method
//now this keyword point to eurowings object
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 230, 'saman kumara');
console.log(lufthansa);

//apply methods

const flightData = [583, 'George cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

//bind methods
const bookEW = book.bind(eurowings);

bookEW(777, 'kamala hasan');
console.log(eurowings);

const bookEW888 = book.bind(eurowings, 888);
bookEW888('paman lunara');
console.log(eurowings);

// bind with Event listner
lufthansa.planes = 300;

const buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT =(value)=>value+value*0.23;

console.log(addVAT(200));

const tax = (rate = 0.23, value) => value + value * rate;

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    //Register answer
  },
};

poll.registerNewAnswer();
