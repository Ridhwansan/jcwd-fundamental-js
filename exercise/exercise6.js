//1
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

studentRow(students);

function studentRow(arr) {
  let highest = arr[0].score;
  let lowest = arr[0].score;
  let tempAvg = 0;

  //menghitung score
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i].score) {
      highest = arr[i].score;
    }
    if (lowest > arr[i].score) {
      lowest = arr[i].score;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (highest === arr[i].score) {
      console.log(`Nilai tertinggi adalah ${arr[i].score}`);
    }
    if (lowest === arr[i].score) {
      console.log(`nilai terendah adalah ${arr[i].score}`);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    tempAvg += arr[i].score; // tempAvg = tempAvg + arr[i].score
  }
  let avg = tempAvg / arr.length;
  console.log(`Rata rata nilanya adalah ${avg}`);
}
//menghitung umur
studentRowAge(students); // fungsi harus dipanggil
function studentRowAge(arr) {
  let ageHighest = arr[0].age;
  let ageLowest = arr[0].age;
  let nameHighest = arr[0].name;
  let nameLowest = arr[0].name;
  let tempAvgAge = 0;

  let sumAge = 0;
  for (let j = 0; j < arr.length; j++) {
    if (ageHighest < arr[j].age) {
      ageHighest = arr[j].age;
      nameHighest = arr[j].name;
    }
    if (ageLowest > arr[j].age) {
      ageLowest = arr[j].age;
      nameLowest = arr[0].name;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (ageHighest === arr[j].age) {
      console.log(
        `Usia tertinggi adalah ${nameHighest} dengan usia ${ageHighest} tahun`
      );
    }
    if (ageLowest === arr[j].age) {
      console.log(
        `Usia terendah adalah ${nameLowest} dengan ${ageLowest} tahun`
      );
    }
  }

  for (let j = 0; j < arr.length; j++) {
    tempAvgAge += arr[j].age;
  }
  let avgAge = tempAvgAge / arr.length;
  console.log(`rata - rata usia adalah ${avgAge}`);
}

//2 ==============================================================================================
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Transaction extends Product {
//   constructor(name, price, product, total, pay) {
//     super(name, price);
//     this.product = product;
//     this.total = total;
//     this.pay = pay;
//   }

//   addToCart() {
//     const namaProduct = this.name;
//     console.log(`Barang yang ada dalam keranjang : ${namaProduct}`);
//   }

//   showTotal(total) {
//     const hargaProduct = this.price;
//     const jmlProduct = this.product;
//     let totalHarga = jmlProduct * hargaProduct;
//     console.log(`Jumlah barang saat ini ${jmlProduct}`);
//     console.log(`Total harga barangnya ${totalHarga}`);
//   }

//   checkOut() {

//   }
// }

// const myProduct = new Product("Tas", 20000);
// const myTransaction = new Transaction("Headset", 400000, 3);

// console.log(myProduct.name);
// console.log(myProduct.price);

// myTransaction.addToCart();
// myTransaction.showTotal();
// myTransaction.checkOut();

class Product {
  coonstructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction extends Product {
  constructor(name, price, total, product) {
    //kondisi constructor harus ada parameternya jika data didalamnya diubah atau bakal dipanggil diluar fungsi
    super();
    this.total = total;
    this.product = product;
    this.allProductData = [];
    let payment = 0;
  }

  addToCart(name, price, product) {
    this.allProductData.push({ name, price, product });
    if (price > 0 && product > 0) {
      console.log(`item ditambahkan ${name}, ${price}, ${product}`);
    }
  }

  showTotal() {
    let cost = this.allProductData.reduce(
      (totalPrice, item) => totalPrice + item.price * item.product,
      0
    );
    console.log(`cost : ${cost}`);
  }

  checkout(payment) {
    console.log(this.allProductData);

    let totalHarga = this.allProductData.reduce(
      (a, b) => a + b.price * b.product, //ada 0 dibelakang artinya si a ini first time bakal 0 nilainya
      0
    );
    console.log(`total harga : ${totalHarga} `);
    if (payment < totalHarga) {
      let bayar = totalHarga - payment;
      console.log(`Uang anda kurang sebanyak ${bayar}`);
    }
    if (payment == totalHarga) {
      console.log("Uang anda pas");
    }
    if (payment > totalHarga) {
      let bayar = payment - totalHarga;
      console.log(`Anda mendapatkan kembalian sebesar ${bayar}`);
    }
  }
}

//USE
const buyingItem = new Transaction();
//tambahkan item disini
buyingItem.addToCart("Tas", 200, 2);
buyingItem.addToCart("pulpen", 400, 3);

//kalkulasi item
buyingItem.showTotal();

//bayar
buyingItem.checkout(2000);
