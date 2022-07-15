// let user = 'John';
// let age79 = 43;
// let idNumber = 22267;

// let usArr = ['John', 43, 22267];
// let role = ['Manager', 'HR', 'Project Manager', 'Office Manager'];

// console.log(usArr);
// console.log(role);

// console.log(usArr[0]);
// console.log(usArr.length);
// console.log(role.length);
// console.log(role[3]);
// console.log(role[999]);
// role[999] = 'Uasea';
// console.log(role[999]);

// usArr[0] = 'Dave';
// console.log(usArr[0]);

let a = [1, 2, 3, 4];
console.log(a);
let firstEl = a[0];
a[0] = a[a.length - 1];
console.log(a);
a[a.length - 1] = firstEl;
console.log(a);


let dataOut = document.querySelector('.out');

// for(let i = 0; i < a.length; i++) {
//     dataOut.innerHTML += a[i] + ' ';
// }


let b = [3, 5, 6, 89, 56, 0, 21];
let max = b[0];

// max
for(let i = 0; i < b.length; i++) {
    if(b[i] > max) {
        max = b[i];
    }
}
dataOut.innerHTML += '<p>MAX: ' + max;

// sum
let sum = 0;
for(let i = 0; i < b.length; i++) {
    sum = sum + b[i];
}
dataOut.innerHTML += '<p>SUM: ' + sum;