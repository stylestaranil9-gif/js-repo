typeof 42;        // "number"
typeof "hello";   // "string"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // "object"  (bug)
typeof {};        // "object"
typeof [];        // "object"
typeof function() {}; // "function"


const s1 = Symbol("id");
const s2 = Symbol("id");
console.log(s1 === s2); // false


let x; // undefined
let y = null; // null
