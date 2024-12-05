// Задача 1 (легка)

// Створіть клас User, який має:
//  1. Властивість _name.
//  2. Геттер name, який повертає значення _name.
//  3. Сеттер name, який встановлює нове значення _name.
// створіть екземпляр класу, встановіть ім’я за допомогою сеттера і виведіть його за допомогою геттера.

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const user = new User("Alice");
user.name = "Bob";

console.log(user.name);

console.log("\n");

// Задача 2 (легка)

// Створіть клас Product, який має:
//  1. Властивість _price.
//  2. Геттер price, який повертає значення _price.
//  3. Сеттер price, який приймає значення і встановлює його, якщо воно більше за 0. Якщо значення недійсне, виведіть повідомлення "Invalid price".
// створіть екземпляр класу, встановіть ціну кілька разів (включаючи недійсне значення) і отримайте її за допомогою геттера.

class Product {
  constructor(price) {
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      return "Invalid price";
    }
  }
}

const item = new Product(1000);
item.price = 800;

console.log(item.price);

console.log("\n");

// Задача 3 (середня)

// Створіть клас Rectangle, який має:
//  1. Властивості _width і _height.
//  2. Геттери width і height, які повертають відповідні значення.
//  3. Сеттери width і height, які приймають значення і встановлюють їх, якщо вони більше за 0.
//  4. Геттер area, який обчислює і повертає площу прямокутника.
// створіть екземпляр класу, встановіть ширину і висоту, а потім отримайте площу.

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      return "Width must be greater than 0!";
    }
  }

  get height() {
    return this._height;
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      return "Height must be greater than 0!";
    }
  }

  get area() {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(46, 12);
rectangle.width = 37;
rectangle.height = 19;

console.log(`Area: ${rectangle.area}`);

console.log("\n");

// Задача 4 (середня)

// Створіть клас Person, який має:
//  1. Властивість _birthYear.
//  2. Геттер age, який обчислює вік на основі поточного року (2024).
//  3. Сеттер birthYear, який встановлює значення _birthYear, якщо воно в межах від 1900 до 2024.
// створіть екземпляр класу, встановіть рік народження і отримайте його вік.

class Person {
  constructor(birthYear) {
    this._birthYear = birthYear;
  }

  get age() {
    const currentYear = 2024;
    return currentYear - this._birthYear;
  }

  set birthYear(value) {
    if (value >= 1900 && value <= 2024) {
      this._birthYear = value;
    } else {
      console.log("Invalid birth year. It must be between 1900 and 2024.");
    }
  }
}

const person = new Person(2000);
person.birthYear = 1990;
console.log(`Age: ${person.age}`);

console.log("\n");

// Задача 5 (складна)

// // Створіть клас BankAccount, який має:
// //  1. Властивість _balance.
// //  2. Геттер balance, який повертає поточний баланс.
// //  3. Сеттер balance, який дозволяє встановлювати баланс, якщо сума більша або дорівнює 0.
// //  4. Метод deposit(amount), який збільшує баланс.
// //  5. Метод withdraw(amount), який зменшує баланс, якщо сума не перевищує поточного балансу.
// // створіть екземпляр класу, внесіть кошти, зніміть їх, і перевірте поточний баланс.

class BankAccount {
  constructor(initialBalance = 0) {
    this._balance = initialBalance;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (value >= 0) {
      this._balance = value;
    } else {
      console.log("Balance must be greater than or equal to 0.");
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be greater than 0.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else if (amount > this._balance) {
      console.log("Insufficient funds.");
    } else {
      console.log("Withdraw amount must be greater than 0.");
    }
  }
}

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
account.withdraw(200);
console.log(`Current balance: $${account.balance}`);

console.log("\n");

// Задача 6 (складна)

// Створіть клас Temperature, який має:
//  1. Властивість _celsius.
//  2. Геттер celsius, який повертає температуру в градусах Цельсія.
//  3. Сеттер celsius, який встановлює температуру в градусах Цельсія.
//  4. Геттер fahrenheit, який обчислює і повертає температуру у Фаренгейтах.
//  5. Сеттер fahrenheit, який приймає температуру у Фаренгейтах і обчислює значення для _celsius.
// Формули:
//  • °F = °C × 1.8 + 32
//  • °C = (°F - 32) / 1.8
//  створіть екземпляр класу, встановіть температуру в Цельсіях і отримайте її у Фаренгейтах, а потім навпаки.

class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(temperature) {
    this._celsius = temperature;
  }

  get fahrenheit() {
    return this._celsius * 1.8 + 32;
  }

  set fahrenheit(temperature) {
    this._celsius = (temperature - 32) / 1.8;
  }
}

const temp = new Temperature(25);
console.log(`Temperature in Fahrenheit: ${Math.round(temp.fahrenheit)}°F`);
temp.fahrenheit = 98.6;

console.log(`Temperature in Celsius: ${Math.round(temp.celsius)}°C`);

// Ці задачі навчать вас використовувати геттери та сеттери для роботи з властивостями класів, забезпечуючи інкапсуляцію і додаткову логіку при доступі до значень.
