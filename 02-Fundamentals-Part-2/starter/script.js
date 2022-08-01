"use strict";

/*let hasDriversLicens =false;
const passTest = true;

if(passTest )hasDriversLicens =true;

console.log(hasDriversLicens);
console.log(hasDriversLicens);*/
// const hello = () => "HelloWorld";

// const hui = function (){
//     console.log("Funtion Expression");
// }

// hui();
// console.log(hello());

// const age =(birthYear) => 2022 - birthYear;

// console.log(age(1998));

// console.log("codding challenge 1");

// const calcAverage = (scoreOne,scoreTwo,scoreThree) => (scoreOne+scoreTwo+scoreThree)/3;

// // data 1
// // const dolphinsAverage = calcAverage(44,23,71);
// // const koalasAverage = calcAverage(65,54,49);

// // data 2
// const dolphinsAverage = calcAverage(85,54,41);
// const koalasAverage = calcAverage(23,34,27);

// const checkWinner = function (avgDolhins , avgKoalas){
//     if(avgDolhins>=2*avgKoalas){
//         console.log("Dolhins win");
//     }else if (avgKoalas>=2*avgDolhins){
//         console.log("Koalas win");
//     }else{
//         console.log("no teams win");
//     }

// }
// checkWinner(dolphinsAverage,koalasAverage);

// var countOfRooms = 15;
// // Your code here

// for(var x=1; x<=countOfRooms; x++){
//     if(x==13){
//         continue;
//     }
// console.log(x + "\n");

// }

// console.log("coding challane #2");

// const calcTip = function (bill){
//     const tip = (bill>=50 && bill<=300) ? bill*0.15 : bill*0.2;
//     return tip;
// }

// const bills = [125,555,44];

// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

// console.log(tips);

// const total= [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(total);

// // const jonas ={
// //     firstName: "jonas",
// //     secondName: "Shement",
// //     age:2022-1991,
// //     friends: ['Micle','rose','lose']
// // };
// // console.log(jonas);
// // console.log(`${jonas['firstName']} has ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}  `);
// // console.log(jonas.firstName);

// const jonas ={
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birrthYeah: 1991,
//     job: "teacher",
//     friends: ['Michael', 'Peter','Steven'],
//     hasDriversLicense: false,

//     calcAge: function(){
//         this.age = 2022 - this.birrthYeah;
//         return this.age;
//     },

//     getSummery: function(){

//        this.summery = `${this.firstName} is a ${this.calcAge()}-year ${this.job}, and he has ${this.hasDriversLicense ? "a":"no"} driver's license`;
//     }

// };
// console.log(jonas.calcAge());
// console.log(jonas.age);
// jonas.getSummery();
// console.log(jonas.summery);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullName: "John Smith",

  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(
  `${mark.calcBMI() < john.calcBMI() ? john.fullName : mark.fullName}'s BMI (${
    mark.calcBMI() < john.calcBMI() ? john.BMI : mark.BMI
  } ) is higher than ${
    mark.calcBMI() > john.calcBMI() ? john.fullName : mark.fullName
  }'s(${mark.calcBMI() > john.calcBMI() ? john.BMI : mark.BMI} )`
);

console.log("Coding challege #4");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills);

const tips = [];
const totals = [];

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let tot = 0;
  for (let i = 0; i < arr.length; i++) {
    tot += arr[i];
  }
  return tot / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips));
