// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Training a real Problems ---------------------------------------------------------

// Problem ------------------------------------
/* We work for a company bulding a smart home thermometer.
Our most recent task is this: "Given an array of temperatures of one day,
calculate the temperature amplitude. Keep in mind that sometimes there
might be a sensor error." */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9 ,5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore the sensor error?
// - Find max and min value in temp array
// - Substract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0]
//     let min = temps[0]
//     for(let i = 0; i < temps.length; i ++) {
//         const curTemp = temps[i]
//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > max) max = curTemp
//         if(curTemp < min) min = curTemp
//     }
//     console.log(max, min)
//     return max - min
// }
// const amplitude = calcTempAmplitude(temperatures)
// console.log(amplitude)

// Problem 2 -----------------------------------
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! just merge two arrays

// 2) Breaking up into sub-problems
// - merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {

//     const temps = t1.concat(t2)
//     console.log(temps)

//     let max = temps[0]
//     let min = temps[0]
//     for(let i = 0; i < temps.length; i ++) {
//         const curTemp = temps[i]
//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > max) max = curTemp
//         if(curTemp < min) min = curTemp
//     }
//     console.log(max, min)
//     return max - min
// }
// const amplitudeNew = calcTempAmplitudeNew([3,5, 1] , [9, 0 ,1])
// console.log(amplitudeNew)

// Debugging ------------------------------------------------------------------------

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',

//         // Fix
//         // value: Number(prompt('Degree celcius:')),
//         value : 10,
//     };

//     console.table(measurement)

//     // console.log(measurement.value)
//     // console.warn(measurement.value)
//     // console.error(measurement.value)

//     const kelvin = measurement.value + 273;
//     return kelvin;
// };
// // A) Identify the BUG !!

// console.log(measureKelvin())

// -----------------------------------------------

// const calcTempAmplitudeBug = function (t1, t2) {

//     const temps = t1.concat(t2)
//     console.log(temps)

//     let max = temps[0]
//     let min = temps[0]

//     for(let i = 0; i < temps.length; i ++) {
//         const curTemp = temps[i]
//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > max) max = curTemp
//         if(curTemp < min) min = curTemp
//     }
//     console.log(max, min)
//     return max - min
// }
// const amplitudeBug = calcTempAmplitudeBug([3,5, 1] , [9, 4 ,1])
// console.log(amplitudeBug)

// Coding Challange 4 ---------------------------------------------------------------

/* Given an array of forecasted maximum temperatures, the thermometer displays
a string with these temperatures.

Example : [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 
23C in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs
a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test Data 1 : [17, 21, 23]
Test Data 2 : [12, 5, -5, 0, 4] */

const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

const printForecast = function(arr) {
    let str = '';
    for(let i = 0; i < arr.length ; i++) {
        str = str + ` ${arr[i]}C in ${i + 1} days ... `
    }
    console.log(str)
}
printForecast(data1)