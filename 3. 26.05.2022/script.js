// if..else
let a = 6;

if(a > 9) {
    // true - cancel, false - continue
    console.log('Yes');
} else {
    console.log('Nooooo!');
}


////
const button = document.querySelector('button');
const inputAge = document.querySelector('.age');

button.onclick = () => {
    let x = +inputAge.value; // преобразуем в число
    console.log(x);
    if(x >= 18 && x <= 60) {
        // true - cancel, false - continue
        console.log('Hi!');
    } else if(x > 60){
        console.log('Hello!');
    } else {
        console.log('Sorry, you will not pass')
    }

    switch(x) {
        case 16:
            console.log('Too young');
            break;
        case 18:
            console.log('Welcome on board!');
            break;
        default:
            console.log('Oooops something went wrong')
    }
}

let x = 6;
console.log(x > 7); //false
console.log(x < 7); //true
console.log(x < 7 && x > 3); //true //&& - возвращает true, когда обе части true
console.log(x > 7 || x > 3); //true //|| - возвращает true, когда хоть одна часть true


//Task 1
//При нажатии кнопки .b-1 срабатывает функция f1. Функция должна прочитать содержимое .i-1
// и сравнить его с числом 6 (сравнение ==). Результат сравнения - true или false вывести
// в .out-1.
let inputOut1 = document.querySelector('.i-1');
let getBtn1 = document.querySelector('.b-1');
let dataOut1 = document.querySelector('.out-1');

getBtn1.onclick = function() {
    let x = inputOut1.value;
    if(x == 6) {
        dataOut1.innerHTML = 'True, your input is equal to 6!';
    } else {
        dataOut1.innerHTML = 'False, your input is not equal to 6!';
    }
}


//Task2
// Даны 2 переменные а1 и а2. При нажатии кнопки .b-2 запускается функция f2. Функция должна
// сравнить переменные с помощью if...else и вывести в .out-2 число, которое больше.
// Вариант равенства не рассматриваем.
let getBtn2 = document.querySelector('.b-2');
let dataOut2 = document.querySelector('.out-2');

getBtn2.onclick = function() {
    let a1 = 10;
    let a2 = 15;
    let biggest;
    if(a1 < a2) {
        biggest = a2;
        console.log(biggest);

    } else {
        biggest = a1;
        console.log(biggest);
    }
    dataOut2.innerHTML = "The biggest number is: " + biggest;
}



//Task3
// Даны 2 инпута .i-2-1 и  .i-2-2, оба - input [type = number]. При нажатии кнопки .b-3 
// срабатывает функция f3. Функция должна сравнить числа из input и вывести в .out-3 большее число.
let inputOut31 = document.querySelector('.i-3-1');
let inputOut32 = document.querySelector('.i-3-2');
let getBtn3 = document.querySelector('.b-3');
let dataOut3 = document.querySelector('.out-3');

getBtn3.onclick = function() {
    let x = +inputOut31.value;
    let y = +inputOut32.value;
    let biggest;
    if(x < y) {
        biggest = y;
        console.log('Biggest number is: ' + y);
    } else if(x > y) {
        biggest = x;
        console.log('Biggest number is: ' + x);
    } else {
        console.log('They are equal!')
    }
    dataOut3.innerHTML = 'The biggest number is: ' + biggest;
}


//Task4
// Пользователь вводит в .i-4 год своего рождения. Есть кнопка .b-4 которая запускает функцию f4.
// Функция должна вывести в .out-4 число 1, если пользователю больше или равно 21 год, и 0 если меньше.
let inputOut4 = document.querySelector('.i-4');
let getBtn4 = document.querySelector('.b-4');
let dataOut4 = document.querySelector('.out-4');

getBtn4.onclick = function() {
    let x = inputOut4.value;
    let answer;
    if(x <= 2001) {
        answer = 1 + ' You can pass';
        console.log('1');
    } else {
        console.log('0');
        answer = 0 + ' You cannot pass';
    }
    dataOut4.innerHTML = answer;
}


//Task5
// На странице ксть инпут с классом .i-5 куда пользователь может ввести число. Есть
// кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ 'm'
// если число меньше нуля, 0 - если число равно нулю и 1 - если больше.
let inputOut5 = document.querySelector('.i-5');
let getBtn5 = document.querySelector('.b-5');
let dataOut5 = document.querySelector('.out-5');

getBtn5.onclick = function() {
    let x = inputOut5.value;
    if(x < 0) {
        dataOut5.innerHTML = 'm - less than ZERO';
    } else if(x == 0) {
        dataOut5.innerHTML = '0 - equals to ZERO';
    } else {
        dataOut5.innerHTML = '1 - more than ZERO';
    }
}


