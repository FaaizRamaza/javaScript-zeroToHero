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

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcesscor(apples, oranges) {
//     const applesPieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applesPieces} apples and ${orangesPieces} oranges.`
//     return juice
// }

// console.log(fruitProcesscor(2,3));

// Reviewing Function -------------------------------------------------------------------------------

// const calcAge = function(birthYeah) {
//     return 2037 - birthYeah;
// }

// const yearUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 60 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retire in ${retirement} years`);
//         return retirement
//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1;
//     }

//     // return
// }

// console.log(yearUntilRetirement( 1998 , 'Faaiz'))
// console.log(yearUntilRetirement( 1950 , 'Mike'))

// Coding Challange 1 -------------------------------------------------------------------------------

// 1. Create an arrow function 'calcAverage' to calculate the average
// of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score
// of each team as parameters ('avgDolhins' and 'avgKoalas'), and then
// logs the winner to the console, together with the victory ProcessingInstruction,
// according to the rule AnimationPlaybackEvent. Example : "Koalas win (30 vs 13)"

// Test data 1 : Dolphins socre 44, 23, and 71. Koalas score 65, 54, and 49
// Test data 2 : Dolphins socre 86, 54, and 71. Koalas score 23, 34, and 27

// Test 1

// let calcAverage = (num1, num2, num3) => ((num1 + num2 + num3) / 3);

// let scoreDolphins = calcAverage(6, 24 ,30);
// let scoreKoalas = calcAverage(66, 54, 48);
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win!! (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win!! (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log('No Team Wins..')
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)

// // Test 2

// scoreDolphins = calcAverage(85, 54, 41)
// scoreKoalas = calcAverage(23, 34, 27)
// console.log(scoreDolphins, scoreKoalas)
// checkWinner(scoreDolphins, scoreKoalas)

// Introduction to Arrays -------------------------------------------------------------------------------

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)

// const y = new Array (1998, 1999, 2000, 2001, 2002);

// console.log(friends[0])

// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[2] = 'Jay'
// console.log(friends)

// const firstName = 'Jonas';
// const faaiz = ['Faaiz', 'Ramaza' , 2037 - 1998, 'teacher', friends]
// console.log(faaiz)

// // ------------------------------------

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])] ;
// console.log(ages)

// Basic Array Operation -------------------------------------------------------------------------------

// // Add Element
// const friends = ['Michael', 'Steven', 'Peter']
// const newLength = friends.push('jay')
// console.log(friends)
// console.log(newLength)

// friends.unshift('John')
// console.log(friends)

// //Remove Element
// friends.pop() // Remove Last Element
// const popped = friends.pop()
// console.log(popped)
// console.log(friends)

// friends.shift() // Remove First Element
// console.log(friends)

// console.log(friends.indexOf('Steven')) // Return the value index of in array
// console.log(friends.indexOf('Bob'))

// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))

// if (friends.includes('Peter')) {
//     console.log('Yes')
// } else {
//     console.log('No')
// }

// Coding Challange  -------------------------------------------------------------------------------

/* Steven is building a tip calculator, using the rules:
Tip 15% of the bill if the bill value is between 50 and 300,
and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input
and returns the corresponding tip, calculated based on the rules above.
use the function type you like the most. test the function using a bill value of 100.
2. And now lets use arrays! so Create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you create before
4. Bonus : Create an array 'total' containing the total values, so the bill + tip.

Tes Data : 125, 55, and 44 */

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }

// const bills = [125, 55, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals)

// Introduction to Objects  -------------------------------------------------------------------------------

// const faaiz = {
//   firstName: "Faaiz",
//   lastName: "Ramaza",
//   age: 2037 - 1998,
//   job: "Progammer",
//   friends: ["Kentang", "Islah", "Yossy"],
// };
// console.log(faaiz);

// console.log(faaiz.lastName);
// console.log(faaiz["lastName"]);

// const nameKey = "Name";
// console.log(faaiz["first" + nameKey]);
// console.log(faaiz["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about faaiz? choose between firstName, lastName, age, job, and friends"
// );

// if (faaiz[interestedIn]) {
//   console.log(faaiz[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

// faaiz.location = 'Indonesia'
// faaiz['twitter'] = '@faaizRamaza'
// console.log(faaiz)

// // Challange
// // 'Jonas has 3 friends, and his best friend is called kentang'

// console.log(`${faaiz.firstName} has ${faaiz.friends.length} friends, and his bestfriend is called ${faaiz.friends[0]}`)

// Objects Methods  -------------------------------------------------------------------------------

// const faaiz = {
//   firstName: "Faaiz",
//   lastName: "Ramaza",
//   birthYeah: 1998,
//   job: "Progammer",
//   friends: ["Kentang", "Islah", "Yossy"],
//   hasDriversLicense: true,

  //   calcAge: function(birthYeah) {
  //     return 2037 - birthYeah
  //   }

  //     calcAge: function() {
  //         console.log(this)
  //         return 2037 - this.birthYeah
  //       }
  // };

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       faaiz.job
//     },and he has ${this.hasDriversLicense ? "a" : "no"} driver's licencse`;
//   },
// };

// console.log(faaiz.calcAge());

// console.log(faaiz.age);

// // this.Challange
// // 'faaiz is a 25-year old Progammer, and he has a/no driver's license'

// console.log(faaiz.getSummary());

