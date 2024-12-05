// Задача 1 (легка)

// Створіть базовий клас Animal, який має:
//  1. Властивість name, яку отримує через конструктор.
//  2. Метод speak, який повертає рядок "The animal makes a sound.".

// Створіть клас Dog, який наслідує клас Animal, і:
//  1. Має метод speak, який повертає рядок "The dog barks.".
// створіть екземпляр класу Dog і викличте метод speak.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return "The animal makes a sound.";
  }
}

class Dog extends Animal {
  speak() {
    return "The dog barks.";
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.speak());

console.log("\n");

// Задача 2 (легка)

// Створіть базовий клас Person, який має:
//  1. Властивість name, яку отримує через конструктор.
//  2. Метод introduce, який повертає рядок "Hi, I'm [name].".

// Створіть клас Student, який наслідує клас Person, і:
//  1. Має додаткову властивість grade, яку отримує через конструктор.
//  2. Перевизначає метод introduce, щоб повертати рядок:
// "Hi, I'm [name] and I'm in grade [grade].".
// створіть екземпляр класу Student і викличте метод introduce.

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Hi, I'm ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  introduce() {
    return `Hi, I'm ${this.name} and I'm in grade ${this.grade}.`;
  }
}

const student = new Student("Alice", "10th");
console.log(student.introduce());

console.log("\n");

// Задача 3 (середня)

// Створіть базовий клас Vehicle, який має:
//  1. Властивість brand, яку отримує через конструктор.
//  2. Метод getDetails, який повертає рядок "This is a vehicle made by [brand].".

// Створіть клас Car, який наслідує клас Vehicle, і:
//  1. Має додаткову властивість model, яку отримує через конструктор.
//  2. Перевизначає метод getDetails, щоб повертати рядок:
// "This is a [brand] car, model [model].".
// створіть екземпляр класу Car і викличте метод getDetails.

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  getDetails() {
    return `This is a vehicle made by ${this.brand}.`;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  getDetails() {
    return `This is a ${this.brand} car, model ${this.model}.`;
  }
}

const car = new Car("Toyota", "Corolla");
console.log(car.getDetails());

console.log("\n");

// Задача 4 (середня)

// Створіть базовий клас Shape, який має:
//  1. Метод calculateArea, який повертає рядок "Area calculation is not defined for this shape.".

// Створіть класи Rectangle і Circle, які наслідують клас Shape, і:
//  1. У класі Rectangle є властивості width і height, отримані через конструктор, і метод calculateArea, який повертає площу прямокутника.
//  2. У класі Circle є властивість radius, отримана через конструктор, і метод calculateArea, який повертає площу круга.
// створіть екземпляри класів Rectangle і Circle, викличте метод calculateArea для кожного з них.

class Shape {
  calculateArea() {
    return "Area calculation is not defined for this shape.";
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const rectangle = new Rectangle(10, 20);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);
const circle = new Circle(5);
console.log(`Circle area: ${circle.calculateArea()}`);

console.log("\n");

// Задача 5 (складна)

// Створіть базовий клас Employee, який має:
//  1. Властивості name і position, які отримує через конструктор.
//  2. Метод getDetails, який повертає рядок "Employee [name] holds the position of [position].".

// Створіть клас Manager, який наслідує клас Employee, і:
//  1. Має додаткову властивість department, яку отримує через конструктор.
//  2. Перевизначає метод getDetails, щоб повертати рядок:
// "Manager [name] manages the [department] department.".
// створіть екземпляр класу Manager і викличте метод getDetails.

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  getDetails() {
    return `Employee ${this.name} holds the position of ${this.position}`;
  }
}

class Manager extends Employee {
  constructor(name, position, department) {
    super(name, position);
    this.department = department;
  }

  getDetails() {
    return `Manager ${this.name} manages the ${this.department} department.`;
  }
}

const manager = new Manager("Alice", "Team Lead", "IT");
console.log(manager.getDetails());

console.log("\n");

// Задача 6 (складна)

// Створіть базовий клас Account, який має:
//  1. Властивість balance, яка отримує початкове значення через конструктор.
//  2. Метод getBalance, який повертає баланс.

// Створіть клас SavingsAccount, який наслідує клас Account, і:
//  1. Має додаткову властивість interestRate, яку отримує через конструктор.
//  2. Метод calculateInterest, який обчислює і повертає суму нарахованих відсотків.
// створіть екземпляр класу SavingsAccount, встановіть баланс і відсоткову ставку, обчисліть нараховані відсотки.

class Account {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  constructor(balance, interestRate) {
    super(balance);
    this.interestRate = interestRate;
  }

  calculateInterest() {
    return this.balance * (this.interestRate / 100);
  }
}

const savingsAccount = new SavingsAccount(1000, 5);
console.log(`Balance: $${savingsAccount.getBalance()}`);
console.log(`Accrued Interest: $${savingsAccount.calculateInterest()}`);

// Ці задачі допоможуть вам розібратися з основами роботи з наслідуванням у класах, перевизначенням методів і додаванням нових властивостей у підкласах.
