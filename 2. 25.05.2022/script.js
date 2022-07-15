let inputOut = document.querySelector('.input-out');
let button = document.querySelector('button');
let divOut = document.querySelector('.out');

button.onclick = function() {
    // console.log('Click!!!!!');
    // console.log(inputOut.value); // value - то, что было введено в инпут
    let x = inputOut.value;
    
    // let y = typeof x;
    // console.log(typeof y);
    // if(y == 'string') {
    //     //console.log('Не число!');
    //     let result = +x + 10;
    //     console.log('число из инпута + 10 = ' + result);
    //     divOut.innerHTML = result;
    //     inputOut.value = ''; // обнуление поля
    // }
}


button.onclick = function getValue() {
    let x = +inputOut.value;
    console.log('число из инпута * 10 = ' + x * 10);
}

// 1. Создать 2 переменные а = 7 и b = 10. Вывести результат умножения переменных на страницу.
let a = 7;
let b = 10;
let result = a * b;
document.querySelector('.out').innerHTML += 'Task 1<br>7 * 10 = ' + result + '<hr>';

// 2. Создать 2 переменные c = 8 и d = 20. Вывести результат деления переменных на страницу.
let c = 8;
let d = 20;
let result1 = d / c;
document.querySelector('.out').innerHTML += 'Task 2<br>20 / 8 = ' + result1 + '<hr>';

// 3. Создать 2 переменные e = 21 и f = 4. Вывести результат сложения переменных на страницу.
let e = 21;
let f = 4;
let res = e + f;
document.querySelector('.out').innerHTML += 'Task 3<br>21 + 4 = ' + res + '<hr>';

// 4. Создать 2 переменные e1 = '3' и f1 = 6. Вывести результат деления переменных на страницу, почему получился такой результат
let e1 = '3';
let f1 = 6;
let res1 = e1 + f1;
document.querySelector('.out').innerHTML += 'Task 4<br>3 + 6 = ' + res1 + '<hr>';

// 5. Создать 2 переменные e2 = 4 и f2 = 0. Вывести результат деления e2 на f2 на страницу
let e2 = 4;
let f2 = 0;
let res2 = e2 / f2;
document.querySelector('.out').innerHTML += 'Task 5<br>4 / 0 = ' + res2 + '<hr>';

// 6. Создать 2 переменные e3 = 3 и f3 = "Hello". Вывести результат сложения переменных на страницу
let e3 = 3;
let f3 = 'Hello';
let res3 = e3 + f3;
document.querySelector('.out').innerHTML += 'Task 6<br>3 + Hello = ' + res3 + '<hr>';

// 7. Создать 2 переменные e4 = 5 и f4 = "Hello". Вывести результат умножения переменных на страницу
let e4 = 5;
let f4 = 'Hello';
let res4 = e4 * f4;
document.querySelector('.out').innerHTML += 'Task 7<br>5 * Hello = ' + res4 + '<hr>';

// 8. Cоздайте кнопку .b-8 при нажатии на которую выполняется функция, которая выводит в div.out-8 то, что пользователь ввёл в input.i-8
let inputOut8 = document.querySelector('.i-8');
let getBtn8 = document.querySelector('.b-8');
let dataOut8 = document.querySelector('.out-8');

getBtn8.onclick = function(task8) {
    let x = inputOut8.value;
    console.log(x);
    dataOut8.innerHTML = 'Вы ввели: ' + x;
}


// 9. При нажатии на кнопку .b-9 выполняется функция t9, которая выводит в div.out-9 то, что пользователь ввёл в input.i-9. Добавьте очистку input после нажатия кнопки
let inputOut9 = document.querySelector('.i-9');
let getBtn9 = document.querySelector('.b-9');
let dataOut9 = document.querySelector('.out-9');

getBtn9.onclick = function(task9) {
    let x = inputOut9.value;
    dataOut9.innerHTML = 'Вы ввели: ' + x;
    inputOut9.value = '';
}


// 10. При нажатии на кнопку .b-10 выполняется функция t10, которая выводит в div.out-10 то, что пользователь ввёл в input.i-10 умноженное на 20.
let inputOut10 = document.querySelector('.i-10');
let getBtn10 = document.querySelector('.b-10');
let dataOut10 = document.querySelector('.out-10');

getBtn10.onclick = function(task10) {
    let x = +inputOut10.value;
    let res10 = x * 20;
    dataOut10.innerHTML = 'То, что вы ввели, мы умножили на 20 и получили: ' + res10;
}


// 11. При нажатии на кнопку .b-11 выполняется функция t11, которая выводит в div.out-11 то, что пользователь ввёл в input.i-11 и к нему добавляем число 77. В данной задаче не нужно приводить к числу полученное значение из инпута.
let inputOut11 = document.querySelector('.i-11');
let getBtn11 = document.querySelector('.b-11');
let dataOut11 = document.querySelector('.out-11');

getBtn11.onclick = function(task11) {
    let x = '';
    let res11 = '';
    if(x = +inputOut11.value) { 
        console.log(typeof x); //number
        res11 = x + 77;
        dataOut11.innerHTML = 'Вы ввели число, а мы добавили 77 и получили: ' + res11;
        inputOut11.value = '';
    } else if(x = inputOut11.value) {
        console.log(typeof x); //string
        res11 = x + 77;
        dataOut11.innerHTML = 'Вы ввели текст, а мы добавили 77 и получили: ' + res11;
        inputOut11.value = '';
    }
    
}


