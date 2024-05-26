//dates

let mydate = new Date();
// console.log(mydate);  2024-05-26T15:55:12.022Z
// console.log(mydate.toString()); //Sun May 26 2024 15:53:56 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString()); //sun may 26 2024
// console.log(mydate.toLocaleString());  // 5/26/2024, 3:59:06 PM
// console.log(mydate.toLocaleTimeString());  //4:00:50 PM
// console.log(mydate.toLocaleDateString());  //5/26/2024

let myCreateddate = new Date(2024, 0, 27)
// console.log(myCreateddate); //2024-01-27T05:03:00:000Z

let myCreateddates = new Date(2024, 0, 27, 5, 3)
// console.log(myCreateddates.toLocaleString()); // 1/27/2027, 5:03:00 AM

let myDatecreate = new Date("01-25-2024");
// console.log(myDatecreate);

let myTimeStamp = Date.now()
// console.log(myTimeStamp);   //minutes
// console.log(myDatecreate.getTime());

// when we want in milesecond

// console.log(Date.now()/1000);
// for overcoming from the points value,  we should take minimum or maximum vale
// console.log(Math.floor(Date.now()/1000));

let myexactDate = new Date();
// console.log(myexactDate.getDay());
// console.log(myexactDate.getMonth());
// console.log(myexactDate.getMonth() + 1);

// `${myexactDate.getDate()} and the time ${myexactDate.getTime()}`

// console.log(`${myexactDate.getDate()} and the time ${myexactDate.getTime()}`);


let someDate = myexactDate.toLocaleString('default', {
    weekday: 'short'
})
// console.log(someDate);   //long: sunday   narrow: S short: Sun