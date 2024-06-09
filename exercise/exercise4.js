//1 Create a function that can create a triangle pattern

const num = 5;
for (let i = 1; i <= num; i++) {
  let temp = "";
  for (let j = 1; j <= i; j++) {
    temp += j + " ";
  }
  console.log(temp);
}

//1 cara yang menggunakan function
let kos = ""; //variable kosong
function triangle(number) {
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      kos += j + " ";
    }
    kos += "\n";
  }
  return kos;
}
let result = triangle(5);
console.log(result);

//2 Create a function that can create a triangle pattern according to the height we provide
let empty = "";
function triangle1(height) {
  let counter = 1; //deklarasi counter = 1 digunakan karena angka mulai dari 1
  for (let i = 0; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      empty += counter.toString().padStart(2, "0") + " ";
      //fungsi padstart digunakan untuk menambahkan sebuah karakter didepan (maxlength, karakter yang ditambahkan)
      counter++; // counter++ karena nilainya terus bertambah
    }
    empty += "\n"; // \n digunakan kayak br di html
  }
}
triangle1(5);
console.log(empty);

//3 create loop if multiple of 3 = fizz, multiple of 5 = buzz or both = fizzbuzz
function fizzBuzz(n) {
  let resultFb = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultFb.push("fizzbuzz");
    } else if (i % 3 === 0) {
      resultFb.push("fizz");
    } else if (i % 5 === 0) {
      resultFb.push("buzz");
    } else {
      resultFb.push(i);
    }
  }
  return resultFb;
}

let resultfizzbuzz = fizzBuzz(15);
console.log(resultfizzbuzz);

//4 create a BMI calculator
function bodyMassIndex(weight, height) {
  let heightMeter = height / 100; //tinggi badan diubah dulu ke meter
  let resultBMI = weight / heightMeter ** 2;

  if (resultBMI < 18.5) {
    return "less weight";
  } else if (resultBMI >= 18.5 && resultBMI <= 24.9) {
    return "ideal";
  } else if (resultBMI >= 25 && resultBMI <= 29.9) {
    return "overweight";
  } else if (resultBMI >= 30 && resultBMI <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}
console.log(bodyMassIndex(74, 180));

//5 remove all odd numbers with the result of even array only
function removeOddNumbers(number) {
  let resultOn = [];
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      resultOn.push(i);
    }
  }
  return resultOn;
}
let resultNumbers = removeOddNumbers(12);
console.log(resultNumbers);

//6 split the string into an array by space
function splitString(input) {
  let inputString = input.split(" ");
  return inputString;
}
console.log(splitString("rumah kita"));
