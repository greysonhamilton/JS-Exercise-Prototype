/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.poop = false;
}

Person.prototype.eat = function (someFood) {

  for (let i = 0; i < 10; i++) {

    if (this.stomach[i] < 10) {

      this.stomach = this.stomach.push[someFood];

    } else {

      return `${this.name} is full and cannot eat any more. ${this.name} may need to use the restroom.`

    }

  };

}

Person.prototype.empty = function () {
  
  for (let i = 0; i < 10; i++)
  
  if (this.stomach[i] < 10) {
  
    this.poop = false;
  
  } else {

    this.stomach.length = 0;

    return `${this.name} is ${this.age} and they have eaten so much that they are ready to stink up the out house.`;
   
  }
  
};  const lukas = new Person('Lukas', 13);

console.log(lukas);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.tank = 0;
  this.milesPerGallon = milesPerGallon;
  this.odometer = 0;

  Car.prototype.fill = function (gallons) {

    this.tank += gallons;

  };

  Car.prototype.drive = function (distance) {
    this.odometer += distance;
    this.tank -= distance/this.milesPerGallon;

    if ((this.tank * this.milesPerGallon) < distance) {

      return 'I ran out of fuel at ${this.odometer} miles';

    }

  };

};  const crv = new Car('CR-V', 28);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby (name, age, favoriteToy) {

  Person.call(this, name, age);

  this.favoriteToy = favoriteToy;

}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {

  return `Playing with ${this.favoriteToy}.`;
    
  };

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. 'this' will appear on the left hand side with a reference to an instance.
  2. 'this' will refer to an object
  3. 'this' is a reference, unless used within a 'constructor function' it will not reach out of it's scope.
  It will reference within the 'constructor function'.
  4. 'this' will always return 'undefined' within 'strict mode'. Strict mode requires precise code, so referencing the name of an object by using this within a function would not work. You would have to give the specific name of the object.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
