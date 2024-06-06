//1 Write a code to convert C to F
//Fahrenheit = (Celsius * 1.8) + 32

const c = 50;
const f = c * 1.8 + 32;
const result = f;
console.log(result);

//2 Write a code to check whether the number is odd or even

const num = 25;
if (num % 2 === 0) {
  console.log("Ini bilangan genap");
} else {
  console.log("Ini bilangan ganjil");
}

//3 Write a code to check whether the number is prime number or not

const nomor = 13;
let prima = true;

if (nomor <= 1) {
  prima = false;
} else {
  for (let i = 2; i < nomor; i++) {
    if (nomor % i === 0) {
      prima = false;
      break;
    }
  }
}

if (prima === true) {
  console.log(nomor + " adalah bilangan prima");
} else {
  console.log(nomor + " bukan bilangan prima");
}

//4 Write a code to find the sum of the numbers 1 to N

const n = 5;
let sum = 0;
let message = "";
for (i = 0; i <= n; i++) {
  sum += i;
  if (i === n) {
    message += i + "";
  } else {
    message += i + " + ";
  }
}
console.log(message + " = " + sum);

//5 write a code to find factorial numbers
const t = 6;
let fac = 1;
let message1 = "";
for (i = 1; i <= t; i++) {
  fac *= i;
  if (i === n) {
    message1 += i + "";
  } else {
    message1 += i + " x ";
  }
}
for (i = 0; i <= t; i++) {}
console.log(message1 + " = " + fac);

//6 Write a code to print the first N fibonacci numbers
let a = 0;
let b = 1;
let fib;
const angka = 15;

if (angka == 0) {
  fib = 0;
} else if (angka == 1) {
  fib = 1;
} else {
  for (i = 2; i <= angka; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
}

console.log(fib);
