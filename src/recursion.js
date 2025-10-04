// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

var factorial = function(n, output = 1) {
  if (n < 0) { //edge case, if negative number return null
    return null;
} if (n < 1){  //base case, if hit 0, stop multiplying
  return output;
  }
  //what do we want to do to N? take all the numbers from 1 to N and times them by eachother progressively.
  return factorial(n -1, output * n);//start with n, decrease down, and times by output(1)

};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, output = 0) {
  //base case who cares right now
  if (array.length === 0){
  return output;
  //recursion
  }
  output += array[0]; //adds first element of array to output.
  return sum(array.slice(1), output); //calls sum on sliced array
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, output = 0) {
  //base case who cares right now
  //recursion- what do we want to do to array? loop through and add elements together.

};

// 4. Check if a number is even.
var isEven = function(n) {
  //base cases
  if (n < 0){   //accounting for negative numbers below 0
    return isEven(n + 2); //call function by ADDING two
  }
  if (n <= 0){  //if land on 0, return true
    return true;
  }
  if (n === 1){ //if land on 1, return false!
  return false;
  }
  //recursion(main), subtract 2 over and over until reach 1 or 0
  return isEven(n -2); 
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, output = 0) {
  //base cases
  if(n < 0){  //handle negative numbers by putting recursion 'opposite arguments'
  output += n + 1;
    return sumBelow(n + 1, output);
  }
  if (n <= 0){  //handle when reach 'end' of integers
    return output;
  }
  //what do we want to do to N? take all the numbers from 1 to N and add them together
  output += n - 1;
  return sumBelow(n-1, output);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
  //base -when does loop stop?
  if (y === x){
    return output;
  }
  if ((x - 1) === y) {
    return output;    
  }
  if ((x + 1) === y) {
    return output;
  }
  //recursion= what do we want to get out of the function inputs?- return integers BETWEEN the two objects.
    if (x < y){
    output.push(x + 1);
    return range(x + 1, y, output);
    } else {
      output.push(x - 1);
    return range(x - 1, y, output);
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// 
var exponent = function(base, exp) {
  //base case- if exp is 0, return 1;
  if (exp === 0){
    return 1;
  } else if (exp < 0){ //base case- if less than 0
    return 1 / exponent(base, -exp);  //divide 1 by the function (flip the negative)
  } else {
  //recursion: want to times the base by itself exp number of times.
  return base * exponent(base, exp - 1);  //to prevent it from continuing to go forward, remove one???
}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base case
  if (n == 1){
  //if n is 1, return true
    return true;
  } else if (n % 2 != 0 || n == 0)
  //otherwise, if n's remainder% of 2 is NOT 0 OR n is equal to 0
    return false;
  // run the recursion
  return powerOfTwo(n / 2); //call the function again on half of n
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, output = '') {
  //base case ignore for now
  if (string === ''){ 
    return output;
  } else {
  // recursion loop
  output += string[string.length-1];
  string = string.slice(0, -1);
  return reverse(string, output);
};
}

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
//remove weird chars:
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
//base case return if true to stop the loop
if (string.length <= 1){
  return true;
}
if (string[0] !== string[string.length - 1]){
  return false;
}
//recursion
  return palindrome(string.slice(1,-1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, counter = 0) {
  if (counter === y){
    return x;
  }
 return multiply(x + x, y, counter + 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
// declare function compareStr that compares 2 strings
    if (str1 === '' && str2 === ''){
//if the strings are empty, then they match and you can return true
    return true; }
    if (str1[0] !== str2[0]){
//if the first character of both strings does not match, you can return false
      return false;} 
    return compareStr(str1.slice(1), str2.slice(1));
// call the function again and slice off the first element of the string to keep comparing
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, stArr = []){
//create createArray function with the parameters string and an empty storage array
  if (str === ''){
// if the string is empty, return the empty array
    return stArr;
  } stArr.push(str[0]);
// if there is value in the string, push the index 0 of the string to the storage array
  return createArray(str.slice(1), stArr);
//slice off that pushed value, and call the function again on the shortrt string and array
};

// 17. Reverse the order of an array
var reverseArr = function (array, stArr = []) {
// create a function that takes in an array and a empty storage array
  if (array.length === 0){
// if the array has no items, return the empty storage array
    return stArr;
  } stArr.push(array[array.length-1]);
//if the array has items, push the last value to the storage array
  array.pop();
// pop off that pushed value and call the function again
  return reverseArr(array, stArr);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, newList = []) {
//create buildlist, a function that takes in a value, a length, and default param blank array
  if (newList.length === length){
//if the array length equals the length, return the array
    return newList;
  } newList.push(value);
// if not, push the value to the new array
  return buildList(value, length, newList)
// call the function again on the value and the new list
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, stArr = []) {
// declare a function that takes in an array, a value to check for, and default storage array
  if (array.length === 0){
//if the array is empty, return the storage array's length
    return stArr.length;
  } if (array[0] === value){
// if the first item in the array is the same as the value, push to storage array
    stArr.push(value);
  } 
// call the function again with the first element sliced off, the value, and the storage array
  return countOccurrence(array.slice(1), value, stArr);
};


// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
// create function rMap that takes in an array, a function, and has a default param of empty array
  if (array.length === 0){
//if the array is empty, return the output array
      return output;
    } output.push(callback(array[0]));
// push the result of calling the callback into the output array
  return rMap(array.slice(1), callback, output)
// call the function again, with the first element sliced off, the callback, and the output array
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
//declare nthFibo, which is a function that takes in a number, n
  if (n < 0){
// if n is less than 0, return null
    return null;
  }
// if n is less than or equal to 1, return n
  if (n <= 1){
    return n;
  }
// call the function again on n -1 + n -2
  return nthFibo(n - 1) + nthFibo(n -2)
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
  if (input.length === 0){
    return output;
  } output.push(input[0].toUpperCase());
  return capitalizeWords(input.slice(1), output)
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
  if (array.length === 0){
    return output;
  } output.push(array[0][0].toUpperCase() + array[0].substring(1));
  return capitalizeFirst(array.slice(1), output);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj ={}) {
// function takes string and has a default empty object
//need to loop through string and create a property for each unique entry in the string. 
//then count the amount of times the letter appears that matches the property.
// ??????????
  if (str.length === 0){
    return obj;
  } if ( obj[str[0]] === undefined){
    obj[str[0]] = 1;
  } else { 
    obj[str[0]] += 1;
  console.log(obj);
    }
    return letterTally(str.slice(1), obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output = []) {
//base case don't worry about
  if (list.length === 0 ){
    return output;
//start the output, if it's empty, push the first index of the list
  } if (output.length === 0){
    output.push(list[0]);
//recall the function on the new list
    return compress(list.slice(1), output);
  } if (list[0] !== output[output.length -1]){
    output.push(list[0]);
  } return compress(list.slice(1), output);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, acc = []) {
  if (array.length === 0){
    return acc;
  } if (array[0] === 0 && acc[acc.length -1] !== 0){
    acc.push(array[0]);
  } else if (array[0] !== 0){
    acc.push(array[0]);
  }
    return minimizeZeroes(array.slice(1), acc);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

var alternateSign = function(array, output = []) {
//declare alternateSign variable to be a function that takes in an array and has an
// output that will be an array
//  base cases, how to finalize the output:
  if (array.length === 0){
// if there is no more array to push
   return output;
// return the output.

//how to deal with odd-number of array entries:
  } if(array.length === 1 && array[0] > 0){
    output.push(array[0]);
    return output;
//if the last entry is positive, push it
  } if (array.length === 1 && array[0] < 0){
    output.push(array[0] * -1);
    return output;
//if the last entry is negative, reverse and push it.

//recursion stuff, 2 peices at time:
// if the first is negative and the second is positive,
  } if(array[0] < 0 && array[1] > 0){
// reverse and push to output
    output.push(array[0] * -1, array[1] * - 1);

// if the first is positive and the second is positive
  } if(array[0] > 0 && array[1] > 0){
// push the first and reverse and push the second
    output.push(array[0], array[1] * - 1);

// if the first is positive and the second is negative
  } if(array[0] > 0 && array[1] < 0){
//no reverse needed, push those 
    output.push(array[0], array[1]);

//if the first is negative and the second is negative
  } if(array[0] < 0 && array[1] < 0){
//reverse the first and push it and the second
    output.push(array[0] * - 1, array[1]);
  }
//call the function again with two items sliced off
  return alternateSign(array.slice(2), output);;
};


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(string, output = []) {
//  you need an array where the indexs correspond to the same word value
  var wrds = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//  because we are working with some arrays, this just splits the string once
    if(typeof string === 'string') {
    string.split(' ');

//  if the string((array)) has been looped through and equals 0
  } if (string.length === 0){
//  join the array back into string and return output
      return output.join('');

  } if (/^[0-9]$/.test(string[0])){
//  test with regex to see if the current word is a number
      output.push(wrds[Number(string[0])]);
// if so, push to output
  } else { 
// if not, 
      output.push(string[0]);
//call the function back with a sliced string and the output
  } return numToText(string.slice(1), output); 
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------