let arr = [];
console.log(typeof arr);       // "object"
console.log(arr instanceof Array); // true


let obj = {x: 10, y: 20};
delete obj.x;
console.log(obj); // {y: 20}


let obj2 = {x: 10};
console.log("x" in obj2);            // true
console.log(obj2.hasOwnProperty("x")); // true

//ternary oprater
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
