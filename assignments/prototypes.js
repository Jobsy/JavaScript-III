/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false;
  }

  HOW TO TEST OUR SOLUTION:

  const jumbo = new Airplane('Jumbo');
  console.log(jumbo.name)              // 'Jumbo'
  console.log(jumbo.isFlying)          // false
  jumbo.takeOff();
  console.log(jumbo.isFlying)          // true
  jumbo.land();
  console.log(jumbo.isFlying)          // false
*/

/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to intro edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.
*/

function Person(attr) {

  this.name = attr.name;
  this.age = attr.age;
  this.stomach = [];

  this.great = function greater() {
    return `My name is ${this.name}, and I'm ${this.age} years old`;
  };

  this.intro = function eatEdibles() {
    let edible = true;
    let edibles = ["apples", "vegetables", "banana"];
    if (edible) {
      this.stomach.push(edibles);
    }
    return this.stomach;
  };

  this.poop = function poopPoop() {
    let pooping = true;
    if (pooping) {
      this.stomach.length = 0;
    }
    return this.stomach;
  };
}
// const jay = new Person({name:"jj", age:23});

/*
  TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.
*/

function Car(attr) {

  this.model = attr.model;
  this.make = attr.make;
  this.odometer = 0;
}

Car.prototype.drive = function driveCar() {
  this.odometer += 20;
};

Car.prototype.crash = function crashCar() {
  let crashed = true;
  if (crashed) {
    return `I crashed at ${this.odometer} miles!`
  };
};

Car.prototype.repair = function repairCar() {
  let repaired = true;
  if (repaired) {
    return `I just repaired my crashed car, now I can drive again!`
  };
};
// const bmw = new Car({model:"X6", make:"BMW" });


/*
  TASK 3

  - Build a Baby constructor that subclasses the Person built earlier.
  - Babies of course inherit the ability to greet, which can be strange.
  - Babies should have the ability to play, which persons don't.
  - By playing, a string is returned with some text of your choosing.
*/

function Baby(babyAttr) {
  Person.call(this, babyAttr);
  this.play = babyAttr.play;
  this.cry = babyAttr.cry;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.playPlay = function playing() {
  return this.play = "Baby JJ is so cute, and such a fun baby to play with"
};

Baby.prototype.cryCry = function crying() {
  return this.play = "Baby JJ is not cute when crying"
};

const babyJay = new Baby({ name: "baby jj", age: "8 months", play: "I want to play!", cry: "Weeemmmm weeemmmmm" });

/*
  TASK 4

  Use your imagination and come up with constructors that allow to build objects
  With amazing and original capabilities. Build 3 small ones, or a very
  complicated one with lots of state. Surprise us!
*/

function Student(attributes) {
  this.course = attributes.course;
  this.weight = attributes.weight;
  this.height = attributes.height;
  this.gender = attributes.gender;
}

Student.prototype.intro = function() {
  console.log(`Welcome to Lambda ${this.course}`);
}

function Department(courseAttributes) {
  
  Student.call(this, courseAttributes);
  this.name = courseAttributes.name;
  this.pass = courseAttributes.pass;
}

Department.prototype = Object.create(Student.prototype);

Department.prototype.celebrate = function() {
  console.log(`${this.name}, ${this.pass}`);
}

const jj = new Department({
  'name': 'JS III',
  'course': "webeu3",
  'weight': 40,
  'height': 12,
  'gender': 'male',
  'pass': 'yes I passed it!'
});

jj.intro();
jj.celebrate();


/*

  STRETCH TASK

  Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/
