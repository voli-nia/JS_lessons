
console.log('Hello'); // строки заключаем в кавычки
console.log("World"); // нет разницы между одинарными и двойными кавычками
console.log(22); //
console.log('Hello' + 'World'); // 
console.log('Hello' + ' World'); //
console.log('Hello ' + 'World'); //
console.log('Hello' + ' ' + 'World'); // конкатенация - соединение строк
// alert('Hello');

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = 23;
document.getElementById('out').innerHTML = '<b>2022</b>';

document.querySelector('.header').innerHTML = "Hello World!";
document.querySelectorAll('h2').innerHTML = "Hello World!"; 

document.querySelector('p#pr').innerHTML = 777; // перезаписываем текст из html

let a; // var - устарело
let b = document.querySelector('#pr'); //внутрь получил параграф
b.innerHTML = "Hi!";
console.log(b); // <p id="pr">Hi!</p>
console.log(b.innerHTML); // Hi!
let c = document.querySelector('.header'); 
c.innerHTML = 56; //поменяли текс у класса




//Task 1
//Вывести в консоль своё имя
console.log('Valentina')

//Task 2
//Вывести в консоль год своего рождения. Посмотреть, чем отличается вывод строки от вывода числа
console.log(1987)

//Task 3
//Вывести в консоль строку: 'Hello' + 'welcome' + 'to the course'
console.log('Hello' + ' welcome' + ' ' + 'to the course')

//Task 4
//Используя alert вывести число 2022
// alert(2022)

//Task 5
// При помощи console.log() вывести результат операции 2022 - 20
let aa = 2022;
let bb = 20;
let res = aa - bb;
console.log(aa - bb);
console.log(res)

//Task 6
//Создать на странице div#six. Используя document.getElementById записать в него текст 'Hello World!!!'
document.getElementById('six').innerHTML = 'Task 6<br>' + "Hello World!!!" + '<hr>';

//Task 7
//Создать на странице div#seven. Используя document.getElementById записать в него результат умножения 15 * 15
let num1 = 15;
let num2 = 15;
let result = num1 * num2;
console.log('15 * 15 = ' + result);
document.getElementById('seven').innerHTML = 'Task 7<br>' + '15 * 15 = ' + result + '<hr>';

//Task 8
//Создать на странице div.out. Используя document.querrySelector  записать в элемент "Task number 8"
// document.querySelector('.out').innerHTML = "Task number 8";
let cc = document.querySelector('.out');
cc.innerHTML = 'Task 8<br>' + "Task number 8" + '<hr>';


//Task 9
//Создать на странице элемент <h2>Hello<span class='out-8'>everyone</span></h2>. Вставить в out-8 слово 'for'
document.querySelector('.out-8').innerHTML = ' for ' + '<hr>';

//Task 10
//Создать на странице div.out-10. Используя innerHTML записать внутрь строку <h2>Hi</h2>
document.querySelector('div.out-10').innerHTML += 'Task 10<br>' + '<h2>Hi</h2>' + '<hr>';

//Task 11
//Создать на странице div.out-11. Записать в него строку '123' Второй операцией дописать в него строку '456'. Для дозаписи использовать +=. (innerHTML)
document.querySelector('.out-11').innerHTML = 'Task 11<br>' + 123;
document.querySelector('.out-11').innerHTML += 456 + '<hr>';

//Task 12
//Создать на странице div.out-12. Поместить его в переменную а. Используя innerHTML записать внутрь переменной а число 3,1415
let A = document.querySelector('.out-12');
A.innerHTML = 'Task 12<br>' + 3.1415 + '<hr>';

//Task 13
//Создать на странице div.out-13. Получите его в переменную out_13. Используя innerHTML записать в  него строку '<img src="https://unsplash.com/photos/JAMWF_QwBIE" alt="nature">'. Обратить внимание на то, что строка уже содержит кавычки. Кавычки должны правильно чередоваться. При вставке оборачивать строку в одинарные кавычки.
let out13 = document.querySelector('.out-13');
out13.innerHTML = 'Task 13<br>' + '<img src="https://unsplash.com/photos/JAMWF_QwBIE" alt="nature">' + '<hr>';

//Task 14
//Создайте на странице div.out-14. Затем создайте две переменные z1 = 6, z2 = 3. В div вывести результаты умножения z1 и z2.
let z1 = 6;
let z2 = 3;
let multip = z1 * z2;
document.querySelector('.out-14').innerHTML = 'Task 14<br>' + '6 * 3 = ' + multip + '<hr>';
// document.querySelector('.out-14').innerHTML = 'Task 14<br>' + 'z1 * z2 = ' + z1 * z2 + '<hr>';

// Task 15
//Создайте на странице div.out-15 и две переменные у1 = 6, у2 = 3. Вывести в div результат деления у1 на у2.
let y1 = 6;
let y2 = 3;
let devide = y1 / y2;
// document.querySelector('.out-15').innerHTML = 'Task 15<br>' + '6 / 3 = ' + devide + '<hr>';
document.querySelector('.out-15').innerHTML = 'Task 15<br>' + 'y1 / y2 = ' + y1 / y2 + '<hr>';

//Task 16
//Создайте на странице div.out-16 и две переменные х1 = 'Hello' x2 = 5. Вывести в div сумму х1 + х2.
let x1 = 'Hello';
let x2 = 5;
document.querySelector('.out-16').innerHTML = 'Task 16<br>' + x1 + x2 + '<hr>';

//Task 17
//Создайте на странице div.out-17. Получить этот элемент в переменную out17. Вывести эту переменную в консоль.
let out17 = document.querySelector('.out-17');
console.log(out17);

//Task 18
//Создайте на странице div.out-18. Получить этот элемент в переменную out18. Вывести переменную в консоль. Присвоить out18 значение 5, вывести переменную в консоль.
let out18 = document.querySelector('.out-18');
console.log(out18);
out18 = 5;
console.log(out18);

//Task 19
//Создайте на странице div.out-19-test. Вывести эту переменную в консоль. Затем получить в эту переменную div.out-18 и вывести переменную в консоль.
let out19 = document.querySelector('.out-19-test');
console.log(out19);
out19 = document.querySelector('.out-18');
console.log(out19);

//Task 20
//Создайте на странице div.out-20. Получить этот элемент в переменную out20.  Используя textContent записать в него строку '<h2>Ho</h2>'. Сравнить вывод с выводом в 10 задаче.
let out20 = document.querySelector('.out-20');
out20.textContent = 'Task 20<br>' + '<h2>Hi</h2>' + '<br>';

//Task 10
//Создать на странице div.out-10. Используя innerHTML записать внутрь строку <h2>Hi</h2>
document.querySelector('.out-20').innerHTML += '<br>Task 10<br>' + '<h2>Hi</h2>' + '<hr>';




let inputOut = document.querySelector('.input-out'); // собрали инпут
let button = document.querySelector('button'); // собрали кнопку
let divOut = document.querySelector('.out');

button.onclick = function() {
    console.log('Click!!!!!');
    console.log(inputOut.value); // value - то, что было введено в инпут
    let x = inputOut.value;
    console.log(x * 2);
    console.log(x / 2);
    console.log(x - 2);
    console.log(x + 2);
    console.log(+x  + 2);
    console.log(x*1  + 2);
    console.log(+x  / "innn");
    console.log(+x  * "innn");

}

