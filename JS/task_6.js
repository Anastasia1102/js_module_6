// Задача 1 (легка)

// Створіть об’єкт person із властивостями name та age. Додайте до прототипу цього об’єкта властивість species зі значенням "human". Використовуючи цикл for..in і метод hasOwnProperty, виведіть у консоль тільки власні властивості об’єкта person.// // Додайте властивість до прототипу person

const person = {
  name: "Alice",
  age: 25,
};

Object.prototype.species = "human";

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

console.log("\n");

// результат:
// name: Alice
// age: 25

// Задача 2 (середня)

// Створіть об’єкт animal із властивостями type та legs. Додайте до прототипу цього об’єкта властивість classification зі значенням "vertebrate". Напишіть функцію listOwnProperties, яка приймає об’єкт і повертає масив його власних властивостей.

const animal = {
  type: "Mammal",
  legs: 4,
};

Object.prototype.classification = "vertebrate";

function listOwnProperties(obj) {
  const arr = [];
  for (const key in obj) {
    if (animal.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  return arr;
}

console.log(listOwnProperties(animal)); // ["type", "legs"]

console.log("\n");

// Задача 3 (складна)

// Створіть об’єкт car із властивостями brand і model. Додайте до прототипу цього об’єкта властивість wheels зі значенням 4. Напишіть функцію logOwnProperties, яка приймає об’єкт і виводить у консоль усі його власні властивості у форматі key: value.

const car = {
  brand: "Toyota",
  model: "Corolla",
};

Object.prototype.wheels = 4;

function logOwnProperties(obj) {
  for (const key in obj) {
    if (car.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

logOwnProperties(car);

console.log("\n");

// Очікуваний результат:
// brand: Toyota
// model: Corolla

// Задача 4 (складна)

// Створіть об’єкт book із властивостями title і author. Додайте до прототипу цього об’єкта властивість genre. Напишіть функцію getOwnPropertyCount, яка приймає об’єкт і повертає кількість його власних властивостей, використовуючи hasOwnProperty.

const book = {
  title: "1984",
  author: "George Orwell",
};

Object.prototype.genre = "fiction";

function getOwnPropertyCount(obj) {
  let count = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      count += 1;
    }
  }
  return count;
}

console.log(getOwnPropertyCount(book)); // 2

// Ці задачі допоможуть вам зрозуміти, як працювати з власними і успадкованими властивостями об’єктів, використовуючи метод hasOwnProperty і цикл for..in.
