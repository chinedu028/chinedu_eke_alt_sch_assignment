// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
    return arrayOfNumbers.reduce((a, b) => a + b);
}
console.log(sumOfNumbers([9,7,8,2]));

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {

  const calcEven = arrayOfNumbers.filter((f) => (f % 2 === 0));
  return calcEven.length;
  
    //return arrayOfNumbers.length;
}
console.log(countEvenNumbers([3,4,5,6,7,8]));

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
  const convert = arrayOfNumbers.map((f) => f * 9 / 5 +32);
const truncConervsion = convert.map((f) => Math.trunc(f));
    return truncConervsion
}
console.log(celsiusToFahrenheit([80, 90,20, 67, 23,55]));


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

