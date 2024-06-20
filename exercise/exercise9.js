// EXERCISE TAMBAHAN ==========================================================================
/* 
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085244455555"
    output = "(6285)-2444-55555"
*/

// function phoneNumber(number) {
//   if (number.length === 12 && typeof number === "string") {
//     const regex = /^[0-9]+$/; //regular expression
//     if (regex.test(number)) {
//       const codeID = "62";
//       const part1 = number.slice(1, 3);
//       const part2 = number.slice(3, 7);
//       const part3 = number.slice(7);

//       return `(${codeID}${part1})-${part2}-${part3}`;
//     }
//   }
//   return "invalid number";
// }
// const isValid = phoneNumber("081911211778");
// console.log(isValid);

// Cara mas daniel
function phoneNumber(input) {
  if (typeof input !== "string") {
    return "invalid phone number";
  }
  if (input.length !== 12) {
    return "invalid phone number";
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] < Number["0"] || input[i] > Number["9"]) {
      return "invalid phone number";
    }
  }

  input = "62" + input.slice(1); // input dimulai dari indeks ke 1
  let template = "(xxxx)-xxxx-xxxxx";

  input.split("").forEach((item) => {
    template = template.replace("x", item);
  });
  return template;
}

console.log(phoneNumber("081911211778"));

//2
/* 
    You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
    you can perform operations such as adding customers to the queue, calling the next customer, and 
    counting the number of customers in the queue.

   constructor:
   - this.queue

   method : 
   - enqueue : menambahkan value baru dalam antrian
   - dequeue : menghilangkan value paling depan dalam antrian
   - size : melihat jumlah antrian saat ini
*/

class BankQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    return this.queue.push(element);
  }
  dequeue() {
    return this.queue.shift();
  }
  size() {
    if (this.queue === 0) {
      return "antrian bank sedang kosong";
    }
    return `Saat ini antrian bank ada ${this.queue.length} yaitu saudara ${this.queue}`;
  }
}

const queueBank = new BankQueue();

queueBank.enqueue("budi");
queueBank.enqueue("jonas");
queueBank.enqueue("andri");
queueBank.dequeue();
console.log(queueBank.size());

//3
/* 
    You are given a JavaScript class called Train that simulates a train's passenger management system. 
    The Train class has the following methods and properties:

    - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum 
    capacity of 10 passengers.
    - isFull(): Checks if the train is at full capacity. It returns true if the train is full 
    and false otherwise.

    - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the 
    train is empty and false otherwise.

    - showPassenger(): Returns an object that contains the list of passengers on the train and 
    the remaining available seats.

    - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger 
    success" if the passenger is successfully added, "train full" if the train is at full capacity, 
    and "passenger already exists" if the passenger is already on the train.

    - passengerOut(name): Removes a passenger with the given name from the train. It returns 
    "remove passenger success" if the passenger is successfully removed, "cannot remove masinis" 
    if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and 
    "passenger not found" if the passenger with the given name is not found on the train.
*/

// class Train {
//   constructor() {
//     this.capacity = 10;
//     this.gerbong = ["masinis"];
//   }

//   isFull() {
//     return this.gerbong.length >= this.capacity;
//   }

//   isEmpty() {
//     return this.gerbong === 1;
//   }

//   passengerIn(element) {
//     if (this.isFull()) {
//       return "Haiya ini gerbong dah penuh la";
//     }
//     if (!this.gerbong.includes(element)) {
//       return this.gerbong.push(element);
//     } else {
//       return "ni orang dah didalem cuy";
//     }
//   }
//   passengerOut(element) {
//     if (this.isEmpty()) {
//       return "either ni orang dah keluar atau emang gak naik kereta";
//     }
//     if (element === "masinis") {
//       return "gabisa remove masinis";
//     }
//     if (this.gerbong.includes(element)) {
//       this.gerbong.splice(
//         this.gerbong.findIndex((data) => element === data),
//         1
//       );
//       return "penumpang dah turun";
//     }
//   }

//   showPassengger() {
//     const sisaKursi = this.capacity - this.gerbong.length;

//     return `gerbong diisi oleh ${this.gerbong} dan sisa kursinnya ${sisaKursi} `;
//   }
// }

// const train = new Train();

// train.passengerIn("Ridhwan");
// train.passengerIn("dani");
// train.passengerIn("dani");
// train.passengerIn("dani");

// train.passengerOut("masinis");

// console.log(train.showPassengger());

//Cara mas daniel
class Train {
  constructor() {
    this.container = ["masinis"];
    this.maxSize = 10;
  }

  isFull() {
    return this.container.length === this.maxSize;
  }

  isEmpty() {
    return this.container.length === 1;
  }

  showPassenger() {
    return {
      passenger: this.container,
      remainingSeat: this.maxSize - this.container.length,
    };
  }

  passengerIn(name) {
    if (this.isFull()) {
      return "train full";
    }
    if (this.container.includes(name)) {
      return "passenger already exist";
    }
    if (!this.container.includes(name)) {
      return this.container.push(name);
    }
  }

  passengerOut(name) {
    if (name === "masinis") {
      return "cannot remove masinis";
    }
    if (this.isEmpty()) {
      return "train is empty";
    }
    const index = this.container.indexOf(name);
    if (index === -1) {
      this.container.splice(index, 1);
      return "remove passenger success";
    }
  }
}

const train = new Train();

console.log(train.passengerIn("irja"));
console.log(train.showPassenger());
