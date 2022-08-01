// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 5;
if (x == 3) console.log("d");
console.log();
console.log();
console.log();
console.log(parseFloat);
console.log("pasindu");
console.log(x);
console.log("live-server test");
console.log("pasindu");
console.log(x + 3);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let sentence = "";
  for (let i = 0; i < arr.length; i++) {
    sentence = sentence + `...${arr[i]}C in ${i + 1} days`;
  }
  const lastsentence = sentence + `...`;
  console.log(lastsentence);
  return lastsentence;
};

printForecast(data2);
