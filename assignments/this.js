/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
        The "this" in this context simply refrence or point to the global scope i.e the Window in this case
        
* 2. Implicit Binding
        In this case, the ".this" checks out or move one layer out of its own scope to find what's pointing to.
        If the reference can't be found, it moves outward again to the next scope until it finds it refenrence.
        If reference is still not found, its eventually refenrence the global scope, which is the Window.

* 3. New Binding
        In this case "this" reference or point to the specific instance of the object that is instantiated 
        and returned by the constructor function (i.e a function that returns an object, or an object creator.)
        
* 4. Explicit Binding
        Whenever JavaScript’s call or apply method is used, this is explicitly defined. i.e the function on which
        "this" is called or apply, explictly inherit all the object's properties of the called object.
        Except for __proto__ properties that needed to be called using "Object.create"
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");



// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');



// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();



// Principle 4

// code example for Explicit Binding

jerry.speak.call(newman); newman.speak.apply(jerry);