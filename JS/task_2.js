// Задачі з call

// Задача 1 (легка)

// Створіть об’єкт person із властивістю name та функцію greet, яка приймає аргумент greeting. Використайте метод call, щоб викликати функцію з контекстом об’єкта person.

const person = {
  name: "Alice",
};

function greet(greeting) {
  return `${greeting}, ${this.name}!`;
}

console.log(greet.call(person, "Hello"));

console.log("\n");

// Задача 2 (середня)

// Створіть об’єкт car із властивістю brand. Напишіть функцію describeCar, яка приймає два аргументи: model і year. Використовуючи метод call, викличте функцію з контекстом об’єкта car.

const car = {
  brand: "Toyota",
};

function describeCar(model, year) {
  return `This is a ${this.brand} ${model} from ${year}.`;
}

console.log(describeCar.call(car, "Corolla", 2011));

console.log("\n");

// Задачі з apply

// Задача 3 (легка)

// Використовуйте метод apply, щоб знайти найбільше число у масиві numbers, використовуючи функцію Math.max.

const numbers = [10, 20, 30, 40];

const maxNumber = Math.max.apply(null, numbers);

console.log(maxNumber);

console.log("\n");

// Задача 4 (середня)

// Створіть об’єкт rectangle із властивостями width і height. Напишіть функцію calculateArea, яка повертає площу прямокутника. Використовуйте apply, щоб викликати функцію з контекстом об’єкта rectangle.

const rectangle = {
  width: 10,
  height: 5,
};

function calculateArea() {
  return this.width * this.height;
}

const area = calculateArea.apply(rectangle);

console.log(area);

console.log("\n");

// Задача 5 (легка)

// Створіть об’єкт user із властивістю name і функцією introduce. Використовуючи bind, створіть нову функцію introduceUser, яка завжди викликає introduce з контекстом об’єкта user.

const user = {
  name: "Charlie",
  introduce() {
    return `Hi, my name is ${this.name}.`;
  },
};

const introduceUser = user.introduce.bind(user);

console.log(introduceUser());
console.log("\n");

// Задача 6 (середня)

// Створіть об’єкт calculator із властивістю factor і методом multiplyBy, який приймає число і повертає його добуток із factor. Використовуючи bind, створіть функцію-колбек для методу map, яка множить кожен елемент масиву на factor.

const calculator = {
  factor: 2,
  multiplyBy(num) {
    return num * this.factor;
  },
};

const numbersArr = [1, 2, 3, 4];

const boundMultiplyBy = calculator.multiplyBy.bind(calculator);
const results = numbersArr.map(boundMultiplyBy);

console.log(results);

console.log("\n");
console.log("\n");
console.log("\n");

// Ці задачі охоплюють основи роботи з call, apply, і bind, і допоможуть вам зрозуміти, як ці методи використовуються для управління контекстом функцій.
