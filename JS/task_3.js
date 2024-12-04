// Задача 1 (легка)

// У вас є об’єкт із властивістю name та функція greet, яка вітає це ім’я. Використовуйте bind, щоб створити функцію-колбек, яка завжди викликає greet із правильним контекстом.Використайте створений колбек у методі setTimeout, щоб через 1 секунду вивести привітання.

const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};
const greetTimeout = person.greet.bind(person);

// setTimeout(greetTimeout, 1000);

// Задача 2 (легка)

// Напишіть об’єкт counter, який має властивість count і метод increment, що збільшує count на 1. Використовуючи bind, створіть колбек для кнопки, який викликає метод increment із правильним контекстом.Симулюйте виклик колбека для кнопки тричі (наприклад, через виклики функції).

const counter = {
  count: 0,
  increment() {
    this.count += 1;
    console.log(this.count);
  },
};

const countButton = counter.increment.bind(counter);

countButton();
countButton();
countButton();

console.log("\n");

// Задача 3 (середня)

// У вас є об’єкт user із властивостями name та функцією getDetails. Використовуйте bind, щоб передати правильний контекст у колбек, який використовується в масиві.Використайте створену функцію getDetails як колбек для масиву callbackArray, щоб при виклику всіх елементів масиву вони повертали правильне ім’я.

const user = {
  name: "John",
  getDetails() {
    return `User: ${this.name}`;
  },
};

const boundGetDetails = user.getDetails.bind(user);

const callbackArray = [boundGetDetails, boundGetDetails];

callbackArray.forEach((callback) => {
  console.log(callback());
});

console.log("\n");

// Задача 4 (середня)

// Створіть об’єкт calculator із методом multiply, який множить число на властивість factor. Використовуючи bind, створіть функцію-колбек, яка завжди викликає метод multiply із правильним контекстом.Використовуйте створений колбек для обчислення значень масиву [1, 2, 3, 4] методом map.

const calculator = {
  factor: 10,
  multiply(num) {
    return num * this.factor;
  },
};

const boundCalculator = calculator.multiply.bind(calculator);

const arr = [1, 2, 3, 4];

console.log(arr.map(boundCalculator));

console.log("\n");

// Задача 5 (складна)

// Створіть об’єкт logger, який має властивість prefix та метод logMessage, що приймає рядок і повертає його з доданим префіксом. Використовуючи bind, створіть кілька колбеків із різними префіксами.Створіть два колбеки:
//  1. Один із префіксом "INFO:".
//  2. Інший із префіксом "ERROR:".
// Використайте ці колбеки для створення повідомлень "Server started" та "Server crashed".

const logger = {
  prefix: "",
  logMessage(message) {
    return `${this.prefix} ${message}`;
  },
};

const firstPrefix = logger.logMessage.bind({ prefix: "INFO:" });
const secondPrefix = logger.logMessage.bind({ prefix: "ERROR:" });

console.log(firstPrefix("Server started"));
console.log(secondPrefix("Server crashed"));

console.log("\n");

// Ці задачі допоможуть вам зрозуміти, як використовувати bind у колбеках для передачі правильного контексту.
