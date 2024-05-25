
// primitive
// refer by value
// 7types : string, number, boolean, symbol, null, undefined, bigInt

//  const score = 100
// javascript is a dynamic typed language
// from above example we dont need to specify data type of that score
// const scorevalue = 100.3

// const isLogged = false
// const oustSideTemp = null
// let useEmmail;

const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id === anotherID);  //false
console.log(id == anotherID);  //false
console.log(typeof anotherID);

// Reference (non primitive)
// call by reference
//  array, objects, functions

const myarr = ["shaktiman", 'shonPari', 'Ninja Hathori']
console.log(myarr);

const myObj = {
    starPlus: 'Shonpari',
    nike: 'Ninja Hthori',
    pogo: 'Mr Bean'
}
console.log(myObj);

const myFun = function(){
    console.log("Maiti Cat Mask Niandor");
}


// Datatype

console.log(typeof myObj);

