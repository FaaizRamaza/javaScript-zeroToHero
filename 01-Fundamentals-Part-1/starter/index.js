
// Activated strict mode

// 'use strict'

// let hasDriversLicense = 'false';
// const passTest = true

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');



// Function Declaration -------------------------------------------------------------------------------

// function logSomething() {
//     console.log('My name is Fais')
// }

// logSomething()

// ------------------------------------

// function fruitProcesscor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

// const appleJuice = fruitProcesscor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcesscor(3, 2) 
// console.log(appleOrangeJuice)



// Function Declaration Vs Expression -------------------------------------------------------------------------------

// Function Declaration
// function calcAge1(birthYeah) {
//     return 2030 - birthYeah
// }

// const age1 = calcAge1(1998)

// // Function Expression 
// const calcAge2 = function(birthYeah) {
//     return 2030 - birthYeah;
// }

// const age2 = calcAge2(1998)

// console.log(age1, age2)



// Arrow Function -------------------------------------------------------------------------------

// const calcAge3 = birthYeah => { return 2030 - birthYeah }
// const age3 = calcAge3(1998)

// console.log(age3)

// ------------------------------------

// const yearUntilRetirement = (birthYeah, firstName) => {
//     const age = 2023 - birthYeah;
//     const retirement = 60 - age;
//     // return retirement
//     return `${firstName} retire in ${retirement} years`;
// }

// console.log(yearUntilRetirement(1998, "Faaiz"))
// console.log(yearUntilRetirement(1988, "Ikhwan"))



// Function Calling Other Function -------------------------------------------------------------------------------

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcesscor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applesPieces} apples and ${orangesPieces} oranges.`
    return juice
}

console.log(fruitProcesscor(2,6));
