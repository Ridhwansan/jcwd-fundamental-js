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

function primenumber(num) {
  if (num === 2) {
    return true;
  } else if (num < 2) {
    return false;
  } else if (num % 2 === 0) {
    return false;
  }
  const kuadrat = Math.sqrt(num); //untuk menghitung akar kuadrat
  for (num = 3; num <= kuadrat; num += 2) {
    if (num % 1 === 0) {
      return false;
    }
  }
  return true;
}

console.log(primenumber(3));

//4 Write a code to find the sum of the numbers 1 to N

const number = 5;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i;
}
console.log(sum);

//5 write a code to find factorial numbers

function hasilFaktorial(numberr) {
  let fac = 1;
  for (i = 1; i <= numberr; i++) {
    fac *= i;
  }
  return fac;
}

console.log(hasilFaktorial(3));

//6 Write a code to print the first N fibonacci numbers
function fibonacci(nomor) {
  let a = 0,
    b = 1,
    urutanFibbonacci;
  for (i = 2; i <= nomor; i++) {
    urutanFibbonacci = a + b;
    a = b;
    b = urutanFibbonacci;
  }
  return b;
}
console.log(fibonacci(15));
