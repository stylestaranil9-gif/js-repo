// 	var: function-scoped, can be redeclared & updated
console.log(x)  //undifine
var x=10

var x= 12  // not show the the error THATS NOT RECOMENDED
console.log(x)



//let: block-scoped, can be updated but not redeclared in the same scope.

let a =10;  
a=20
console.log(a) //output 20



//const: block-scoped, cannot be reassigned (but objects/arrays can still be mutated).

const b = 30
b=40 //error
console.log(b)  //error