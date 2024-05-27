
//singletone : when it used by constructor
// object.create

//multi instance
// We are not using constructor, Using Literal

// object literals

const mySy = Symbol('keyOne')

const JsUsert = {
    name: 'rajashree',
    'full name' : 'rajashree biswas',
    age: 20,
    location: 'jaipur',
    email: 'raj@hot.com',
    isLoggedIn: false,
    lasLoggedinDate: ["moday", 'tuesday'],
    [mySy] : 'keyTwo',
}

console.log(JsUsert.email);
console.log(JsUsert["email"]);

// console.log(JsUsert.full name); //we can't
console.log(JsUsert["full name"]);

//value override

JsUsert.email = 'bish@gmail.com';
console.log( JsUsert.email);

JsUsert["full name"] = 'satyabati'
console.log(JsUsert["full name"]);

// when we lock the value

// Object.freeze(JsUsert)   //it will lock further changes

console.log(JsUsert);
JsUsert.email = 'satya@gmail.com';
console.log( JsUsert.email);

// function

JsUsert.greetings = function(){
    console.log('hello world');
}

console.log(JsUsert.greetings());
console.log(JsUsert.greetings);

JsUsert.greetOne = function(){
    console.log(`hello worl.. Im ${this["full name"]}`);   //string interpolation;- use backtick
}
console.log(JsUsert.greetOne);
console.log(JsUsert.greetOne());


// Define Symbol //imp

// const mysym = Symbol('rajashree');

// console.log(mysym);

// const symObj = {
//     mysym : 'rajashree'
// }
// console.log(symObj.mysym);      //rajashree
// console.log(typeof symObj.mysym);  //string
// console.log(typeof mysym);   // symbol

// const symObj1 = {
//     [mysym] : 'biswas',
// }

// console.log(typeof mysym);            //symbol
// console.log(typeof [mysym]);         //object
// console.log(symObj1[mysym]);         //biswas
// console.log(typeof symObj1[mysym]);  //string