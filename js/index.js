// ЗАДАЧА No1 | создайте объект person с полями name, age, city и country.
//Используйте деструктуризацию объекта для извлечения значений
//name и age в отдельные переменные.

// const person = {
//   username: "Murtuz",
//   age: 19,
//   city: "Baku",
//   country: "Azerbaijan",
// };

// const { username, age } = person;

// console.log(username);
// console.log(age);

//_______________________________________________________________________________________________________________________

//ЗАДАЧА No2 | создайте функцию printPersonInfo,
//которая принимает объект person в качестве параметра и выводит в консоль
//информацию о человеке, используя деструктуризацию объекта.

// const person = {
//   username: "Murtuz",
//   age: 19,
//   city: "Baku",
//   country: "Azerbaijan",
// };

// const printPersonInfo = (obj) => {
//   const { username, age, city, country } = obj;
//   const info = `${username}, ${age}. ${city}, ${country}`;
//   return info;
// };

// const result = printPersonInfo(person);
// console.log(result);

//_______________________________________________________________________________________________________________________

//ЗАДАЧА No3 | создайте функцию getFullName, которая принимает объект person
//с полями firstName и lastName, и возвращает их объединенное значение,
//используя деструктуризацию объекта.

// const person = {
//   firstName: "Murtuz",
//   lastName: "Murtuzov",
//   age: 19,
//   city: "Baku",
//   country: "Azerbaijan",
// };

// const getFullName = (obj) => {
//   const { firstName, lastName } = obj;
//   const fullName = `${firstName} ${lastName}`;
//   return fullName;
// };

// const result = getFullName(person);
// console.log(result);

//_______________________________________________________________________________________________________________________

// ЗАДАЧА No4 | создайте объект user с полями name и address,
//где address сам является объектом с полями city и country.
//используйте деструктуризацию объекта для извлечения значений city и country в отдельные переменные.

//ПУТЁМ ФУНКЦИИ
// const user = {
//   name: "Murtuz",
//   address: { city: "Baku", country: "Azerbaijan" },
// };

// const myFuction = (obj) => {
//   const {
//     name,
//     address: { city, country },
//   } = obj;
//   return `${city}, ${country}`;
// };

// const result = myFuction(user);
// console.log(result);

//ПУТЁМ КОНСОЛИ

// const {
//   name,
//   address: { city, country },
// } = user;
// console.log(city, country);

//_______________________________________________________________________________________________________________________

// ЗАДАЧА No5 | создайте функцию printAddress,
//которая принимает объект user в качестве параметра
//и выводит в консоль его адрес, используя деструктуризацию объекта.

// const user = {
//   name: "Murtuz",
//   address: { city: "Baku", country: "Azerbaijan" },
// };

// const printAddress = (obj) => {
//   const {
//     name,
//     address: { city, country },
//   } = obj;
//   return `${city}, ${country}`;
// };

// const result = printAddress(user);
// console.log(result);

//_______________________________________________________________________________________________________________________

// ЗАДАЧА No6 | создайте объект product с полями name, price и category.
//используйте деструктуризацию объекта для извлечения
// значений name и price в отдельные переменные.

// const product = {
//   name: "Banana",
//   price: 1.99,
//   category: "fruits",
// };

// const printValues = (obj) => {
//   const { name, price } = obj;
//   return `Product name: ${name}, Price: ${price}`;
// };

// const result = printValues(product);
// console.log(result);

//_______________________________________________________________________________________________________________________

//ЗАДАЧА No7 | создайте функцию applyDiscount,
// которая принимает объект product и скидку в процентах
//в качестве параметров, и возвращает объект product
//с примененной скидкой, используя деструктуризацию объекта.

// const product = {
//   name: "Banana",
//   price: 5,
//   category: "fruits",
// };

// const applyDiscount = (obj, percent) => {
//   const { price } = obj;
//   const discountedPrice = price - (price * percent) / 100;
//   updatedObj = { ...obj, price: discountedPrice };
//   return updatedObj;
// };

// const discountedProduct = applyDiscount(product, 70);
// console.log(discountedProduct);

//_______________________________________________________________________________________________________________________

//ЗАДАЧА No8 | создайте объект rectangle с полями width и height.
//используйте деструктуризацию объекта для создания
//переменных w и h, которые будут содержать значения этих полей.

// const rectangle = { width: 30, height: 12 };

// const { width, height } = rectangle;
// const w = width;
// const h = height;
// console.log(`Width:${w}, Height:${h}`);

//_______________________________________________________________________________________________________________________

// ЗАДАЧА No9 | создайте функцию calculateArea,
//которая принимает объект rectangle в качестве параметра
//и возвращает его площадь, используя деструктуризацию объекта.
// const rectangle = { width: 30, height: 12 };

// const calculateArea = (obj) => {
//   const { width, height } = obj;
//   return width * height;
// };

// const result = calculateArea(rectangle);
// console.log(`Площадь прямоугольника равна ${result}`);

//_______________________________________________________________________________________________________________________

//ЗАДАЧА No10 | создайте объект stats с полями max, min и average.
// используйте деструктуризацию объекта для извлечения
//значений max, min и average в отдельные переменные.

