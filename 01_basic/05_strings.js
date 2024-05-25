// string Method

const name = 'rajashree'
const number = 50

// console.log(`Hello my name is ${name} and my repo count is ${number}`);

const gameName = new String('rajashree biswas')
// let anotherStr = gameName.slice(-9, 9) 
// console.log(anotherStr);


// console.log(gameName);
// console.log(gameName.__proto__);
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

//let newStr = gameName.substring(2, 5) //2=>start from to end with 5 index
// console.log(newStr);


let newstrOne = "     dsi        cniusdhv      cij   ";
console.log(newstrOne);
console.log(newstrOne.trim()); //will not remove middle space

let strTwo = '    hfij   ';
console.log(strTwo);
console.log(strTwo.trim());

let strThree = 'rajashree%10Biswas%10jack%10';
console.log(strThree.replace('%10', '_'));

console.log(strThree.includes('bish'));
console.log(strThree.includes('shree'));

let strFour = 'rajas hree biswas';
console.log(strFour.split(' '));

let strFive = 'rajas-hree-biswas';
console.log(strFive.split('-'));