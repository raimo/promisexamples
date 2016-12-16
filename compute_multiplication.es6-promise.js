var computeMultiplication = function (a, b) {
  return timesTwo(a, b);
};

var formatResult = function (param) {
  return "[ " + param + " ]";
};

var timesTwo = function (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof(a) == 'number' && typeof(b) == 'number') {
      resolve(a * b);
    } else {
      throw new Error('ERROR');
    }
  });
};

var multiplyBy = function (coeff) {
  return (function (number) {
    return new Promise(function(resolve, reject) {
      if (typeof(number) == 'number') {
        resolve(number * coeff);
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
