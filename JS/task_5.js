// Задача 1 (легка)

// Створіть два об’єкти: animal і dog. Нехай dog буде створений на основі прототипу animal. Використайте метод isPrototypeOf, щоб перевірити, чи є animal прототипом для dog.

const animal = {
  canEat: true,
};

const dog = Object.create(animal);
dog.canBark = true;

console.log(animal.isPrototypeOf(dog));

console.log("\n");

// Задача 2 (середня)

// Створіть конструктор Person, який створює об’єкти з властивістю name. Додайте об’єкт employee, який буде створений із прототипу Person.prototype. Використайте isPrototypeOf, щоб перевірити, чи є Person.prototype прототипом для employee.

function Person(name) {
  this.name = name;
}

const employee = Object.create(Person.prototype);

console.log(Person.prototype.isPrototypeOf(employee));

console.log("\n");

// Задача 3 (середня)

// Створіть об’єкт vehicle із методом start. Використайте його як прототип для об’єкта car, додавши властивість brand. Перевірте, чи є vehicle прототипом для car, використовуючи isPrototypeOf.

const vehicle = {
  start() {
    console.log("Engine started");
  },
};

const car = Object.create(vehicle);
car.brand = "Toyota";

console.log(vehicle.isPrototypeOf(car));

console.log("\n");

// Задача 4 (складна)

// Створіть три рівні прототипного ланцюжка:
//  1. livingBeing із властивістю isAlive.
//  2. animal на основі livingBeing.
//  3. mammal на основі animal.

// Використайте isPrototypeOf, щоб перевірити:
//  1. Чи є livingBeing прототипом для mammal.
//  2. Чи є animal прототипом для mammal.

const livingBeing = {
  isAlive: true,
};

const animals = Object.create(livingBeing);
animal.canMove = true;

const mammal = Object.create(animals);
mammal.hasFur = true;

console.log(livingBeing.isPrototypeOf(mammal));
console.log(animals.isPrototypeOf(mammal));

console.log("\n");

// Задача 5 (складна)

// Напишіть функцію checkPrototype, яка приймає два об’єкти та перевіряє, чи є перший об’єкт прототипом для другого, використовуючи isPrototypeOf. Поверніть true або false.

function checkPrototype(proto, obj) {
  return proto.isPrototypeOf(obj);
}

const baseObject = {};
const derivedObject = Object.create(baseObject);

console.log(checkPrototype(baseObject, derivedObject)); // true
console.log(checkPrototype({}, derivedObject)); // false

// Ці задачі допоможуть вам розібратися з роботою прототипів у JavaScript та використанням методу isPrototypeOf для перевірки прототипного ланцюжка.
