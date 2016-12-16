'use strict';

let computeMultiplication = (a, b) =>
  timesTwo(a, b)

let formatResult = (param) => "[ " + param + " ]";

let timesTwo = (a, b) =>
  new Promise((resolve, reject) => {
    if (typeof(a) == 'number' && typeof(b) == 'number') {
      resolve(a * b);
    } else {
      throw new Error('ERROR');
    }
  });

let multiplyBy = (coeff) =>
  (number) =>
    new Promise((resolve, reject) => {
      if (typeof(number) == 'number') {
        resolve(number * coeff);
      } else {
        throw new Error('ERROR');
      }
    });

// Example use:

console.log('First Case:');

computeMultiplication(2, 3)
  .then(multiplyBy(2))
  .then(formatResult)
  .then((str) => {

    console.log('output -------> ', str);
    // output ------->  [ 12 ]

  })
  .then(() => {
    console.log('Second Case:');

    computeMultiplication(2, 'fail')
    .then((str) => {

      console.log('output -------> ', str);

    })
    .catch((err) => {

      console.warn('error  -------> ', err);
      // error  ------->  [Error: ERROR]

    });
  })
  .then(() => {
    console.log('All done!');
  });
