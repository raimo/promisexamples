var Q = require('q');

var computeMultiplication = function (a, b) {
  return timesTwo(a, b)
};

var formatResult = function (param) {
  return Q.when("[ " + param + " ]");
};

var timesTwo = function (a, b) {
  return Q.fcall(function() {
    if (typeof(a) == 'number' && typeof(b) == 'number') {
      return a * b;
    } else {
      throw new Error('ERROR');
    }
  });
};

var multiplyBy = function (coeff) {
  return (function (number) {
    return Q.fcall(function() {
      if (typeof(number) == 'number') {
        return number * coeff;
      } else {
        throw new Error('ERROR');
      }
    });
  });
};

// Example use:

console.log('First Case:');

computeMultiplication(2, 3)
  .then(multiplyBy(2))
  .then(formatResult)
  .then(function(str) {

    console.log('output -------> ', str);
    // output ------->  [ 12 ]

  })
  .then(function() {
    console.log('Second Case:');

    return computeMultiplication(2, 'fail')
           .then(function(str) {

             console.log('output -------> ', str);

           })
           .catch(function(err) {

             console.warn('error  -------> ', err);
             // error  ------->  [Error: ERROR]

           });
  })
  .then(function() {
    console.log('All done!');
  });
