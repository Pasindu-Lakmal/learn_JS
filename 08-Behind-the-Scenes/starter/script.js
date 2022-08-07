'use strict';
console.log(this);

const calacAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calacAge(26);

const calacAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calacAgeArrow(26);

const jonas = {
  year: 1991,
  calacAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calacAge();

const matilda = {
  year: 2017,
};

matilda.calacAge = jonas.calacAge;

matilda.calacAge();