// 12. При нажатии на кнопку .b-12 выполняется функция t12. Функция должна получить данные из input.12-1 и input.12-2 (попросить ввести имя и фамилию). После получения данных вывести в .out-12 строку "Приветствую имя фамилия" (имя и фамилия введённые в инпут). Для вывода строки использовать интерполяцию.
let inputOut12fname = document.querySelector('.i-12-1');
let inputOut12lname = document.querySelector('.i-12-2');
let getBtn12 = document.querySelector('.b-12');
let dataOut12 = document.querySelector('.out-12');

getBtn12.onclick = function(f12) {
    let x = inputOut12fname.value;
    let y = inputOut12lname.value;
    let res12 = 'Приветствую ' + x + ' ' + y;
    dataOut12.innerHTML = res12;
}


// 13. При нажатии на кнопку .b-13 выполняется функция t13. В функцию передаём данные из input.i-13-1 и input.i-13-2, данные сначала ложим в переменные x и y. Затем выводим в .out-13 их сумму. Не забываем про преобразования.
let inputOut131 = document.querySelector('.i-13-1');
let inputOut132 = document.querySelector('.i-13-2');
let getBtn13 = document.querySelector('.b-13');
let dataOut13 = document.querySelector('.out-13');

getBtn13.onclick = function(t13) {
    let x = '';
    let y = '';
    let res13 = '';
    if((x = +inputOut131.value) && ((y = +inputOut132.value) || (y = inputOut132.value))) {
        console.log(typeof x, typeof y);
        res13 = x + y;
        dataOut13.innerHTML = 'Мы сложили ваши данные из строк: ' + res13;
    } else if ((x = inputOut131.value) && ((y = +inputOut132.value) || (y = inputOut132.value))) {
        console.log(typeof x, typeof y);
        res13 = x + y;
        dataOut13.innerHTML = 'Мы сложили ваши данные из строк: ' + res13;
    } 
}


// 14. При нажатии на кнопку .b-14 выполняется функция t14. Она заменяет значение value в input.i-14 на строку 'Start'.
let inputOut14 = document.querySelector('.i-14');
let getBtn14 = document.querySelector('.b-14');
let dataOut14 = document.querySelector('.out-14');

getBtn14.onclick = function(t14) {
    let x = inputOut14.value;
    console.log(x);
    x = 'Start';
    console.log(x);
    inputOut14.value = x;
}


// 15. При нажатии на кнопку .b-15 выполняется функция t15. Oна присваивает .i-15 свойство style.border = '4px splid red'
// let inputOut15 = document.querySelector('.i-15');
let getBtn15 = document.querySelector('.b-15');
let dataOut15 = document.querySelector('.out-15');

getBtn15.onclick = function(t15) {
    document.getElementById("change").style.border = '4px solid red';
}


// 16. При нажатии на кнопку .b-16 выполняется функция t16. Функция получает из .i-16-1 и .i-16-2 числа. Выведите в .out-16 сумму данных чисел при нажатии кнопки .b-16
let inputOut161 = document.querySelector('.i-16-1');
let inputOut162 = document.querySelector('.i-16-2');
let getBtn16 = document.querySelector('.b-16');
let dataOut16 = document.querySelector('.out-16');

getBtn16.onclick = function(t16) {
    let x = '';
    let y = '';
    let res16 = '';
    if((x = +inputOut161.value) && ((y = +inputOut162.value) || (y = inputOut162.value))) {
        console.log(typeof x, typeof y);
        res16 = x + y;
        dataOut16.innerHTML = res16;
    } else if((x = inputOut161.value) && ((y = +inputOut162.value) || (y = inputOut162.value))) {
        console.log(typeof x, typeof y);
        res16 = x + y;
        dataOut16.innerHTML = res16;
    }
    
}

// 17. При нажатии на кнопку .b-17 выполняется функция t17. Функция получает из .i-17 число. Попробуйте ввести числа 5, 6zz, xx6, -200, 15.6
let inputOut17 = document.querySelector('.i-17');
let getBtn17 = document.querySelector('.b-17');
let dataOut17 = document.querySelector('.out-17');

getBtn17.onclick = function(t17) {
    let x = inputOut17.value;
    x = Number(x);
    console.log(typeof x, x);
    dataOut17.innerHTML = x;
    inputOut17.value = '';
}


// NOT DONE!!!
// 18. При нажатии на кнопку .b-18 выполняется функция t18.
// Функция получает из .i-18 число в переменную x. Выведите 
// в .out-18 результат операции parseFloat(x). 
// Попробуйте ввести значения 7, 22.01, 21.8a, -20.05
let inputOut18 = document.querySelector('.i-18');
let getBtn18 = document.querySelector('.b-18');
let dataOut18 = document.querySelector('.out-18');

getBtn18.onclick = () => {
    let x = +inputOut18.value;
    console.log(x);
    console.log(parseFloat(x));
    dataOut18.innerHTML = parseFloat(x);
    inputOut18.value = '';
}


// 19. При нажатии на кнопку .b-19, функция t19 должна в .out-19 вывести сумму двух отрицательных чисел из input.i-19-1 и .i-19-2
let inputOut191 = document.querySelector('.i-19-1');
let inputOut192 = document.querySelector('.i-19-2');
let getBtn19 = document.querySelector('.b-19');
let dataOut19 = document.querySelector('.out-19');

getBtn19.onclick = function(t19) {
    let x = inputOut191.value;
    let y = inputOut192.value;
    let res19 = +x + +y;
    dataOut19.innerHTML = 'Сумма введённых чисел равна: ' + res19;
}


// 20. При нажатии на кнопку .b-20 в .out-20 выводится число - сколько раз была нажата кнопка .b-20
const getBtn20 = document.querySelector('.b-20');
let dataOut20 = document.querySelector('.out-20');

let counter = 0;

getBtn20.onclick = function() {
    counter++;
    console.log(counter);
    dataOut20.innerHTML = 'Вы нажали по кнопке ' + counter + ' раз';
}