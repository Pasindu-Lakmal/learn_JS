'use strict';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: { open: 12, close: 22 },
//     fri: { open: 11, close: 23 },
//     sat: { open: 0, close: 24 },
//   },
// };

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const arr = [1, 2, 3, ...[5, 6, 7]];

const [a, b, ...other] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a, b, other);
console.log(arr);

const [p, , r, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(p, r, otherFood);

const { sat, ...weekDays } = { ...restaurant.openingHours };
console.log(sat, weekDays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3, 4, 5, 6);
add(1, 2, 3, 4, 5, 6, 22, 25, 14, 15, 45, 111, 31, 14, 13);
add(15, 15, 20);

const x = [12, 13, 14];
add(...x);

restaurant.orderPizza('carrot', 'beans', 'mushroom');

// short circuiting
console.log('jonas' && 10);
console.log(17 && 20);

// coding challenge #1
console.log('<------------coding challenge #1 START------------------->');
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;

console.log(players2);
console.log('task 1');
// 2.
const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisci'];
console.log(players1Final);

// 5.
// const { team1, x: draw, team2 } = game.odds;

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

const printGoals = function (...players) {};
console.log('<------------coding challenge #1 STOP------------------->');

//LOOPING ARRAY for of loop
console.log('<----LOOPING ARRAY for of loop START---->');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

for (const item of menu.entries()) console.log(`${item[0] + 1}:${item[1]}`);
console.log('*********same thing with destructuring*********');
for (const [index, element] of menu.entries())
  console.log(`${index + 1}:${element}`);

console.log('<----LOOPING ARRAY for of loop STOP---->');

console.log('<----LOOPING object for of loop START---->');

const properties = Object.keys(openingHours);
console.log(properties);
console.log(properties.length);
let openStr = `we are open ${properties.length} : `;

console.log(openStr);

for (const day of Object.keys(openingHours)) {
  console.log(day);
  openStr += `${day}, `;
}

console.log(openStr);

// Entire object

const entire = Object.entries(openingHours);

for (const [key, { open, close }] of entire) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
console.log(entire);

console.log('<----LOOPING object for of loop STOP---->');

// coding challenge #2
console.log('<------------coding challenge #2 START------------------->');

// 1.
for (const [number, playerName] of game.scored.entries()) {
  console.log(`Goal ${number + 1}: ${playerName}`);
}
//2.

let sum = 0;
for (const val of Object.values(game.odds)) {
  sum += val;
}
console.log(sum / Object.values(game.odds).length);

//3.
for (const [name, value] of Object.entries(game.odds)) {
  const temaStr = name === 'x' ? `draw` : `victory ${game[name]}`;
  console.log(`odd of ${temaStr}: ${value}`);
}
console.log('<------------coding challenge #2 STOP------------------->');

console.log('<------------SETS #2 START ------------------->');

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];

const staffSet = new Set(staff);
const staffUnique = [...staffSet];
console.log(staffUnique);
console.log(new Set('Pasindu').size);
console.log('<------------SETS #2 STOP------------------->');

console.log('<------------map #2 START ------------------->');

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); //calling set method return the updated map

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

console.log(rest.get(1));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get(2));

const time = 24;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has());
rest.delete(2);
console.log(rest);

console.log(rest.has('categories'));
console.log(rest.delete(1));
console.log(rest);

/*when we use a array as key we can use this 
 but wen we call it using get it shows undifine
reason for that is in heap calling array and key
array is not the same thre for we have to use
another method for that*/
console.log(rest.set([1, 2], 'test'));
console.log(rest.get([1, 2]));

//we can use this for soluthion

const arr1 = [3, 4];
console.log(rest.set(arr1, 'test'));

console.log(rest.get(arr1));

rest.set(document.querySelector('h1'), 'Headding');
console.log(rest);
console.log('<------------map #2 STOP-------------------> ');
console.log('<------------map itaration START ------------------->');