//Task6
// На странице ксть инпут с классом .i-6 куда пользователь может ввести число. Есть
// кнопка b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово even если
// число чётное и odd - если нечётное. Для проверки чётности используется целочисленный
// остаток от деления на 2 (оператор %). Если остаток равен нулю - чётное, нет - нечётное.
let inputOut6 = document.querySelector('.i-6');
let getBtn6 = document.querySelector('.b-6');
let dataOut6 = document.querySelector('.out-6');

getBtn6.onclick = function() {
    let x = +inputOut6.value;
    console.log(typeof x);
    if(x == 0) {
        dataOut6.innerHTML = x + ' is ' + 'Zero';
        inputOut6.value = '';
    } else if(x % 2 == 0) {
        dataOut6.innerHTML = x + ' is ' + 'Even';
        inputOut6.value = '';
    } else if(x % 2 == 1) {
        dataOut6.innerHTML = x + ' is ' + 'Odd';
        inputOut6.value = '';
    } 
}

// Task 7
// Даны 2 инпута .i-7-1 и  .i-7-2, оба - input [type = number]. При нажатии кнопки .b-7 
// срабатывает функция f7. Функция должна взять число из .i-7-1 и возвести в степень .i-7-2.
// Вывести результат в .out-7. Для возведения в степень можно использовать ** или Math.pow
let inputOut71 = document.querySelector('.i-7-1');
let inputOut72 = document.querySelector('.i-7-2');
let getBtn7 = document.querySelector('.b-7');
let dataOut7 = document.querySelector('.out-7');

getBtn7.onclick = function() {
    let a = inputOut71.value;
    let b = inputOut72.value;
    let res = a ** b;
    dataOut7.innerHTML = a + ' в степени ' + b + ' будет: ' + res;
}


// Task 8
// Дан select s-8 который содержит 3 значения: 1, 2, 3. Дана кнопка b-8, при нажатии на которую
// срабатывает функция f8. Функция должна получить выбранное в select число, потом, с помощью switch case
// сравнить его поочерёдно с 1, 2, 3. Если выбрано число 1 - вывести в .out-8 строку one,
// если 2 - two, если 3 - three.
let select8 = document.querySelector('#s-8');
let getBtn8 = document.querySelector('.b-8');
let dataOut8 = document.querySelector('.out-8');

getBtn8.onclick = function(){
    switch(select8.value){
        case 'one':
            dataOut8.innerHTML = 'one';
            break;
        case 'two':
            dataOut8.innerHTML = 'two';
            break;
        case 'three':
            dataOut8.innerHTML = 'three';
            break;
    }
}


// Task 9
// Есть инпут с классом .i-9 куда пользователь может ввести номер квартиры. Есть кнопка .b-9 
// которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.
// 1-32 - 1 подъезд
// 33-43 - 2
// 44-64 - 3
// В противном случае вывести 0.
let inputOut9 = document.querySelector('.i-9');
let getBtn9 = document.querySelector('.b-9');
let dataOut9 = document.querySelector('.out-9');

getBtn9.onclick = function() {
    let x = inputOut9.value;
    for(let i = 0; i < x.length; i++) {
        if(x >= 1 && x <= 32) {
            console.log(x);
            dataOut9.innerHTML = 'Квартира №' + x + ' в 1-ом подъезде.';
            inputOut9.value = '';
        } else if(x >= 33 && x <= 43) {
            console.log(x);
            dataOut9.innerHTML = 'Квартира №' + x + ' во 2-ом подъезде.';
            inputOut9.value = '';
        } else if(x >= 44 && x <= 64) {
            console.log(x);
            dataOut9.innerHTML = 'Квартира №' + x + ' в 3-м подъезде.';
            inputOut9.value = '';
        } else {
            console.log(x);
            dataOut9.innerHTML = '0 - В этом доме вартиры №' + x + ' нет';
            inputOut9.value = '';
        }
    }
}


// Task 10
// Дан селект .s-10 По нажатию кнопки .b-10 вывести value выбранного option в .out-10. 
let select10 = document.querySelector('#s-10');
let getBtn10 = document.querySelector('.b-10');
let dataOut10 = document.querySelector('.out-10');

getBtn10.onclick = function() {
    let answer = select10.options[select10.selectedIndex].value;
    switch(select10.value) {
        case 'яблоко':
            dataOut10.innerHTML = answer;
            break;
        case 'груша':
            dataOut10.innerHTML = answer;
            break;
        case 'банан':
            dataOut10.innerHTML = answer;
            break;
        case 'клубника':
            dataOut10.innerHTML = answer;
            break;
        case 'арбуз':
            dataOut10.innerHTML = answer;
            break;
    }
}


// Task 11
// Дан селект .s-11 По изменению состояния select (событие onchange) вывести value
// выбранного option в .out-11.
let select11 = document.querySelector('#s-11');
let dataOut11 = document.querySelector('.out-11');

