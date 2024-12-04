// Ось кілька задач для практики з використанням this в об’єктах для початківців:

// Задача 1 (легка)

// Створіть об’єкт user, який має властивості name і метод greet. Метод greet повинен повертати рядок "Hello, [name]!", використовуючи this для доступу до властивості name.

const user = {
  name: "Alice",
  greet() {
    return `Hello, ${this.name}!`;
  },
};

console.log(user.greet()); // "Hello, Alice!"

console.log("\n");

// Задача 2 (легка)

// Створіть об’єкт car з властивостями brand і model, а також методом getDescription. Метод повинен повертати рядок "Car: [brand] [model]", використовуючи this.

const car = {
  brand: "Toyota",
  model: "Corolla",
  getDescription() {
    return `Car: ${this.brand} ${this.model}`;
  },
};

console.log(car.getDescription()); // "Car: Toyota Corolla"

console.log("\n");

// Задача 3 (середня)

// Створіть об’єкт counter, який має властивість count (початкове значення 0) і методи:
//  • increment — збільшує значення count на 1.
//  • decrement — зменшує значення count на 1.
// Використовуйте this для доступу до властивості count.

const counter = {
  count: 0,
  increment() {
    this.count += 1;
  },
  decrement() {
    this.count -= 1;
  },
};

counter.increment();
console.log(counter.count); // 1
counter.decrement();
console.log(counter.count); // 0

console.log("\n");

// Задача 4 (середня)

// Створіть об’єкт rectangle, який має властивості width і height, а також метод calculateArea, що повертає площу прямокутника. Використовуйте this для доступу до ширини та висоти.

const rectangle = {
  width: 10,
  height: 5,
  calculateArea() {
    return this.width * this.height;
  },
};

console.log(rectangle.calculateArea()); // 50

console.log("\n");

// Задача 5 (складна)

// Створіть об’єкт bankAccount, який має:
//  • Властивість balance (початкове значення 1000).
//  • Метод deposit(amount), який додає amount до балансу.
//  • Метод withdraw(amount), який зменшує баланс на amount, якщо коштів достатньо, і повертає "Insufficient funds", якщо недостатньо.
// Використовуйте this для доступу до балансу.

const bankAccount = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    }
    return "Insufficient funds";
  },
};

bankAccount.deposit(500);
console.log(bankAccount.balance); // 1500
bankAccount.withdraw(200);
console.log(bankAccount.balance); // 1300
console.log(bankAccount.withdraw(2000)); // "Insufficient funds"
console.log(bankAccount.balance); // 1300

console.log("\n");

// Задача 6 (складна)

// Створіть об’єкт person, який має:
//  • Властивості firstName і lastName.
//  • Метод getFullName, який повертає повне ім’я у форматі "firstName lastName".
//  • Метод greet, який приймає рядок greeting і повертає "greeting, firstName lastName!".
// Використовуйте this для доступу до властивостей.

const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  greet(greeting) {
    return `${greeting}, ${person.getFullName()}`;
  },
};

console.log(person.getFullName()); // "John Doe"
console.log(person.greet("Hello")); // "Hello, John Doe!"

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі навчать вас використовувати this для доступу до властивостей і методів об’єкта, а також для створення динамічної логіки у методах.
