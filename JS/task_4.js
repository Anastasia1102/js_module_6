// Задача 1 (легка)

// Створіть об’єкт user із властивістю name та методом greet. Використовуйте стрілочну функцію у методі greet, щоб повернути рядок привітання: "Hello, [name]!".Використовуйте властивість name через this у стрілочній функції.

const user = {
  name: "Alice",
  greet() {
    const getMessage = () => `Hello, ${this.name}!`;
    return getMessage();
  },
};

console.log(user.greet()); // "Hello, Alice!"

console.log("\n");

// Задача 2 (легка)

// Створіть об’єкт timer, який має властивість seconds і метод start. У цьому методі викличте функцію setTimeout, яка через 1 секунду збільшить seconds на 1.Використайте стрілочну функцію у setTimeout, щоб зберегти контекст об’єкта.Через 1 секунду: timer.seconds = 1

const timer = {
  seconds: 0,
  start() {
    setTimeout(() => {
      this.seconds += 1;
      console.log(`Seconds: ${this.seconds}`);
    }, 1000);
  },
};

// timer.start();

// Задача 3 (середня)

// Створіть об’єкт counter із властивостями:
//  • count, яка починається з 0,
//  • increment, яка збільшує count на 1.
// Використовуйте стрілочну функцію для створення методу increment, щоб уникнути втрати контексту під час передачі методу як колбека./ // Емулюйте виклик методу як колбека// // counter.count повинно збільшитися на 1

const counter = {
  count: 0,
  increment: () => {
    counter.count += 1;
    console.log(`Count: ${counter.count}`);
  },
};

const callback = counter.increment;

callback();

console.log("\n");

// Задача 4 (середня)

// Напишіть функцію-конструктор User, яка створює об’єкти з властивістю name. Додайте метод greet, який повертає привітання "Hello, [name]!".Умова: Використовуйте стрілочну функцію для методу greet, щоб зберегти контекст об’єкта, навіть якщо метод викликається окремо.

function User(name) {
  this.name = name;
  this.greet = () => {
    return `Hello, ${this.name}!`;
  };
}

const alice = new User("Alice");
const greet = alice.greet;

console.log(greet()); // "Hello, Alice!"

console.log("\n");

// Задача 5 (складна)

// Створіть об’єкт team із властивостями:
//  • members — масив імен членів команди,
//  • teamName — назва команди,
//  • getIntroduction — метод, який повертає рядок: "Team [teamName]: [member1], [member2], ...".
// Використовуйте стрілочну функцію у методі getIntroduction для коректного доступу до this.// // "Team Super Coders: Alice, Bob, Charlie"

const team = {
  members: ["Alice", " Bob", " Charlie"],
  teamName: "Super Coders",
  getIntroduction() {
    const introduction = () => `Team ${this.teamName}: ${this.members}.`;
    return introduction();
  },
};

console.log(team.getIntroduction());

// Ці задачі допоможуть вам зрозуміти, як this поводиться у стрілочних функціях і як уникати поширених помилок із контекстом.
