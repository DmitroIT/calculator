//оголошуємо першу змінну
let num1 = prompt("Вкажіть перше число:");
console.log(num1);

//оголошуємо другу змінну
let num2 = prompt("Вкажіть друге число:");
console.log(num2);

// перетворюємо рядки на числа
num1 = Number(num1);
num2 = Number(num2);

//оголошуємо змінну додавання
let sum = num1 + num2;

//оголошуємо змінну віднімання
let sub = num1 - num2;

//оголошуємо змінну множення
let mult = num1 * num2;

//оголошуємо змінну ділення
let division = num1 / num2;

//оголошуємо змінну з результатами
let upshot = num1 + " + " + num2 + " = " + sum + "\n" +
    num1 + " - " + num2 + " = " + sub + "\n" +
    num1 + " * " + num2 + " = " + mult + "\n" +
    num1 + " / " + num2 + " = " + division + "\n";

alert("Користувач ввів" + " " + num1 + " " + "і" + " " + num2 + ":" +"\n" + upshot);
