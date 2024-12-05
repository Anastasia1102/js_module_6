// Задача 1 (легка)

// Створіть клас MathUtils, який має:
//  1. Статичний метод add, що приймає два числа і повертає їх суму.
//  викличте метод add без створення екземпляра класу.

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 10));

console.log("\n");

// Задача 2 (легка)

// Створіть клас Counter, який має:
//  1. Статичну властивість count, яка починається з 0.
//  2. Статичний метод increment, який збільшує count на 1.
// кілька разів викличте метод increment і виведіть значення count.

class Counter {
  static count = 0;

  static increment() {
    return this.count++;
  }
}

Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();

console.log(Counter.count);

console.log("\n");

// Задача 3 (середня)

// Створіть клас Converter, який має:
//  1. Статичний метод celsiusToFahrenheit, який перетворює температуру з Цельсія у Фаренгейти.
//  2. Статичний метод fahrenheitToCelsius, який перетворює температуру з Фаренгейта у Цельсій.
// Формули:
//  • °F = °C × 1.8 + 32
//  • °C = (°F - 32) / 1.8
//  викличте обидва методи без створення екземпляра класу.

class Converter {
  static celsiusToFahrenheit(value) {
    return value * 1.8 + 32;
  }

  static fahrenheitToCelsius(value) {
    return (value - 32) / 1.8;
  }
}

const celsius = 25;
const fahrenheit = 77;

console.log(`${celsius}°C = ${Converter.celsiusToFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F = ${Converter.fahrenheitToCelsius(fahrenheit)}°C`);

console.log("\n");

// Задача 4 (середня)

// Створіть клас User, який має:
//  1. Статичну властивість userCount, що зберігає кількість створених користувачів.
//  2. Конструктор, який збільшує значення userCount при створенні нового екземпляра.
//  створіть кілька екземплярів класу і виведіть значення userCount.

class User {
  static userCount = 0;

  constructor(name) {
    this.name = name;
    User.userCount++;
  }
}

const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

console.log(`Number of users: ${User.userCount}`);

console.log("\n");

// Задача 5 (складна)

// Створіть клас Geometry, який має:
//  1. Статичний метод calculateCircleArea, який приймає радіус і повертає площу круга.
//  2. Статичний метод calculateRectangleArea, який приймає ширину і висоту і повертає площу прямокутника.
//  викличте обидва методи без створення екземпляра класу.

class Geometry {
  static calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }

  static calculateRectangleArea(width, height) {
    return width * height;
  }
}

const circleRadius = 5;
const rectangleWidth = 10;
const rectangleHeight = 20;

console.log(`Circle area: ${Geometry.calculateCircleArea(circleRadius)}`);
console.log(
  `Rectangle area: ${Geometry.calculateRectangleArea(
    rectangleWidth,
    rectangleHeight
  )}`
);

console.log("\n");

// Задача 6 (складна)

// Створіть клас BankAccount, який має:
//  1. Статичну властивість totalAccounts, що зберігає кількість створених банківських рахунків.
//  2. Статичний метод getTotalAccounts, який повертає значення totalAccounts.
//  3. Конструктор, який збільшує значення totalAccounts при створенні нового екземпляра.
// створіть кілька екземплярів класу і отримайте загальну кількість рахунків за допомогою статичного методу.

class BankAccount {
  static totalAccounts = 0;

  constructor(owner) {
    this.owner = owner;
    BankAccount.totalAccounts++;
  }

  static getTotalAccounts() {
    return BankAccount.totalAccounts;
  }
}

const account1 = new BankAccount("Alice");
const account2 = new BankAccount("Bob");
const account3 = new BankAccount("Charlie");
console.log(`Total bank accounts: ${BankAccount.getTotalAccounts()}`);

// Ці задачі допоможуть вам зрозуміти, як використовувати статичні властивості та статичні методи для роботи з даними, спільними для всіх екземплярів класу, а також для створення утилітних методів, які не залежать від конкретного екземпляра.