// Coding Challange 3  -------------------------------------------------------------------------------

/* use objects to implement the calculations!
    Bmi = mass / height ** 2 = mass / (height * height). (mass in kg and heigt in m)

1. For each of them, create an object with properties for their full name,
    mass, and height ( Mark Miller and John Smith)
2. Create a 'calcBMI method on each object to calculate the BMI (the same method
    on both object). Store the BMI value to a property, and also return it
    from the method.
3. Log to the console who has the higher BMI, together with the full name and 
    the respective BMI. Example : "Jon's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69m tall.
           John weights 92kg and is 1.95m tall.
*/

// const mark = {
//     firstName : 'Mark',
//     lastName : 'Miller',
//     heigth : 1.69, // meter
//     weight : 78, // kg
//     calcBMI: function() {
//         this.bmi = this.weight / this.heigth ** 2;
//         return this.bmi;
//     }
// }
// const john = {
//     firstName : 'John',
//     lastName : 'Smith',
//     heigth : 1.95, // meter
//     weight : 92, // kg
//     calcBMI: function() {
//         this.bmi = this.weight / this.heigth ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi)

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.firstName + " " + mark.lastName}'s BMI (${mark.bmi.toFixed(2)})
//     is higher than ${john.firstName + " " + john.lastName}'s BMI (${john.bmi.toFixed(2)})`)
// } else if (john.bmi > mark.bmi){
//     console.log(`${john.firstName + " " + john.lastName}'s BMI (${john.bmi.toFixed(2)})
//     is higher than ${mark.firstName + " " + mark.lastName}'s BMI (${mark.bmi.toFixed(2)})`)
// }

// Iteration The for Loop  -------------------------------------------------------------------------------

// for(let rep = 1; rep <= 10; rep ++) {
//     console.log(`Lifting weights repetition ${rep}`)
// }

// Looping Arrays, Breaking and Continuing -------------------------------------------------------------------------------

// const faaizArray = [
//     'Faaiz',
//     'Ramaza',
//     2037 - 1998,
//     'Progammer',
//     ['Mike', 'Peter', 'Michael'],
//     true
// ];

// const types = [];

// for(let i = 0; i < faaizArray.length ; i++) {
//     console.log(faaizArray[i], typeof faaizArray[i])

//     // types[i] = typeof faaizArray[i];
//     types.push(typeof faaizArray[i])
// }
// console.log(types)


// const years = [1991, 1992, 1993, 2007, 2010, 2020, 2023];
// const ages = [];

// for(let i = 0 ; i < years.length ; i++) {
//    ages.push(2037 - years[i])
// }
// console.log(ages)

// // CONTINUE ------------------------
// for (let i = 0; i < faaizArray.length; i++) {
//     if(typeof faaizArray[i] !== 'string') continue;

//     console.log(faaizArray[i], typeof faaizArray[i])
// }

// // BREAK ------------------------
// for (let i = 0; i < faaizArray.length; i++) {
//     if(typeof faaizArray[i] === 'number') break;

//     console.log(faaizArray[i], typeof faaizArray[i])
// }

// Looping Backwards and Loops in Loops -------------------------------------------------------------------------------

// BACKWARDS LOOPING -----------------

// const faaizArray = [
//     'Faaiz', // 0
//     'Ramaza', // 1
//     2037 - 1998, // 2
//     'Progammer', // 3
//     ['Mike', 'Peter', 'Michael'] // 4
// ];

// for(let i = faaizArray.length - 1; i >= 0 ; i--) {
//     console.log(i, faaizArray[i])
// }

// LOOPING INSIDE OF LOOP --------------

// for (let exercise = 1 ; exercise < 4; exercise ++) {
//     console.log(`---------- Starting Excercise ${exercise}`)

//     for (let rep = 1; rep < 6; rep ++) {
//         console.log(`Lifting weight repetition ${rep}`)
//     }
// }

// While Loops -------------------------------------------------------------------------------

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE : Lifting weight repetition ${rep}`)
//     rep ++
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//     console.log(`You Rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if ( dice === 6 ) console.log(`Congratz, finally you got ${dice}`)
// }

// Coding Challange 4 -------------------------------------------------------------------------

/*
1. Create an array 'bills' containing all 10 test bill value
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function to calculate tips and total values
(bill + tip) for every bill value in the bills array.
Use the for loop to perform the 10 calculations!

Test Data : 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52

HINT : Call calcTip in the loop and use the push method to add values to the tips 
and totals arrays

4. Bonus : Write a function 'calcAverage' which takes an array called 'arr'
as an argument. This function calculates the average of all numbers in the given array.
This is difficult one, here is the step by step
    4.1 First, you will need to add up all values in the array. To do the addition,
    start by creating a variable 'sum' that starts at 0. Then loop over the array
    using a for loop. In each iteration, add the current value to the 'sum' variable.
    This way, by the end of the loop, you have all the values added together.
    4.2 To calculate the average, divide the sum calculated before by the length
    of the array (because thats the number of elements)
    4.3 Call the function with the 'totals' array
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = []
let totals = []

const calcTip = (bill) => {
        return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2
    }

for (let i = 0; i < bills.length ; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip)
    totals.push(tip + bills[i])
}

console.log(bills ,tips, totals)

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}
console.log(calcAverage(tips))
console.log(calcAverage(totals))
