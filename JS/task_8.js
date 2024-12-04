// Задача 1 (легка)

// Створіть клас Person, який має:
//  • конструктор із параметрами name і age,
//  • метод introduce, який повертає рядок "Hi, I'm [name] and I'm [age] years old.".
// створіть два екземпляри класу з різними даними та викличте метод introduce для кожного.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  intrduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

const mango = new Person("Mango", 26);

const mars = new Person("Mars", 18);

console.log(mango.intrduce());
console.log(mars.intrduce());

console.log("\n");

// Задача 2 (легка)

// Створіть клас Rectangle, який має:
//  • конструктор із параметрами width і height,
//  • метод calculateArea, який повертає площу прямокутника.
//  створіть екземпляр класу з шириною 10 і висотою 5, обчисліть його площу за допомогою методу calculateArea.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const figure = new Rectangle(10, 5);
console.log(figure.calculateArea());

console.log("\n");

// Задача 3 (середня)

// Створіть клас Car, який має:
//  • конструктор із параметрами brand і model,
//  • властивість speed, яка починається з 0,
//  • метод accelerate(amount), який збільшує швидкість на amount,
//  • метод brake(amount), який зменшує швидкість на amount, але не дозволяє швидкості бути менше 0.
//  створіть екземпляр класу Car, збільшіть його швидкість на 50, потім зменшіть на 30, і виведіть поточну швидкість.

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }

  accelerate(amount) {
    return (this.speed += amount);
  }

  brake(amount) {
    return this.speed < 0 ? 0 : (this.speed -= amount);
  }
}

const Car1 = new Car("BMW", "X6");
Car1.accelerate(50);
Car1.brake(30);
console.log(Car1.speed);

console.log("\n");

// Задача 4 (середня)

// Створіть клас Book, який має:
//  • конструктор із параметрами title, author, і pages,
//  • метод getSummary, який повертає рядок: "The book [title] by [author] has [pages] pages.".
// створіть екземпляр класу Book і викличте метод getSummary.

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getSummary() {
    return `The book ${this.title} by ${this.author} has ${this.pages} pages.`;
  }
}

const firstBoock = new Book(
  "Le Compte de Monte-Cristo",
  "Alexandre Dumas",
  1500
);
console.log(firstBoock.getSummary());

console.log("\n");

// Задача 5 (складна)

// Створіть клас Student, який має:
//  • конструктор із параметрами name і grades (масив оцінок),
//  • метод calculateAverage, який повертає середнє значення оцінок.
// створіть екземпляр класу Student із оцінками [90, 80, 70], обчисліть середнє значення за допомогою методу calculateAverage.

class Student {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
  }

  calculateAverage() {
    let count = 0;
    for (const element of this.grades) {
      count += element;
    }
    return count / this.grades.length;
  }
}

const anna = new Student("Anna", [90, 80, 70]);
console.log(anna.calculateAverage());

console.log("\n");

// Задача 6 (складна)

// Створіть клас Employee, який має:
//  • конструктор із параметрами name, position, і salary,
//  • метод getDetails, який повертає рядок: "Employee [name] works as a [position] and earns $[salary].".
// створіть кілька екземплярів класу та викличте метод getDetails для кожного.

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getDetails() {
    return `Employee ${this.name} works as a ${this.position} and earns ${this.salary}.`;
  }
}

const employee1 = new Employee("Ivan", "manager", 3250);
const employee2 = new Employee("Sveta", "supervisor", 3000);

console.log(employee1.getDetails());
console.log(employee2.getDetails());

// Ці задачі допоможуть вам зрозуміти основи роботи з класами в JavaScript, включаючи створення конструкторів, методів та взаємодію з екземплярами.