// const stats = {
//   min: 10,
//   max: 50,
//   average: 30,
// };

// const objValues = (obj) => {
//   const { min, max, average } = obj;
//   return `Минимальное значение ${min}, Максимальное значение ${max}, Среднее значение ${average}`;
// };

// const result = objValues(stats);
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ЗАДАЧА No1 | создайте функцию swapValues, которая принимает массив
//с двумя элементами и меняет их местами, используя деструктуризацию массива.

// const lettersArr = ["x", "y"];

// const swapValues = (array) => {
//   const [x, y] = array;
//   return ([array[0], array[1]] = [y, x]);
// };

// const result = swapValues(lettersArr);
// console.log(result);

//_______________________________________________________________________________________________________________________

// ЗАДАЧА No2 | создайте массив coordinates с двумя значениями [x, y].
//используйте деструктуризацию массива для создания
//переменных x и y, содержащих эти значения.

// let coordinates = [5, 10];

// const [x, y] = coordinates;

// console.log(x);
// console.log(y);

//_______________________________________________________________________________________________________________________

//ЗАДАЧА No3 | создайте функцию getDistance, которая принимает два массива
//pointA и pointB, представляющих координаты точек [x, y], и возвращает расстояние
//между этими точками, используя деструктуризацию массивов.

// const pointA = [5, 10];
// const pointB = [20, 25];

// const getDistance = (arr1, arr2) => {
//   const [num1, num2] = arr1;
//   const [num3, num4] = arr2;
//   return Math.sqrt((num2 - num1) ** 2 + (num4 - num3) ** 2).toFixed(2);
// };

// const result = getDistance(pointA, pointB);
// console.log(result);

//P.S. Решил по формуле: Расстояние = √((x2 - x1)^2 + (y2 - y1)^2)

//_______________________________________________________________________________________________________________________

// ЗАДАЧА No4 | создайте массив grades с оценками студентов.
//используйте деструктуризацию массива для извлечения первой,
//второй и третьей оценок в отдельные переменные.

// const grades = [5, 5, 4, 2, 3, 3, 5, 4];

// const studentMarks = (arr) => {
//   const [x, y, z] = arr;
//   return `${x},${y},${z}`;
// };

// const result = studentMarks(grades);
// console.log(result);

//_______________________________________________________________________________________________________________________

//ЗАДАЧА No5 | создайте функцию getAverage, которая принимает массив grades
//и возвращает среднее значение оценок, используя деструктуризацию массива.

// const grades = [5, 5, 4, 2, 3, 3, 5, 4];

// const getAverage = (arr) => {
//   let sum = 0;
//   for (let element of arr) {
//     sum += element;
//   }
//   return (sum / arr.length).toFixed(2);
// };

// const result = getAverage(grades);
// console.log(result);

// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
//Вариант с использованием деструктуризации

// const getAverage = (arr) => {
//   const [firstElement, ...elements] = arr;
//   let sum = firstElement;
//   for (let element of elements) {
//     sum += element;
//   }
//   return (sum / arr.length).toFixed(2);
// };

// const result = getAverage(grades);
// console.log(result);

//_______________________________________________________________________________________________________________________

//ЗАДАЧА No6 | создайте массив student с данными студента: [name, age, grades].
//используйте деструктуризацию массива для извлечения
//имени и возраста студента в отдельные переменные.

// const student = ["Murtuz", 19, [5, 5, 4, 4, 3, 3]];

// const studentInfo = (arr) => {
//   const [name, age] = arr;
//   return `Имя:${name}, Возраст:${age}`;
// };

// const result = studentInfo(student);
// console.log(result);

//_______________________________________________________________________________________________________________________

// ЗАДАЧА No7 | создайте функцию printStudentInfo, которая принимает массив
//student и выводит информацию о студенте в консоль, используя деструктуризацию массива.

// const student = ["Murtuz", 19, [5, 5, 4, 4, 3, 3]];

// const printStudentInfo = (arr) => {
//   const [name, age, grades] = arr;
//   return `Имя:${name}, Возраст:${age}, Оценки:${grades}`;
// };

// const result = printStudentInfo(student);
// console.log(result);

//_______________________________________________________________________________________________________________________

//ЗАДАЧА No8 | создайте массив colors с названиями цветов.
//используйте деструктуризацию массива для извлечения первого,
//второго и третьего цветов в отдельные переменные.

// const colors = ["yellow", "black", "white"];

// const [yellow, black, white] = colors;
// console.log(`${yellow}, ${black}, ${white}`);

//_______________________________________________________________________________________________________________________

// ЗАДАЧА No9 | создайте функцию combineColors, которая принимает массивы
//colors1 и colors2, и возвращает объединенный массив
//цветов, используя деструктуризацию массивов.

// colors1 = ["yellow", "black", "white"];
// colors2 = ["red", "green", "blue"];

// const combineColors = (arr1, arr2) => {
//   const [firstColorArr1, ...colorsArr1] = arr1;
//   const [firstColorArr2, ...colorsArr2] = arr2;

//   return [firstColorArr1, firstColorArr2, ...colorsArr1, ...colorsArr2];
// };

// const result = combineColors(colors1, colors2);
// console.log(result);

