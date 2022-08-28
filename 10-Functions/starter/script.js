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
