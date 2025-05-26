// // class is the blue print of object ;

// class Vehicle {

//   // when the object is created this constuctor function is exectued
//   constructor(name, price, color) {
//     console.log("object initialzed", name);
//     // properties
//     this.name = name;
//     this.price = price;
//     this.color = color;
//   }

//   start() {
//     console.log(`${this.name} is started`);
//   }

//   stop() {
//     console.log("closed");
//   }
// }

// const vehicle1 = new Vehicle("cf", 700000, "black");
// const vehicle2 = new Vehicle("avenger", 800000, "black");

// features of class
// 1. Inheritance - allows us to create a new class based on an existing class, inheriting its properties and methods.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   intro() {
//     console.log(
//       `Hello ! My name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
// }

// //

// // creating an instance of the Person class

// const gajendraPerson = new Person("Gajendra", 21);
// const sushsantPerson = new Person("Sushant", 11);

// gajendraPerson.intro();
// sushsantPerson.intro();

// parent class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  intro() {
    console.log(
      `Hello ! My name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

//  inheritance ***************

// children class

class Student extends Person {
  constructor(name, age, rollNo, schoolName) {
    super(name, age); // call the constructor of the parent class
    this.rollNo = rollNo;
    this.schoolName = schoolName;
  }

  read() {
    console.log(`${this.name} is reading.`);
  }

  goToSchool() {
    console.log(`${this.name} is going to ${this.schoolName}.`);
  }
}

// creating an instance/object of the Student class

const student1 = new Student("Gajendra", 21, "123", "ABC School");

student1.intro(); // Hello ! My name is Gajendra and I am 21 years old.
student1.read(); // Gajendra is reading.
student1.goToSchool(); // Gajendra is going to ABC School.


// vehicle parent class 
// class Car extends Vehicle  {}