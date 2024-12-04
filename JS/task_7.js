// Задача 1 (легка)

// Створіть об’єкт person із властивостями name, age, і city. Використовуйте Object.keys і for...of, щоб вивести всі ключі об’єкта в консоль.

const person = {
  name: "Alice",
  age: 25,
  city: "Kyiv",
};

for (const element of Object.keys(person)) {
  console.log(element);
}

console.log("\n");

// Очікуваний результат:
// name
// age
// city

// Задача 2 (легка)

// Створіть об’єкт car із властивостями brand, model, і year. Використовуйте Object.values і for...of, щоб вивести всі значення об’єкта в консоль.

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

for (const element of Object.values(car)) {
  console.log(element);
}

console.log("\n");

// Очікуваний результат:
// Toyota
// Corolla
// 2020

// Задача 3 (середня)

// Створіть об’єкт animal із властивостями type, name, і age. Використовуючи Object.entries і for...of, виведіть у консоль кожну пару ключ-значення у форматі: key: value.

const animal = {
  type: "Dog",
  name: "Buddy",
  age: 5,
};

for (const [key, value] of Object.entries(animal)) {
  console.log(`${key}: ${value}`);
}

// Очікуваний результат:
// type: Dog
// name: Buddy
// age: 5

console.log("\n");

// Задача 4 (середня)

// Створіть об’єкт book із властивостями title, author, і pages. Використовуйте Object.keys і for...of, щоб створити масив ключів, значення яких є рядками.

const book = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
};

for (const key of Object.keys(book)) {
  if (typeof book[key] === "string") {
    console.log(key);
  }
}

console.log("\n");

// Очікуваний результат: ["title", "author"]

// Задача 5 (складна)

// Створіть об’єкт student із властивостями name, age, і grades. Використовуйте Object.values і for...of, щоб обчислити суму всіх числових значень у об’єкті.

const student = {
  name: "John",
  age: 20,
  grades: 85,
};

let count = 0;

for (const value of Object.values(student)) {
  if (typeof value === "number") {
    count += value;
  }
}
console.log(count);

console.log("\n");

// Очікуваний результат:105

// Задача 6 (складна)

// Створіть об’єкт product із властивостями name, price, і inStock. Використовуйте Object.entries і for...of, щоб створити новий об’єкт, у якому всі ключі перетворені у верхній регістр.

const product = {
  name: "Laptop",
  price: 1200,
  inStock: true,
};
const obj = {};
for (const [key, value] of Object.entries(product)) {
  obj[key.toUpperCase()] = value;
}

console.log(obj);

// Очікуваний результат:
// {
//   NAME: "Laptop",
//   PRICE: 1200,
//   INSTOCK: true
// }

// Ці задачі допоможуть вам попрактикувати роботу з власними властивостями об’єкта, використовуючи Object.keys, Object.values, і Object.entries у поєднанні з циклом for...of.
