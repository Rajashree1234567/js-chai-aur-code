
const score = 100
console.log((score));

const balance = new Number (100)
console.log(balance);

// console.log(score.lenth); we can not get the length of number, as length is string method.
                            // for length, first convert number to string then call length method

console.log(score.toString().length); //toString helps to covert number to string
console.log(balance.toString());

console.log(balance.toFixed(2));

const otherNumbe = 123.7799
console.log(otherNumbe.toPrecision(2));

const hundreds = 100000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));



