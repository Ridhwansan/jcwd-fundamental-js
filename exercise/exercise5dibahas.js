//1

function sorFunc(arr) {
  arr.sort((a, b) => a - b);
  const lowest = arr[0];
  const heighest = arr[arr.length - 1];
  const sum = arr.reduce((a, b) => a + b);
  const avg = sum / arr.length;
  return { lowest, heighest, avg };
}

console.log(sorFunc([13, 12, 10, 21, 8]));

//2

function concatWords(words) {
  if (words.length === 1) {
    return words[0];
  } else {
    const lastWord = words.pop();
    return words.join(",") + " and " + lastWord;
  }
}
console.log(concatWords(["apple", "banana", "cherry", "date"]));

//3
function secondSmallest(arr) {
  if (arr.length < 2) {
    return "minimum array length harus 2";
  }
  arr.sort((a, b) => a - b);
  return arr[1];
}
console.log(secondSmallest([5, 3, 1, 7, 2, 6]));

//4
function addArrays(arr1, arr2) {
  const result = [];
  const maxlength = Math.max(arr1.length, arr2.length); //ngecek lebih besar mana nilai arr1 atau arr2

  for (let i = 0; i < maxlength; i++) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0);
    result.push(sum);
  }
  return result;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 2, 1];
console.log(addArrays(arr1, arr2));

//5
function addUniqueElement(arr, newElement) {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }
  return arr;
}
console.log(addUniqueElement([1, 2, 3, 4], 4));

//6
function sumNumbersDataTypes(arr) {
  let temp = 0;

  arr.forEach((value) => {
    if (typeof value === "number") {
      temp += value;
    }
  });
  return arr;
}

console.log(sumNumbersDataTypes(["3", 1, "string", null, false, undefined, 2]));

//7
function limitData(maxSize, ...integers) {
  const array = [];
  integers.forEach((number) => {
    if (array.length === maxSize) return;
    array.push(number);
  });
  return array;
}
const maxSize = 3;
console.log(limitData[(maxSize, 7, 10, 24, 3, 6, 7, 8)]);

//8
function combinedArray(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(combinedArray([1, 2, 3], [3, 2, 1]));

//9
function findDuplicateValues(arr) {
  const seen = new Set();
  const duplicate = [];

  for (const value of arr) {
    if (seen.has(value) && !duplicate.includes(value)) {
      duplicate.push(value);
    } else {
      seen.add(value);
    }
  }
  return duplicate;
}
console.log(findDuplicateValues([1, 2, 2, 2, 3, 3, 3, 4, 5, 5]));

//10
function findDifference(arr1, arr2) {
  const difference = [];
  for (const item of arr1) {
    if (!arr2.includes(item) && !difference.includes(item)) {
      //if array 2 tidak includes apa yang ada di item && if difference tidak includes apa yang ada didalam item
      difference.push(item); //item dipush ke array difference
    }
  }

  for (const item of arr2) {
    if (!arr1.includes(item) && !difference.includes(item)) {
      //if arr1 tidak includes apa yang ada di item && difference tidak includes apa yang ada didalam item
      difference.push(item); //maka item dipush ke diference
    }
  }
  return difference;
}

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//11
function filterPrimitive(arr) {
  return arr.filter((item) => {
    return (
      typeof item === "number" ||
      typeof item === "string" ||
      typeof item === "boolean" ||
      typeof item === "undefined" ||
      item === null
    );
    //tidak dikasih typeof karena jika dikasih maka bentuknya sebuah object
  });
}

console.log(filterPrimitive([1, [], undefined, {}, "string", {}, null]));

//12
function sumDuplicateValues(arr) {
  const duplicateValue = arr.filter((value, index, self) => {
    return self.indexOf(value) !== index;
  });
  let result = 0;
  for (const item of arr) {
    if (duplicateValue.includes(item)) {
      result += item;
    }
  }
  return result;
}

console.log(sumDuplicateValues([10, 20, 40, 10, 50, 30, 10, 60, 10, 20]));

//13
function playRockPaperScissors(playerChoice) {
  const choice = ["rock", "paper", "scissor"];
  const computerChoice = choice[Math.floor(Math.random() * 2.9)];
  if (!choice.includes(playerChoice)) {
    return "error";
  }
  if (playerChoice === computerChoice) {
    return { result: "draw", computerChoice, playerChoice };
  }
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return { result: "win", computerChoice, playerChoice };
  } else {
    return { result: "lose", computerChoice, playerChoice };
  }
}

playRockPaperScissors();
console.log(playRockPaperScissors("paper"));
