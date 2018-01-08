let _ = require('./_');
let partial = require('./partial');
let pipe = require('./pipe');


// simple pipe composition
let getChar = pipe(_.first, _.upp);
getChar('things');
// -> 'T'

// use of partial
let add3 = partial(_.addThreeVals, 3);
let add5 = add3(2);

add5(7);
// -> 12
partial(_.addThreeVals, 2, 3, 5)
// -> 10
partial(_.addThreeVals)(3)(3)(5);
// -> 11


/*
for more flexible composition, create unary functions with currying or
partial application
*/

let products = [
  {id: 1, type: 'chair', color: '238b45'},
  {id: 2, type: 'table', color: '006d2c'},
  {id: 3, type: 'chair', color: '00441b'},
  {id: 4, type: 'table', color: '99d8c9'},
];

// partially apply to unary functions, then compose
let getColor = partial(_.propEq, 'color');
let formattedColor = pipe(getColor, _.upp, _.addHash);

formattedColor(products[0]);
// -> "#238B45"

// or, keep going... (but don't obfuscate)
let getColorByIndex = (index, products) => formattedColor(products[index]);

getColorByIndex(1, products);
// -> "#006D2C"

// find the 'type' for product with id 2
let findById = partial(_.find, 'id');
let getType = partial(_.propEq, 'type');

pipe(findById(2), _.first, getType)(products)
// -> "table"
