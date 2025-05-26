// Core Module package

// setTimeout();

// setTimeout(function() {
//     console.log('ishga tushur');
// } , 5000);



// // setInterval
// let number = 0;
// const a = setInterval(function(){
//     console.log('started');
//     number++;


//     if(number >= 5){
//         clearInterval(a);
//         console.log('intervalimiz tohtatildi');
        
//     }
// },1000);


// const fs = require('fs');

// const data = fs.readFileSync('./mit29.txt', 'utf8');
// console.log(data);


// fs.writeFileSync('./mit29.txt',  ` ${data} \n\t\t this is MIT29  `);

 
//  const new_data = fs.readFileSync('./mit29.txt', 'utf8');
// console.log(new_data);

// it is MIT29





// -----------------------------------------------------------

// const chalk = require('chalk');
// // import chalk from "chalk";

// console.log(chalk.red("steve"));



// 

// const {v4:uuidv4 } = require('uuid');

// const random = uuidv4();

// console.log("randomly" ,random);






const validator = require('validator');


// const real = validator.isEmail('abdulboriy@3gmail.com');

// const real = validator.isFloat('fdd');

// const real = validator.isStrongPassword('Sdzf43s!df');

// console.log(real);



// -------------------------------------------

// const moment = require('moment');


// // const data = moment().format("YYYY-MM-DD");
// // const data = moment().format("hh-mm-ss");
// const data = moment().format("MMMM Do YYYY, h:mm:ss a");
// console.log(data);



// --------------------------------------------------------

// inquirer

const inquirer = require('inquirer');
// import inquirer from "inquirer";

inquirer
.prompt([{
    type: "input",
    name: "ism",
    message: "ismingizni kiriting"
}])
.then((javob) => {
    console.log(`sizning ismingiz: ${javob.ism}`);
}).catch((hato) => console.log(hato) );

























// External Module package
// File Module package