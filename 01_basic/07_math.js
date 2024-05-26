
console.log(Math);
console.log(Math.abs(-4)); //convert negative to posite
console.log(Math.abs(4));  //positive always positive

console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4, 6, 7, 5, 1));
console.log(Math.max(4, 6, 7, 5, 1));

console.log(Math.random()); //give value always 0 to 1
console.log((Math.random()) * 10);
console.log(Math.floor((Math.random()) * 10));

console.log((Math.random() * 10) + 1);

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20
console.log(Math.random()  * (max - min +1));
console.log(Math.floor(Math.random()  * (max - min +1)));
console.log(Math.floor(Math.random()  * (max - min +1)) + min);