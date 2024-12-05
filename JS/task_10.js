// Задача 1 (легка)

// Створіть клас Counter, який має:
//  1. Приватну властивість #count, яка починається з 0.
//  2. Публічні методи:
//  • increment() — збільшує значення #count на 1.
//  • getCount() — повертає поточне значення #count.
// створіть екземпляр класу, збільшіть значення #count кілька разів, потім отримайте його поточне значення за допомогою getCount().

class Counter {
  #count;
  constructor() {
    this.#count = 0;
  }

  increment() {
    this.#count++;
  }
  getCount() {
    return this.#count;
  }
}

const number = new Counter();
number.increment();
number.increment();
number.increment();
number.increment();

console.log(number.getCount());

console.log("\n");

// Задача 2 (легка)

// Створіть клас BankAccount, який має:
//  1. Приватну властивість #balance, яка починається з переданого значення.
//  2. Публічні методи:
//  • deposit(amount) — додає передану суму до #balance.
//  • getBalance() — повертає поточний баланс.
// створіть екземпляр класу з початковим балансом 1000, внесіть 500 на рахунок і отримайте поточний баланс.

class BankAccount {
  #balance;
  constructor(num) {
    this.#balance = num;
  }
  deposit(amount) {
    return (this.#balance += amount);
  }

  getBalance() {
    return this.#balance;
  }
}

const firstAccount = new BankAccount(1000);
firstAccount.deposit(500);

console.log(firstAccount.getBalance());

console.log("\n");

// Задача 3 (середня)

// Створіть клас User, який має:
//  1. Приватну властивість #password.
//  2. Публічні методи:
//  • setPassword(newPassword) — встановлює новий пароль.
//  • checkPassword(password) — повертає true, якщо переданий пароль збігається з #password, інакше повертає false.
// створіть екземпляр класу, встановіть пароль, а потім перевірте його кілька разів із різними значеннями.

class User {
  #password;

  constructor() {
    this.#password = 156478;
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  checkPassword(password) {
    return password === this.#password ? true : false;
  }
}

const firstUser = new User();
firstUser.setPassword(444698);

console.log(firstUser.checkPassword(156478));

console.log("\n");

// Задача 4 (середня)

// Створіть клас Rectangle, який має:
//  1. Приватні властивості #width і #height.
//  2. Публічні методи:
//  • setDimensions(width, height) — встановлює значення для #width і #height.
//  • calculateArea() — повертає площу прямокутника.
// створіть екземпляр класу, встановіть розміри прямокутника та обчисліть його площу.

class Rectangle {
  #width;
  #height;

  setDimensions(width, height) {
    this.#width = width;
    this.#height = height;
  }

  calculateArea() {
    return this.#width * this.#height;
  }
}

const figure = new Rectangle();
figure.setDimensions(12, 7);

console.log(figure.calculateArea());

console.log("\n");

// Задача 5 (складна)

// Створіть клас SecureNote, який має:
//  1. Приватні властивості #content та #password.
//  2. Приватний метод #isPasswordValid(password), який повертає true, якщо пароль збігається з #password.
//  3. Публічні методи:
//  • setContent(content, password) — встановлює вміст нотатки, якщо пароль правильний.
//  • getContent(password) — повертає вміст нотатки, якщо пароль правильний, або рядок "Access denied".
// створіть екземпляр класу, задайте пароль і вміст нотатки, а потім спробуйте отримати вміст із правильним та неправильним паролем.

class SecureNote {
  #content = "";
  #password;

  constructor(password) {
    this.#password = password;
  }

  #isPasswordValid(password) {
    return password === this.#password;
  }

  setContent(content, password) {
    if (this.#isPasswordValid(password)) {
      this.#content = content;
    } else {
      console.log("Access denied: Invalid password.");
    }
  }

  getContent(password) {
    if (this.#isPasswordValid(password)) {
      return this.#content;
    } else {
      return "Access denied";
    }
  }
}

const note = new SecureNote("secure123");

note.setContent("This is a secure note.", "secure123");

console.log(note.getContent("secure123"));
console.log(note.getContent("wrongpass"));

console.log("\n");

// Задача 6 (складна)

// Створіть клас Employee, який має:
//  1. Приватну властивість #salary.
//  2. Приватний метод #validateSalary(amount) — перевіряє, чи сума більша за 0.
//  3. Публічні методи:
//  • setSalary(amount) — встановлює зарплату, якщо вона проходить перевірку в #validateSalary.
//  • getSalary() — повертає поточну зарплату.
// створіть екземпляр класу, встановіть кілька значень зарплати (включаючи недійсне), і отримайте поточну зарплату.

class Employee {
  #salary = 0;

  #validateSalary(amount) {
    return amount > 0;
  }

  setSalary(amount) {
    if (this.#validateSalary(amount)) {
      this.#salary = amount;
    }
  }

  getSalary() {
    return this.#salary;
  }
}

const worker = new Employee();

worker.setSalary(1600);

console.log(worker.getSalary());

// Ці задачі допоможуть вам зрозуміти, як працюють приватні властивості та методи у класах, а також навчать застосовувати інкапсуляцію для захисту даних та логіки об’єкта.
