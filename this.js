//Behaviour of this in a Object: this refers to the object
//Scenario 1
const person = {
  name: "Poulami",
  getName: function () {
    return `${this.name} is my name`;
  },
};
console.log(person.getName());
//this refers to the person object

//Scenario 2
//Arrow Functions: Arrow functions don’t have a defined this.
//Instead they treat it as a variable and they try to get the value lexically (inherit from parent scope)
const person1 = {
  name: "Poulami",
  getName: () => {
    return `${this.name} is my name`;
  },
};
//console.log(person1.getName());

//Result
//Poulami is my name
//undefined is my name

//Scenario 3
function test() {
  console.log(this);
}
//test();

//Result
//Test refers to the window/global object

//Scenario 4
function User() {
  this.name = "John";
  this.score = 20;
  this.sayUser = function () {
    console.log(this.name);

    function innerFunction() {
      console.log(this.name);
    }
    innerFunction();
  };
}

let name = new User();
//name.sayUser();
//Result
//John, undefined
//the first function has the reference of this from the object User, the second function has no reference of this
// with sayUser hence undefined

//Scenario 5
function User() {
  this.name = "John";
  this.score = 20;
  this.sayUser = function () {
    console.log(this.name);

    const innerFunction = () => {
      console.log(this.name);
    };
    innerFunction();
  };
}

let name1 = new User();
name1.sayUser();

//Result 
//the first function get the value of this from sayUser method
//the second arraow function is in the lexical scope of its parent sayUser, hence it gets the this value