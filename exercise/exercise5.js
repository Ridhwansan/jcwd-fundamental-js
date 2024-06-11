//1

//sort -> mengurutkan isi array berupa string atau number
// const fruits3 = ["banana", "orange", "lemon", "apple", "manggo"];
// fruits3.sort();
// console.log(fruits3);

//without sort method
const arr = [12, 5, 23, 18, 4, 45, 32];

function sortArray(arrNum) {
  let n = arrNum.length;
  for (let i = 0; i < n - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < n; j++) {
      if (arrNum[j] < arrNum[indexMin]) {
        indexMin = j;
      }
    }
    let temp = arrNum[i];
    arrNum[i] = arrNum[indexMin];
    arrNum[indexMin] = temp;
  }
  return arrNum;
}
const avgArray1 = arr.reduce((a, b) => a + b);
const jmlArray1 = arr.length;

console.log(sortArray(arr));
console.log(`array min = ${arr[0]}`);
console.log(`array min = ${arr[6]}`);
console.log(`rata ratanya  = ${avgArray1 / jmlArray1}`);

//with sort method
const arr1 = [12, 5, 23, 18, 4, 45, 32];
const avgArray = arr1.reduce((a, b) => a + b);
const minToMax = arr1.sort((a, b) => a - b);
const minArray = arr1[0];
const maxArray = arr1[6];
const jmlArray = arr1.length;

console.log(minToMax);
console.log(minArray);
console.log(maxArray);
console.log(avgArray / jmlArray);

//2
const fruit = ["apple", "banana", "cherry", "date"];
let n = fruit.length;

function fruits(f) {
  let str = "";
  for (let i = 0; i < n; i++) {
    if (i === n - 1 && n > 1) {
      str += " and " + f[i];
    } else {
      str += " " + f[i];
      if (i < n - 2) {
        str += ",";
      }
    }
  }
  return str;
}
console.log(fruits(fruit));

//3
const string = "Hello World";
const splitString = string.split(" ");
console.log(splitString);

//4
const array1 = [1, 2, 3];
const array2 = [3, 2, 1];

function sumArray(arr1, arr2) {
  let arrHasil = [];
  for (let i = 0; i < arr1.length - 1; i++) {
    arrHasil[i] = arr1[i] + arr2[i];
  }
  return arrHasil;
}

console.log(sumArray(array1, array2));

//5  Write a function that adds an element to the end of an array. However, the element should only be added if it is
//not already in the array.

const ar1 = [1, 2, 3, 4];
function newElement(arrNumber, arrAdd) {
  if (!arrNumber.includes(arrAdd)) {
    arrNumber.push(arrAdd);
  }
  return arrNumber;
}
console.log(newElement(ar1, 4));

//6 Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
//a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

function evenNumbers(arrNum) {
  let evenResult = [];
  for (let i = 1; i <= arrNum; i++) {
    if (i % 3 === 0) {
      evenResult.push(i);
    }
  }
  return evenResult;
}
let resultNumber = evenNumbers(12);
console.log(resultNumber);

//7  maxSize =5 , int is 5, 10, 24,3 ,6,7,8 -> [5,10,24,3,6]

const maxSize = 4;
function intoArray(num, ...manyMoreInt) {
  let maxSize = manyMoreInt.slice(0, num);
  console.log(maxSize);
}
intoArray(maxSize, 10, 24, 3, 6, 7, 8);

//8 Write a function that will combine 2 given array into one array
const arraySatu = [1, 2, 3];
const arrayDua = [4, 5, 6];

//cara ke1
function combineArrray(arr1, arr2) {
  let tempArray = [];
  tempArray = arr1.concat(arr2);
  return tempArray;
}
console.log(combineArrray(arraySatu, arrayDua));

//cara ke2
function comArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1[arr1.length] = arr2[i];
  }
  return arr1;
}
const combinedArray = comArray(arraySatu, arrayDua);
console.log(combinedArray);

//9. Write a function to find duplicate values in an array
//Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

// const ar1 = [1, 2, 3, 4];
// function newElement(arrNumber, arrAdd) {
//   if (!arrNumber.includes(arrAdd)) {
//     arrNumber.push(arrAdd);
//   }
//   return arrNumber;
// }
// console.log(newElement(ar1, 4));

const arr3 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
function findDuplicate(arr1) {
  let duplicate = [];
  arr3.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length - 1; i++) {
    if (!duplicate.includes(arr1[i])) {
      //dicek dulu jika didalam duplicate tidak ada arr[i]
      if (arr1[i] === arr1[i + 1]) {
        //jika arr[i] sama dengan array berikutnya [i+1]
        duplicate.push(arr1[i]); // baru duplikatnya di push
      }
    }
  }
  return duplicate;
}

console.log(findDuplicate(arr3));

//10  Write a function to find the difference in 2 given array
//Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

const arr4 = [1, 2, 3, 4, 5];
const arr5 = [3, 4, 5, 6, 7];

function differenceArray(arr1, arr2) {
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      //jika elemen arr1[i] tidak ada pada arr2
      temp.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      //jika elemen arr2[i] tidak ada pada arr1
      temp.push(arr2[i]);
    }
  }

  return temp;
}

console.log(differenceArray(arr4, arr5));

//11 Based on the array below write a function that will return primitive data types only.
// The function will return [1, undefined, “string”]

let arr6 = [1, [], undefined, {}, "string", {}, []];

function primitiveData(arr1) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr1[i] !== "object" && typeof arr1[i] !== "function") {
      temp.push(arr1[i]);
    }
  }
  return temp;
}

console.log(primitiveData(arr6));

//12 Write a function from a given array of numbers and return the second smallest number
//Example : numbers = [5, 3, 1, 7, 2, 6] → 2

const arr7 = [5, 3, 1, 7, 2, 6];

function secondSmallest(arr1) {
  let temp = [];
  arr7.sort((a, b) => a - b);
  temp.push(arr1[1]);
  return temp;
}
console.log(secondSmallest(arr7));

//13 Write a function from a given array of mixed data types and return the sum of all the number
//Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

let arr8 = ["3", 1, "string", null, false, undefined, 2];
function sumArray(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === "number") {
      sum += arr1[i];
    }
  }
  return sum;
}
console.log(sumArray(arr8));

//14 Write a function from the below array of number that will return sum of duplicate values.
//arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
//The function will return 40

const arr9 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
function sumDuplicate(arr1) {
  let sum = 0;
  let temp = [];
  arr9.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length - 1; i++) {
    //fungsi ini untuk menyeleksi mana aja yang duplikat, kalau ketemu dia akan masuk ke temp kosong
    if (!temp.includes(arr1[i])) {
      if (arr1[i] === arr1[i + 1]) {
        temp.push(arr1[i]);
      }
    }
  }
  arr9.forEach((number) => {
    if (temp.includes(number)) {
      //dari sini yang masuk ke temp kosong akan dijumlahkan
      sum += number;
    }
  });
  return sum;
}
console.log(sumDuplicate(arr9));

//15 Rock Paper Scissors
const arr10 = ["rock", "paper", "scissors"];
const inputArr = ["rock"];

function gameRps(arr1, arr2) {
  let randomIndex = Math.floor(Math.random() * arr1.length);
  let randomElement = arr1[randomIndex];

  if (randomElement === "rock" && arr2[0] === "paper") {
    return "win";
  } else if (randomElement === "paper" && arr2[0] === "scissors") {
    return "win";
  } else if (randomElement === "scissors" && arr2[0] === "rock") {
    return "win";
  } else {
    return "lose";
  }

  return temp;
}

console.log(gameRps(arr10, inputArr));
