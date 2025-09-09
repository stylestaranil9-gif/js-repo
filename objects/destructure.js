const person = {
  name: "John",
  age: 30,
  colege:"gbic",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

// console.log(person.name , person.age ,person.colege) not recomended

const {name , age , colege} = person

console.log(name , age , colege)