// const one = document.querySelector('.one');

// one.style.width = '150px';
// one.style.paddingBottom = '40px';

// // console.log(one.style);

// one.classList.add('two', 'three');
// one.classList.remove('three');

// const toggle = document.querySelector('.toggle');

// toggle.onclick = function() {
//     this.classList.toggle('three');
// }



// data-атрибуты

// console.log(one.getAttribute('data'));
// console.log(document.querySelector('link').getAttribute('href'));
// console.log(document.querySelectorAll('link')[1].getAttribute('href'));

// one.setAttribute('data-num', 8);

const buttons = document.querySelectorAll('.gas');

buttons.forEach(item => {
    item.onclick = function() {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data'); // this - указатель на кнопку, на котором происходит событие
        console.log(gallons * amount);
        let a = document.createElement('div');
        a.innerHTML = gallons * amount;
        a.classList.add('one');

        document.querySelector('.test').appendChild(a);
    }
    //console.log(a);
    }
)

// let a = document.createElement('div');
// a.innerHTML = 'Hello';
// a.classList.add('one');
// a.onclick = function() {
//     alert('Hellloooo!')
// }

// document.querySelector('.test').appendChild(a);

// console.log(a);




///////////////////////////////////////////////////////

// Task1
// При нажатии на кнопку .b-1, функция присваивает блоку .out-1 ширину 200px и высоту 90px
let btn1 = document.querySelector('.b-1');
let dataOut1 = document.querySelector('.out-1');

btn1.onclick = () => {
    dataOut1.style.width = '200px';
    dataOut1.style.height = '90px';
    dataOut1.style.border = '1px solid grey';
}



// Task2
// При нажатии на кнопку .b-2, функция присваивает блоку .out-2 класс .bg-orange
let btn2 = document.querySelector('.b-2');
let dataOut2 = document.querySelector('.out-2');

btn2.onclick = () => {
    dataOut2.classList.add('bg-orange');
}



// Task3
// При нажатии на кнопку .b-3, функция удаляет у блока .out-3 класс .bg-orange
let btn3 = document.querySelector('.b-3');
let dataOut3 = document.querySelector('.out-3');

btn3.onclick = () => {
    dataOut3.classList.remove('bg-orange');
}



// Task4
// При нажатии на кнопку .b-4, функция которая делает toggle класса .bg-orange для блока .out-4
let btn4 = document.querySelector('.b-4');
let dataOut4 = document.querySelector('.out-4');

btn4.onclick = () => {
    dataOut4.classList.toggle('bg-orange');
    dataOut4.innerHTML = "This is toggle!";
}



// Task5
// При нажатии на кнопку .b-5, функция проверяет наличие класса .bg-orange у блока .out-4.
// Результат - true или false вывести в .out-5

let btn5 = document.querySelector('.b-5');
let dataOut5 = document.querySelector('.out-5');

btn5.onclick = () => {
    dataOut5.classList.contains('bg-orange');
    // console.log(dataOut5.classList.contains('bg-orange'));
    if(dataOut5.classList.contains('bg-orange') == true) {
        dataOut5.innerHTML = "True";
    } else {
        dataOut5.innerHTML = "False";
    }
}



// Task6
// При нажатии на кнопку .b-6, функция выводит в .out-6 количество параграфов с классом .p-6

let btn6 = document.querySelector('.b-6');
let dataOut6 = document.querySelector('.out-6');

btn6.onclick = () => {
    let counter = document.querySelectorAll('.p-6');
    // console.log(counter.length);
    dataOut6.innerHTML = counter.length;
}



// Task 7 NOT DONE!!!
// По нажатию кнопки .b-7 запускайте функцию f7, которая присваивает блокам .out-7 класс .bg-orange.
// Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let btn7 = document.querySelector('.b-7');
let dataOut7 = document.querySelector('.out-7');

btn7.onclick = () => {
    let counter = document.getElementsByClassName('out-7');
    console.log(counter.length)
    if(counter.length > 0) {
        dataOut7.classList.add('bg-orange');
        dataOut7.innerHTML = 'Блок с классом .bg-orange';
    }
}



// Task 8
// По нажатию кнопки .b-8 запускайте функцию f8, которая делает toggle блокам .out-8 класс .bg-orange.
// Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

// Task 9
// Усложним предыдущие задачи. С помощью цикла повесим на блоки .out-9 событие клик.
// По клику должна выполняться функция f9.
// Функция, должна добавлять класс .bg-orange тому .out-9 на котором кликнули.

// Task 10
// Усложним предыдущие задачи. С помощью цикла повим на блоки .out-10 событие клик.
// По клику должна выполняться функция f10.
// Функция, должна делать toggle класса .bg-orange тому .out-10 на котором кликнули.

// Task 11
// Кнопка .b-11, запускает функцию f11. Функция создает через createElement div
// c текстом 25 и добавляет его через append в .out-11.

// Task 12
// Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div
// c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.

// Task 13
// Кнопка .b-13, запускает функцию f13. Функция создает через createElement div c текстом pushMe
// и добавляет ему класс bg-orange. Также, созданному div добавляется событие onclick,
// по которому выполняется функция f13_1. Созданный div добавляется в .out-13.

// Task 14
// Кнопка .b-14, запускает функцию f14. Функция создает через createElement div
// c текстом 14 и добавляет ему класс .bg-orange. Созданный div добавляется в .out-14 с помощью append.

// Task 15
// Кнопкa .b-15, которая запускает функцию f15. Функция создает через createElement div
// c текстом 15 и добавляет ему класс .bg-orange. Созданный div добавляется перед .out-15 с помощью before.

// Task 16
// Кнопкa .b-16, которая запускает функцию f16. Функция создает через createElement div
// c текстом 16 и добавляет ему класс .bg-orange. Созданный div добавляется после .out-16 с помощью after

// Task 17
// Кнопкa .b-17, которая запускает функцию f17. Функция создает через createElement div
// c текстом 17 и добавляет ему класс .bg-orange. Созданный div заменяет .out-17 с помощью replaceWith.

// Task 18
// Кнопкa .b-18, которая запускает функцию f18. Функция с помощью getAttribute
// получает data-b атрибут с параграф .p-18 и выводит в .out-18.

// Task 19
// Кнопкa .b-19, которая запускает функцию f19. Функция с помощью getAttribute
// получает data-b атрибут с параграфов p-19 и выводит в .out-19 через пробел.
// Обратите внимание, что элементов .p-19 больше одного.

// Task 20
// Кнопкa .b-20, которая запускает функцию f20. Функция с помощью setAttribute
// присваивает атрибут title="go" в div.out-20. Обращаю ваше внимание - увидеть атрибут
// можно только в с помощью инструментов веб разработчика.