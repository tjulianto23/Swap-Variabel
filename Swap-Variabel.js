/*Melakukan swap 2 varibel tanpa menambahkan variabel lain

misalkan terdapat 2 varibel seperti dibawah*/

let a = 10;
let b = 15;

//Bagaimana cara melakukan swap kedua variabel tersebut tanpa menambahkan 1 variabel lagi?
//Cara pertama, menggunakan XOR Swap Algorithm

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log('a =', a);
console.log('b =', b);

//Cara kedua menggunakan ES6

[a, b] = [b, a];

console.log('a:', a, 'b:', b);

//Refference
//https://en.wikipedia.org/wiki/XOR_swap_algorithm
