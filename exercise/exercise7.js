//1 =========================================================

// class Equal {
//   constructor(inputOne, inputTwo) {
//     this.inputOne = inputOne;
//     this.inputTwo = inputTwo;
//   }

//   isEqual(inputOne, inputTwo) {
//     if (inputOne === inputTwo) {
//       console.log(`true because ${inputOne} equal to ${inputTwo}`);
//     } else {
//       console.log(`false because ${inputOne} is not equal to ${inputTwo}`);
//     }
//   }
// }

// const equalTo = new Equal();
// //isi disini
// equalTo.isEqual(1, 2);

//1 cara lain menggunakan objek

const objectOne = { b: 1 };
const objectTwo = { a: 1 };

function isEqual(arr1, arr2) {
  for (const key in arr1) {
    if (arr1[key] === arr2[key]) {
      console.log(`true because ${arr1[key]} is equal to ${arr2[key]}`);
    } else {
      console.log(`false because ${arr1[key]} is not equal to ${arr2[key]}`);
    }
  }
}
//use Here
const isEqualResult = isEqual(objectOne, objectTwo);

//2 =========================================================
const intersectObject1 = { a: 1, b: 2 };
const intersectObject2 = { a: 1, c: 3 };
let tempValue = {};

function intersect(arr1, arr2) {
  const result = {};
  for (const key in arr1) {
    if (key in arr2) {
      if (arr1[key] === arr2[key]) {
        result[key] = arr1[key];
      }
    }
  }
  return result;
}
//Use Here
const intersectionResult = intersect(intersectObject1, intersectObject2);
console.log(intersectionResult);

//3 =========================================================
// Create a function to merge two array of student data and remove duplicate data

const arrayOne = [
  {
    name: "Student1",
    email: "student1@mail.com",
  },
  {
    name: "Student2",
    email: "student2@mail.com",
  },
];

const arrayTwo = [
  {
    name: "Student1",
    email: "student1@mail.com",
  },
  {
    name: "Student3",
    email: "student3@mail.com",
  },
];

function combineArray(arr1, arr2) {
  const combine = [...arr1, ...arr2];
  const sameArray = [];
  const studentsName = {};

  combine.forEach((element) => {
    //element adalah parameter yang menampung arrayOne,dan arrayTwo
    if (!studentsName[element.name]) {
      //diperiksa apakah element.name sudah ada di studentsName
      sameArray.push(element);
      studentsName[element.name] = true;
    }
  });
  return sameArray;
}
combineArray(arrayOne, arrayTwo);
console.log(combineArray(arrayOne, arrayTwo));

//4 Create a function that can accept input as an array of objects and switch all values into property and
// property into value

const personData = [
  {
    name: "david",
    age: 20,
  },
];
function switchVar(arr, keys) {
  const objectArray = arr[0];
  console.log(objectArray); //mengisi objectArray dengan arr idex ke 0
  keys.forEach((element) => {
    //setiap element di parameter keys ["name","age"] artinya akan diulang sebanyak jumlah index di parameter
    const value = objectArray[element];
    objectArray[value] = element;
    delete objectArray[element]; // menghapus properti "name" dan "age"
  });
  return objectArray;
}
const hasilSwitch = switchVar(personData, ["name", "age"]);
console.log(hasilSwitch);

//5 Create a function to find a factorial number using recursion
// rumus faktorial itu n! = n * (n - 1)
function factorialRecurtion(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorialRecurtion(number - 1);
  }
}

console.log(factorialRecurtion(5));