const question = new Map([
  ['question', 'what is the best programing language in the world?'],
  [1, 'C'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);
//convert object to map
console.log(Object.entries(openingHours));

const hourseMap = new Map(Object.entries(openingHours));
console.log(hourseMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(answer === question.get('correct')));

// convert map to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

console.log('<------------map itaration STOP-------------------> ');

console.log('<------------coding challenge #3 START------------------->');
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);
console.log(
  `An event happened, on average ,every ${90 / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  console.log(
    `${key < 45 ? '[FIRST HALF] ' : '[SECOND HALF]'} ${key}:${value}`
  );

  // if (key < 45) {
  //   console.log(`[FIRST HALF] ${key}:${value}`);
  // } else {
  //   console.log(`[SECOND HALF] ${key}:${value}`);
  // }
}
console.log('<------------coding challenge #3 STOP------------------->');

console.log('<------------String part 1 START------------------->');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B373'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle
  const s = seat.slice(-1);
  if (s === 'E' || s === 'B') {
    console.log('You got the middle seat 😁');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));

console.log('<------------String part 1 STOP------------------->');

console.log('<------------String part 2 START------------------->');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix passenger name

const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//Fix passenger name function

const fixName = function (name) {
  const lowerCaseName = name.toLowerCase();
  const correctName = name[0].toUpperCase() + lowerCaseName.slice(1);
  console.log(correctName);
};

fixName('pasInDu');
fixName('anUthThaRa');

//comparing email

const checkLoggingMail = function (mail, loggingMail) {
  const nomarlizeMail = mail.toLowerCase().trim();
  console.log(nomarlizeMail);
  console.log(mail === nomarlizeMail);
};
const email = 'pasindu1lak@gmail.com';

checkLoggingMail('pasindu1lak@gmail.com', '   PasIndu1Lak@Gmail.Com \n');

//replacing
const priceEurope = '266,97£';
const priceUS = priceEurope.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passenger come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));

console.log(announcement.replaceAll('door', 'gate'));

//use regular expression
console.log(announcement.replace(/door/g, 'gate'));

console.log('<------------String part 2 STOP------------------->');

console.log('<------------String part 3 START------------------->');

//split and join
console.log('a+very+nice+string'.split('+'));
console.log('Pasindu lakmal'.split(' '));

const [firstName, lastName] = 'Pasindu Lakmal'.split(' ');

console.log(typeof lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const capitalizeName = function (name) {
  const names = name.toLowerCase().split(' ');
  const correctName = [];
  for (const parts of names) {
    //work with this buth othher wy is more better than this
    // correctName.push(parts[0].toUpperCase() + parts.slice(1));

    //replacing
    correctName.push(parts.replace(parts[0], parts[0].toUpperCase()));
  }
  const finalCorrectName = correctName.join(' ');
  console.log(finalCorrectName);
};

capitalizeName('jessica ann smith davis');
capitalizeName('pasindu lakMal');
capitalizeName('anuththara hErath');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('pasindu'.padStart(25, '*').padEnd(35, '*'));

const cardMasking = function (cardNumber) {
  const str = cardNumber + ''; // just convert number to string
  const maskNumber = str.slice(-4).padStart(str.length, '*');
  return maskNumber;
};
console.log(cardMasking('65438768'));
console.log(cardMasking(4943879570875816));
console.log(cardMasking('82635623568798763586287'));

// reapeat

const messageTwo = 'Bad Weather.... or Deartues Delayed....';

console.log(messageTwo.repeat(5));

const planeInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planeInline(5);
planeInline(10);

console.log('<------------String part 3 STOP------------------->');

console.log('<------------coding challenge #4 START------------------->');
// underscore_case
//   first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const variableName = text.split('\n');
  // console.log(variableName);

  const variableArray = [];
  for (const [index, names] of variableName.entries()) {
    const lowerCaseName = names.toLowerCase().trim();
    const [first, last] = lowerCaseName.split('_');
    // console.log(first, last);
    const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(index + 1)}`);
  }
});

console.log('<------------coding challenge #4 STOP------------------->');

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.startsWith('_Delayed') ? '🛑' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;
  console.log(output.trim().padStart(39, ' '));
}
