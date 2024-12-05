// Задача 1 (легка)

// Створіть клас Product, який використовує патерн “об’єкт параметрів” у своєму конструкторі.
// Конструктор приймає один об’єкт із такими властивостями:
//  • name (назва продукту),
//  • price (ціна продукту),
//  • category (категорія продукту).

// Клас повинен мати метод getDetails, який повертає рядок у форматі:
// "Product: [name], Price: $[price], Category: [category]".
//  створіть екземпляр класу та викличте метод getDetails.

class Product {
  constructor(params) {
    this.name = params.name;
    this.price = params.price;
    this.category = params.category;
  }

  getDetails() {
    return `Product: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
  }
}

const item = new Product({
  name: "Samsung s24 ultra",
  price: 1200,
  category: "Phone",
});

console.log(item.getDetails());

console.log("\n");

// Задача 2 (середня)

// Створіть клас User, який використовує патерн “об’єкт параметрів” у своєму конструкторі.
// Конструктор приймає один об’єкт із такими властивостями:
//  • username (ім’я користувача),
//  • email (електронна пошта),
//  • age (вік користувача, за замовчуванням 18).

// Клас повинен мати метод getInfo, який повертає рядок у форматі:
// "User: [username], Email: [email], Age: [age]".
// створіть екземпляр класу з об’єктом, який містить значення для всіх властивостей, і викличте метод getInfo.

class User {
  constructor(params) {
    this.username = params.username;
    this.email = params.email;
    this.age = params.age;
  }

  getInfo() {
    return `User: ${this.username}, Email: ${this.email}, Age: ${this.age}`;
  }
}

const mango = new User({ username: "Mango", email: "mango@mail.com", age: 16 });
console.log(mango.getInfo());

console.log("\n");

// Задача 3 (середня)

// Створіть клас Order, який використовує патерн “об’єкт параметрів” у своєму конструкторі.
// Конструктор приймає один об’єкт із такими властивостями:
//  • orderId (ідентифікатор замовлення),
//  • products (масив назв продуктів),
//  • totalAmount (загальна сума).

// Клас повинен мати метод getSummary, який повертає рядок у форматі:
// "Order #[orderId]: [products.join(", ")] - Total: $[totalAmount]".
//  створіть екземпляр класу та викличте метод getSummary.

class Order {
  constructor(params) {
    this.orderId = params.orderid;
    this.products = params.products;
    this.totalAmount = params.totalAmount;
  }

  getSummary() {
    return `Order #${this.orderId}: ${this.products.join(", ")} - Total: ${
      this.totalAmount
    }`;
  }
}

const order1 = new Order({
  orderId: 123,
  products: ["Laptop", "Mouse", "Keyboard"],
  totalAmount: 1500,
});
console.log(order1.getSummary());

console.log("\n");

// Задача 4 (складна)

// Створіть клас Employee, який використовує патерн “об’єкт параметрів” у своєму конструкторі.
// Конструктор приймає один об’єкт із такими властивостями:
//  • name (ім’я працівника),
//  • position (посада працівника),
//  • salary (зарплата працівника),
//  • isActive (чи активний працівник, за замовчуванням true).

// Клас повинен мати:
//  1. Метод getDetails, який повертає рядок:
// "Employee [name] works as a [position] and earns $[salary].".
//  2. Метод deactivate, який встановлює властивість isActive у значення false.
// створіть екземпляр класу, викличте метод getDetails, потім деактивуйте працівника і перевірте значення isActive.

class Employee {
  constructor({ name, position, salary, isActive }) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.isActive = isActive;
  }

  getDetails() {
    return `Employee ${this.name} works as a ${this.position} and earns ${this.salary}.`;
  }

  deactivate() {
    this.isActive = false;
  }
}

const employee1 = new Employee({
  name: "Ivan",
  position: "manager",
  salary: 3250,
  isActive: true,
});
const employee2 = new Employee({
  name: "Sveta",
  position: "supervisor",
  salary: 3000,
  isActive: true,
});

employee1.deactivate();

console.log(employee1.getDetails());
console.log(employee1.isActive);
console.log(employee2.getDetails());

console.log("\n");

// Задача 5 (складна)

// Створіть клас Movie, який використовує патерн “об’єкт параметрів” у своєму конструкторі.
// Конструктор приймає один об’єкт із такими властивостями:
//  • title (назва фільму),
//  • director (режисер),
//  • year (рік випуску),
//  • genres (масив жанрів).

// Клас повинен мати:
//  1. Метод getDescription, який повертає рядок:
// "Movie: [title] (Directed by [director], [year]).".
//  2. Метод getGenres, який повертає жанри у форматі:
// "Genres: [genres.join(", ")]".
// створіть екземпляр класу, викличте обидва методи.

class Movie {
  constructor({ title, director, year, genres }) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.genres = genres;
  }

  getDescription() {
    return `Movie: ${this.title} (Directed by ${this.director}, ${this.year}).`;
  }

  getGenres() {
    return `Genres: ${this.genres.join(", ")}`;
  }
}

const firstMovie = new Movie({
  title: "InsideOut",
  director: "Arthure Smith",
  year: 2019,
  genres: ["fiction", "comedy", "detective"],
});

console.log(firstMovie.getDescription());
console.log(firstMovie.getGenres());

// Ці задачі допоможуть зрозуміти, як використовувати патерн “об’єкт параметрів” для передачі даних у класи, створювати гнучкі й читабельні конструктори, а також реалізовувати методи класу.
