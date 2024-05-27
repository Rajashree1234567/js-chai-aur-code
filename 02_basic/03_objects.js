//singletone

const tinderUser = new Object()
console.log(tinderUser);  // {}

// using leterals
const tinderUserOne = {}
console.log(tinderUserOne);  //{}

// ******************************

const user = {
    email: 'raj@gmail.com',
    userName : {
        firstName :{
            name: 'Rajashree',
            surname: 'Biswas'
        }
    }
}

console.log(user.userName.firstName.surname);

// ***************************************

let obj1 = {1: 'a', 2: 'b',}
let obj2 = {3: 'c', 4: 'd'}
let obj3 = {5: 'e', 6: 'f'}

const combObj = Object.assign( obj1, obj2, obj3)
const combObjOne = Object.assign({}, obj1, obj2, obj3)
console.log(combObj);
console.log(combObjOne);

const objTwo = {...obj1, ...obj2, ...obj3}
console.log(objTwo);
const objThre = {...obj1, ...obj2, ...obj3, ...combObj}
console.log(objThre);
const objFour = {...obj1, ...obj2, ...combObj} //wont repeat the value
console.log(objFour);

// **********************************

console.log(user.hasOwnProperty('email'));
console.log(user.hasOwnProperty('isLogged'));

// *********************************

const course = {
    courseNAme: 'js with tea',
    price: '999',
    courseInstructor: 'Himalaya',
}
const {courseInstructor: instructor} = course;

console.log(instructor);


// ******************************


function myfunOne() {
    console.log('h');
    console.log('i');
    console.log("l");
    console.log('l');
    console.log('o');
}
myfunOne();


// ******************************

function addTwonumber(num1, num2){ //(num1, num2):- parameters
    console.log(num1+num2);
}
addTwonumber(5, '4');    //(5, '4'):- arrguments
addTwonumber(4, 5);

// ****************************


function addingNumber(num1, num2){ //(num1, num2):- parameters
    let resultAdd = num1+num2
    console.log('before return');
    return resultAdd
    console.log('after return'); //afer return, it wont return anything
}
const resultAdd = addingNumber(5, 7);    //(5, '4'):- arrguments

console.log('result is :', resultAdd);

// ***********************************

function loggedMessage(userMes) {
    // if(userMes=== undefined){
    //     return `please enter a usermessahe`
    // }
    if(!userMes){
        return `please enter a usermessahe`
    }
    return `${userMes} just logged in`
}
console.log(loggedMessage());

// **********************************

function youloggedMessage(userMes = 'Ravi') {  //Undefined converted to Ravi
    // if(userMes=== undefined){
    //     return `please enter a usermessahe`
    // }
    if(!userMes){
        return `please enter a usermessahe`
    }
    return `${userMes} just logged in`
}
console.log(youloggedMessage('Dabbu'));   //Dabbu override the Ravi

// ***************************************



