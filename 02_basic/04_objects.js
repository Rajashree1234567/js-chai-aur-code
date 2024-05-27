
//rest operator
// The rest and spread operators are both denoted by three dots (...) in JavaScript,
//  but they have different functions.
//  The rest operator collects the remaining elements of an array or object 
// into a new array or object.
//  The spread operator expands the elements of an iterable object 
// into individual elements. 
// The rest operator can only be used with arrays or objects, 
// while the spread operator can be used with any iterable object, 
// such as arrays, objects, strings, and tuples



function calculateCartPrice(num) {
    return num
}
console.log(calculateCartPrice(299, 300, 400));  // it will pass only 1t argument

// **************************


function calculateCartPriceOne(...num) {   //
    return num
}
console.log(calculateCartPriceOne(299, 300, 400));
