let tasks = [];
tasks.push();
tasks.push(null);
let lastElement = tasks.pop();
let user = {
  name: "",
  tasks: [],
  age: 0,
};
console.log(user["name"]);
console.log("Вывод списка ключей: ", Object.keys(user));
console.log("Вывод списка значений: ", Object.values(user));
console.log("Вывод списка пар ключ - значение: ", Object.entries(user));
user.age = 20;
user.tasks.push();
console.log(user);
const parseAge = function (age) {
const parsingError = "Ты не обезьяна, думай головой";
  if (Number.isNaN(age)) {
    alert(parsingError);
    return;
  }
  return age;
  };
const initData = function () {
let inputName = prompt("Имя:") || "Default Name";
let inputAge = Number(prompt("Возраст:"));
let parsedAge = parseAge(inputAge);
  if (typeof parsedAge === "number") {
    user.age = parsedAge;
  }
};
const validateTaskInput = (task) => {
  return typeof task === "string" && task.length > 0;
};
const addTask = function () {
let taskFromUser = prompt("Введите задачу:");
let error = "";
if (taskFromUser == null) {
error = "Пользователь отменил ввод";
  }
if (!validateTaskInput(taskFromUser)) {
error = "Пустая строка";
  }
  if (error) {
    alert(error);
    return;
  }
  user.tasks.push(taskFromUser);
  return user.tasks;
};
const renderTasks = function () {
  console.log("Список задач:");
  user.tasks.forEach((value, index) => console.log(`${index + 1}. ${value}`));
};
initData();
while (true) {
      const result = addTask();
        if (result === "undefined") {
    continue;
  }
    console.log("Значение успешно добавлено!");
  renderTasks();
    if (prompt("Продолжить добавление? (y/n)") !== "y") break;
};