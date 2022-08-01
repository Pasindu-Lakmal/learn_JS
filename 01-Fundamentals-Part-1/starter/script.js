// let js = "amazing";
// // if (js === "amazing") alert("JavaScript is FUN!");
// 48+50/30*45-34;
// console.log(48+50/30*45-34);

// let firstName="bob";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let PI = 3.145;
//  console.log(PI);
 
//  console.log("..........................................");
 
//  console.log(typeof PI);
//  console.log(typeof 23);
//  console.log(typeof firstName);
//  console.log(typeof "pasindu");
 
//  console.log("..................dynamic type........................");

//  let variableStatus = true;
//  console.log(typeof variableStatus);
 
//  variableStatus = 23;
//  console.log(typeof variableStatus);
 
 
//  let undifineVariable;
// console.log(undifineVariable);
// console.log(typeof undifineVariable);

// console.log(".................NULL bug......................");

// console.log(typeof null);



// console.log("Coding challenge 1");

// const weightsOfMark = 78;
// const hegithsOfMark = 1.69;

// const weightsOfJonas = 92;
// const hegithsOfJonas = 1.95;

// const BMIOfMark= weightsOfMark/(hegithsOfMark**2);
// const BMIOfJonas= weightsOfJonas/(hegithsOfJonas**2);


// const a = "pasindu";
// console.log(a);



// // string literals
// console.log("string literals very important part");
// const firstName = "pasindu";
// const lastName = "lakmal";
// const year = 2022;
// const birthYear  =1998;

// const details = "I'm "+ firstName+ " " +  lastName +" my age is " + (year-birthYear);
// console.log(details);

// const detailsLiterals = `I'm ${firstName} ${lastName} my age is ${year - birthYear}`;
// console.log(detailsLiterals);

// console.log(`Backtiks can use any reguler string`);

// console.log('multiple \n\
// lines \n\
// using \n\
// genaral method');

// console.log(`multiple 
// line 
// using 
// backtiks`);

// console.log("END of string literals very important part \n\n\n");

// console.log("START if else statement");

// const age = 14;
// const isAgeEnough = age >=18;

// if(isAgeEnough){
//     console.log("Sara can get  licence 🚗");
// }else{
//     const yearLeft = 18 - age;
//     console.log(`Sara have to  wait ${yearLeft} year to  get her licence`);
// }


//coding challenge #3

console.log("coding challenge #3");
//data 1

// const dolphinsAvarage = (96+108+89)/3;
// const koalasAvarage = (88+91+110)/3;
// console.log(dolphinsAvarage,koalasAvarage);

// if(dolphinsAvarage>koalasAvarage){
//     console.log("Dolpins win");
// }else if(dolphinsAvarage<koalasAvarage){
//     console.log("Koalas win");
// }
// else if(dolphinsAvarage===koalasAvarage){
//     console.log("Match Draw");
// }

//bouns one

// dataBonus 1

// const dolphinsAvarage = (97+112+101)/3;
// const koalasAvarage = (109+95+123)/3;
// console.log(dolphinsAvarage,koalasAvarage);

// if((dolphinsAvarage>koalasAvarage) && dolphinsAvarage>=100){
//     console.log("Dolpins win");
// }else if((dolphinsAvarage<koalasAvarage) && koalasAvarage>=100){
//     console.log("Koalas win");
// }else if(dolphinsAvarage===koalasAvarage){
//     console.log("Match Draw");
// }


//bonus two 
// dataBonus 2

// const dolphinsAvarage = (97+112+101)/3;
// const koalasAvarage = (109+95+106)/3;
// console.log(dolphinsAvarage,koalasAvarage);

// if((dolphinsAvarage>koalasAvarage) && dolphinsAvarage>=100){
//     console.log("Dolpins win");
// }else if((dolphinsAvarage<koalasAvarage) && koalasAvarag>=100){
//     console.log("Koalas win");
// }else if(dolphinsAvarage===koalasAvarage && dolphinsAvarage>=100 && koalasAvarag>=100){
//     console.log("Match Draw");
// }else{
//     console.log("no one wins the tropy");
// }

console.log("coding challenge #4");

const bill = 430;
const tip = (bill>=50 && bill<=300) ? bill*0.15 : bill*0.2;

console.log(tip);

console.log(`The bill was ${bill}, the tip was ${tip}, and the totsl value ${bill +tip} `);