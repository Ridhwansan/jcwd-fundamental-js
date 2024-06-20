//Data structure

//STACK ==========================
//LIFO last in first out

class Stack {
  #container;
  #maxSize;
  constructor() {
    this.#container = [];
    this.#maxSize = 10;
  }

  isFUll() {
    return this.#container.length >= this.#maxSize;
    //artinya apakah container length sudah lebih dari maxsize, kalo iya return true kalo gak return false
  }

  isEmpty() {
    return this.#container.length === 0;
  }

  push(element) {
    if (this.isFUll()) {
      return "container penuh";
    }
    this.#container.push(element);
  }

  pop() {
    if (this.isEmpty) {
      return "container kosong";
    }
  }

  showContainer() {
    return this.#container;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);
stack.push(2);

console.log(stack.isFUll());

console.log(stack.showContainer());

//QUEUE

class Queue {
  #container;
  constructor() {
    this.#container = [];
  }

  enqueue(element) {
    return this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  showContainer() {
    return this.#container;
  }
}

const queue = new Queue();
console.log(queue.enqueue(3)); // angka disebelah ini urutannya, sedangkan yang diisi tu isinya
console.log(queue.enqueue(2));
console.log(queue.enqueue(5));

console.log(queue.dequeue()); // diambil dari yang pertama
console.log(queue.dequeue());

console.log(queue.showContainer());

//SET -> only unique value1
const fruits = ["banana", "apple", "apple", "manggo"];
const result = new Set(fruits);
console.log(result);

//membuat set
const mySet = new Set();
//menambahkan nilai ke set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); //nilai ini tidak akan ditambahkan karena sama

console.log(mySet);
//gaboleh ada nilai yang duplikat didalam set

//untuk ngecek apakah valuue yang dimasukan ada atau tidak didalam set
console.log(mySet.has(3));
console.log(mySet.has(4));

//menghapus nilai dari set
mySet.delete(2);
console.log(mySet);

//looping isi dari Set

for (const isiSet of mySet) {
  console.log(isiSet);
}

//menghitung ukuran size atau melihat ukuran size dari set kita
console.log(mySet.size);
