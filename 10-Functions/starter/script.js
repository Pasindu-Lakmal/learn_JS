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
