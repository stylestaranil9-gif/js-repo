const user = {
    name : "anyy",
    greet : function () {
        setTimeout( function()  {
            console.log(`hi my name is ${this.name}`)
        }, 1000);
    }
}

user.greet() // output hi my name is undefine

//CORRECT METHOD

// const user = {
//     name : "anyy",
//     greet : function () {
//         setTimeout(() => {
//             console.log(`hi my name is ${this.name}`)
//         }, 1000);
//     }
// }

// user.greet()