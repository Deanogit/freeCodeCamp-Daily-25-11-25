// FizzBuzz
// Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of:

// 3 with "Fizz".
// 5 with "Buzz".
// 3 and 5 with "FizzBuzz".

function fizzBuzz(n) {
  console.log(n);
  let counter = n;
  if (counter > 0) {
    counter--;
    if (counter % 5 && counter % 3) {
      counter = 'FizzBuzz';
    } else if (counter % 5) {
      counter = 'Buzz';
    } else if (counter % 3) {
      counter = 'Fizz';
    }
    console.log(counter);
  }
  return counter;

  // return n;
}
