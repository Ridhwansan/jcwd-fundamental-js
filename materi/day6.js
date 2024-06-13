//OBJECT ORIENTED PROGRAMING

//cara membuat objek ada 2 cara
//1
const user = {};

//2
const user2 = new Object();

//properties & method
const user3 = {
  name: "david",
  greet(name) {
    //ini adalah function namun diletakan didalam objek jadi namanya method
    console.log("hello " + name);
    return this.greet;
  },
};
console.log(user3.greet("budi"));

//add and delete property
const person = {
  name: "ridhwan",
  age: 20,
};
//add
person.hobby = "coding";
console.log(person);

//delete
delete person.age;
console.log(person);

// Accessing Value atau cara mengeluarkan objek
console.log(person.name); //using dot
console.log(person["name"]); //using square bucket

//Optional Chaining
//berbentuk (?) fungsinya jika terjadi error maka error tersebut akan berubah jadi undefined
const user4 = {};
console.log(user.address);
console.log(user.address?.street);
// console.log(user.address.street); ini error

//Accessing Key
const person2 = {
  name: "ridhwan",
  age: 23,
};

console.log(Object.keys(person2)); //untuk akses semua key
console.log(Object.values(person2)); //untuk akses semua value

//FOR In
//looping didalam sebuah objek cuma bisa pake ini

const person3 = {
  name: "ridhwan",
  age: 23,
};

for (const key in person3) {
  console.log(key); //untuk mengakses key
  console.log(person3[key]); //untuk meengakses value
}

//Destructuring Assignment, meng unpack isi dari objek menjadi variable
const person4 = {
  name: "ridhwan",
  age: 23,
};

//tanpa destructuring
console.log(person4.name);
console.log(person4.age);

//dengan destructuring
const { name, age } = person4; //dibaca key pada person 4 yaitu name and age dikeluarkan dan berubah menjadi variable
console.log(name);
console.log(age);

//destruct array
//awalnya begini
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

//menjadi begini jika unpact
const [a, b] = [10, 20];
console.log(a);
console.log(b);

//Spread Operator -> digunakan untuk copy isi object / menggabungkan object
const objectOne = {
  name: "ridhwansan",
  password: "admin123",
};
const objectTwo = {
  email: "ridhwansan@gmail.com",
  name: "budi", //jika ada key yang sama maka yang sebelumnya akan ke replace otomatis dengan yang setelahnya
};
const result = { ...objectOne, ...objectTwo }; //cara menggunakannya dengan titik 3
console.log(result);

//jika ingin direplace isi valuenya
const hasil = { ...result, password: "akuganteng123" };
console.log(hasil);

//This Keyword -> mengakses propertiy lain dalam sebuah objek
const person5 = {
  firstName: "ridhwan",
  lastName: "santosa",
  greet() {
    console.log(`hello ${this.firstName} ${this.lastName} `);
  },
};
person5.greet();

//Class -> template untuk membuat sebuah objek
//class declaration
//untuk menuliskan class pakai huruf besar dulu

class User {
  greeting() {
    console.log("hello world");
  }
}

//Class Expression
const User2 = class {
  greeting() {
    console.log("hello world");
  }
};

//Create an Object from Class, sebuah objek yang dibuat dari sebuah classs, bisa dibuat banyak objek
const orang = new User();
//cara aksesnya
orang.greeting();

const orang2 = new User();
orang2.greeting();

//Constructor -> menginisialisaasi objek yang dibuat id dalam class atau gampangnya tempat penampungan
class Person {
  constructor(name) {
    // b. konek disini (name)
    this.name = name;
  }
  greeting() {
    console.log(`hello ${this.name}`);
  }
}
const orang3 = new Person("david"); // a. apa yang diinput disini
console.log(orang3.name);

//Access modifier -> public dan private
//public artinya bisa diakses diluar person2
//jika ingin dibuat private bisa ditambahkan tanda pagar "#"
//penambahan tanda pagar diatas constructor
class Person2 {
  #email;
  constructor(name, email) {
    this.name = name; //public
    this.#email = email; //private
  }
  showEmail() {
    console.log(this.#email); //cara aksesnya untuk yang dibuat private, hanya bisa diakses dikelas tersebut
  }
}
const orang4 = new Person2("budi", "budi@gmail.com");
console.log(orang4.name);
console.log(orang4.email);
orang4.showEmail(); //fungsi harus dipanggil

//Getter and Settter
// get -> membaca data
// set-> set value di dalam objek

const orang5 = {
  firstName: "ridhwan",
  lastName: "santosa",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },

  fullName2(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(orang5);

console.log(orang5.fullName); //menggunakan getter

orang5.fullName = "Alice Cooper"; //menggunakan setter

console.log(orang5.fullName2("aceng Man")); //menggunakan function biasa

//Encapsulation
//konsep di OOP untuk ngebundle data dalam 1 unit
//contohnya adalah class dan object (line 180 - 199)

//Inheritance -> pewarisan dari parent class ke child class. jadi property dan method
//dari sebuah class parent bisa dimiliki sama child class

class Product {
  constructor(name, price) {
    this.ProductName = name;
    this.productPrice = price;
  }
  readprice() {
    console.log(this.price);
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price); //menurunkan sifat kelasnya dari kelas product
    this.author = author;
  }
}

const barang = new Book("cara menjadi jago banget coding", 20000, "ridhwansan");

console.log(barang.ProductName); //productName ini kelasnya si bapak (product)
// namun deklarasi variable barang dari book

//Instance Of -> mengecek apakah sebuah object memiliki hubungan ke class tertentu
class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();
console.log(rabbit instanceof Animal); //ternyata variable rabbit memiliki hubungan saudara dengan class Animal
console.log(rabbit instanceof Rabbit); //ternyata variable rabbit memiliki hubungan saudara dengan class Rabbit
console.log(rabbit instanceof Tree); //ternyata variable rabbit tidak memiliki hubungan saudara dengan Tree

//Example to create array of students

const students = [
  {
    name: "alice",
    email: "aliceexample@gmail.com",
    age: 20,
    score: 85,
  },
  {
    name: "bob",
    email: "bobcexample@gmail.com",
    age: 21,
    score: 92,
  },
  {
    name: "charlie",
    email: "charlieexample@gmail.com",
    age: 19,
    score: 78,
  },
];
