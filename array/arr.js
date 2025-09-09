const  arr = [12,'ram' , 'ishu' , 57 , 989]


console.log(arr.length)
// for(i=0 ; i<arr.length ; i++){
// console.log(arr[i])
// }

  // arr.push('shivi')  //Appends new elements to the end of an array, and returns the new length of the array.
// console.log(arr)

// arr.pop()  //pop(): any  Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// arr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// arr.unshift('front me')  //Inserts new elements at the start of an array, and returns the new length of the array.

let arr2  = [2,5,6,8,33,-5,66]


let find = arr2.findIndex((element) => element>20 )
// console.log(find)

let str = "hello my name is ank"
let num = "1234567890"
length=8;
pass = ''
for(i=0 ; i<length ; i++){
    let random = Math.floor(Math.random()*str.length)
    pass+= str.charAt(random )
}
console.log(pass)