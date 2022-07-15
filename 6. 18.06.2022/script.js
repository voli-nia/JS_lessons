let dataOut = document.querySelector('.out');

// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 10; j++){
//         dataOut.innerHTML += j;
//         // dataOut.innerHTML += '*';
//     }
//     dataOut.innerHTML += '<br>';
// }


for(let i = 1; i < 10; i++) {
    // dataOut.innerHTML += '2*' + i + '=' + (i * 2) + '<br>';
    
    for(let j = 1; j < 10; j++) {
        // dataOut.innerHTML += `2*${i}=${2*i}<br>`;
        dataOut.innerHTML += `${i}*${j}=${j * i}<br>`;
    }
    dataOut.innerHTML += '<hr>'
}


/////////////////////////////////////////////////////
//Task1
// С помощью вложенных циклов, вывести строку:
// ***_***_***_
// где * рисуется с помощью внутреннего цикла от 0 до 3,
// а _ - с помощью внешнего цикла

let dataOut1 = document.querySelector('.out-1');

for(let i = 0; i < 3; i++) {
    // dataOut1.innerHTML += "***_"
    for(let j = 0; j < 3; j++) {
        dataOut1.innerHTML += '*';
    }
    dataOut1.innerHTML += '_'
}



//Task2
// С помощью вложенных циклов, вывести строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл
// выводит цифру и перенос строки, а внутренний - *_
// А после этого внешний знак переноса

let dataOut2 = document.querySelector('.out-2');

for(let i = 1; i < 4; i++) {
    dataOut2.innerHTML += i + '<br>';
    for(let j = 0; j < 3; j++) {
        dataOut2.innerHTML += '*_';
    }
    dataOut2.innerHTML += '<br>'
}



//Task3
// С помощью вложенных циклов, вывести строку:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внутренний цикл
// выводит *_, а внешний цикл выводит перенос строки

let dataOut3 = document.querySelector('.out-3');

for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 3; j++) {
        dataOut3.innerHTML += '*_';
    }
    dataOut3.innerHTML += '<br>'
}



//Task4
// С помощью вложенных циклов, вывести строку:
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит иифру и _, а внутренний выводит от 1 до 5 со *

let dataOut4 = document.querySelector('.out-4');

for(let i = 1; i < 4; i++) {
    dataOut4.innerHTML += i + "_";
    for(let j = 1; j < 6; j++) {
        dataOut4.innerHTML += j + '*';
    }
}



//Task5
// С помощью вложенных циклов, вывести строку:
// 101010
// 101010
// 101010
// Вложенный цикл, в зависимости от чётного или нет k (счётчика цикла)
// выводит 0 или 1. Внешний цикл - перенос строки

let dataOut5 = document.querySelector('.out-5');

for(let i = 0; i < 3; i++){
    dataOut5.innerHTML += '<br>';
    for(let k = 1; k < 7; k++) {
        if(k % 2 == 0) {
            dataOut5.innerHTML += '0';
        } else {
            dataOut5.innerHTML += '1';
        }
    }
}



//Task6
// С помощью вложенных циклов, вывести строку:
// 10х01х
// 10х01х
// 10х01х

let dataOut6 = document.querySelector('.out-6');

for(let i = 0; i < 3; i++) {
    dataOut6.innerHTML += "<br>"
    for(let j = 0; j < 1; j++) {
        dataOut6.innerHTML += '10x01x';
    }
}



// Task7
// С помощью вложенных циклов, вывести строку:
// *
// **
// ***
// ****

let dataOut7 = document.querySelector('.out-7');

for(let i = 1; i < 5; i++) {
    dataOut7.innerHTML += "<br>"
    for(let j = i; j > 0; j--) {
        dataOut7.innerHTML += '*';
    }
}



// Task8
// С помощью вложенных циклов, вывести строку:
// *****
// ****
// ***
// **
// *

let dataOut8 = document.querySelector('.out-8');

for(let i = 0; i < 5; i++) {
    dataOut8.innerHTML += "<br>"
    for(let j = i; j < 5; j++) {
        dataOut8.innerHTML += '*';
    }
}



// Task9
// С помощью вложенных циклов, вывести строку:
// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

let dataOut9 = document.querySelector('.out-9');

for(let i = 1; i < 6; i++) {
    dataOut9.innerHTML += "<br>"
    for(let j = 1; j < i+1; j++) {
        dataOut9.innerHTML += j + '_';
    }
}



// Task10 HALF DONE!!!
// С помощью вложенных циклов, вывести строку:
// 01_02_03_04_05_06_07_08_09_10_
// 11_12_13_14_15_16_17_18_19_20_
// 21_22_23_24_25_26_27_28_29_30_
// 31_32_33_34_35_36_37_38_39_40_
// 41_42_43_44_45_46_47_48_49_50_

let dataOut10 = document.querySelector('.out-10');

for(let i = 0; i < 5; i++) {
    dataOut10.innerHTML += "<br>"
    for(let j = 1; j < 11; j++) {
        dataOut10.innerHTML += `${i}${j}` + '_';
    }
}
