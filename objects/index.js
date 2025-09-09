const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

console.log(person.name); // Accessing property
person.greet(); // Calling method

