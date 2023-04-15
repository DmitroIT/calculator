let num1;
let num2;


do {
    num1 = parseFloat(prompt("Вкажіть перше число:"))
} while (isNaN(num1)) {
    
}

do {
    num2 = parseFloat(prompt("Вкажіть друге число:"))
} while (isNaN(num2)) {
    
}

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