function myFunction11() {
    let x = document.getElementById('s-11').value;
    console.log(x);
    let y = select11.options[select11.selectedIndex].text;
    console.log(y);
    dataOut11.innerHTML = 'Вы выбрали: ' + y;
}


// Task 12
// Дан инпут .i-12, по нажатию кнопки b-12 получить значение из инпута в переменную, а затем
// вывести в .out-12 typeof полученной переменной. Typeof  позволяет определить тип данных.
let inputOut12 = document.querySelector('.i-12');
let getBtn12 = document.querySelector('.b-12');
let dataOut12 = document.querySelector('.out-12');

getBtn12.onclick = function() {
    let input = inputOut12.value;
    let y = typeof input;
    let num = Number(input);
    let typeNum = typeof num;
    if(input == num) {
        console.log(num, typeNum);
        dataOut12.innerHTML = 'Вы ввели: ' + num + '<br>Тип данных: ' + typeNum;
    } else {
        console.log(input, y);
        dataOut12.innerHTML = 'Вы ввели: ' + input + '<br>Тип данных: ' + y;
    }
}



// Task 13
// Дан инпут .i-13 (input type = number). По нажатию кнопки получить значение из инпута в переменную,
// а затем вывести в .out-13 typeof полученной переменной. Typeof  позволяет определить тип данных.
// Если всё правильно сделать - то тип данных будет string. Почему так?
let inputOut13 = document.querySelector('.i-13');
let getBtn13 = document.querySelector('.b-13');
let dataOut13 = document.querySelector('.out-13');

getBtn13.onclick = function() {
    let x = inputOut13.value;
    let y = typeof x;
    dataOut13.innerHTML = 'Вы ввели: ' + x + '<br>Тип данных: ' + y;
}


// Task 14
// Дан инпут .i-14-1 и  .i-14-2, type = number. Дан селект .s-14-3, который содержит 2 операции
// +, -, *, /. Дана кнопка .b-14, при нажатии на которую срабатывает функция f14. Функция выводит
// в .out-14 результат операции, выбранной в 3-м селекте к числам введённым в 1-м и 2-ом инпутах.
// Например, выбраны 1 13 +, нужно вывести результат 1 + 13 = 14
let inputOut141 = document.querySelector('.i-14-1');
let inputOut142 = document.querySelector('.i-14-2');
let select14 = document.querySelector('.s-14-3');
let getBtn14 = document.querySelector('.b-14');
let dataOut14 = document.querySelector('.out-14');

getBtn14.onclick = function() {
    let x1 = +inputOut141.value;
    let x2 = +inputOut142.value;
    let y = select14.options[select14.selectedIndex].value;
    let res14;
    if(y == '1') {
        res14 = x1 + x2;
        dataOut14.innerHTML = x1 + ' + ' + x2 + ' = ' + res14;
    } else if(y == '2') {
        res14 = x1 - x2;
        dataOut14.innerHTML = x1 + ' - ' + x2 + ' = ' + res14;
    } else if(y == '3') {
        res14 = x1 * x2;
        dataOut14.innerHTML = x1 + ' * ' + x2 + ' = ' + res14;
    } else if(y == '4') {
        res14 = x1 / x2;
        dataOut14.innerHTML = x1 + ' / ' + x2 + ' = ' + res14;
    }
}



// Task 15
// Даны селекты .s-15-1 и .s-15-2, каждый из которых содержит 1 и 0. Дан селект .s-15-3, который
// содержит две операции && и ||. Дана кнопка .b-15 при нажатии на которую срабатывает функция f15.
// Функция выводит в .out-15 результат логических операций, выбранных в 3-м селекте к числам, 
// выбранным в 1-м и 2-м селектах.
// Например, выбрано 1 1 &&, нужно вывести результат операции 1&&1 - true или false.
let select151 = document.querySelector('.s-15-1');
let select152 = document.querySelector('.s-15-2');
let select153 = document.querySelector('.s-15-3');
let getBtn15 = document.querySelector('.b-15');
let dataOut15 = document.querySelector('.out-15');

getBtn15.onclick = function() {
    let num1 = select151.options[select151.selectedIndex].text;
    let num2 = select153.options[select153.selectedIndex].text;
    let operation = select152.options[select152.selectedIndex].value;
    let res15;
    if(((num1 == '1' && num2 == '1') || (num1 == '0' && num2 == '0')) && operation == 'and') {
        dataOut15.innerHTML = 'true';
    }else if(((num1 == '1' && num2 == '0') || (num1 == '0' && num2 == '1')) && operation == 'and') {
        dataOut15.innerHTML = 'false';
    }else if(((num1 == '1' && num2 == '1') || (num1 == '0' && num2 == '0')) && operation == 'or') {
        dataOut15.innerHTML = 'false';
    }else if(((num1 == '1' && num2 == '0') || (num1 == '0' && num2 == '1')) && operation == 'or') {
        dataOut15.innerHTML = 'true';
    }
}