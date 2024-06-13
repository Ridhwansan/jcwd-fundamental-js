//1

class StudentCalculator {
  constructor(students) {
    this.students = students;
  }

  calculate() {
    let maxScore, minScore, avgScore, maxAge, minAge, avgAge;

    const sortScore = this.students.sort((a, b) => a.score - b.score);
    const sumScore = this.students.reduce((a, b) => a + b.score, 0);
    maxScore = sortScore[sortScore.length - 1].score;
    minScore = sortScore[0].score;
    avgScore = sumScore / this.students.length;

    const sortAge = this.students.sort((a, b) => a.age - b.age);
    const sumAge = this.students.reduce((a, b) => a + b.age, 0);
    maxAge = sortAge[sortAge.length - 1].age;
    minAge = sortAge[0].age;
    avgAge = sumAge / this.students.length;

    return {
      score: {
        highest: maxScore,
        lowest: minScore,
        average: avgScore,
      },
      age: {
        highest: maxAge,
        lowest: minAge,
        average: avgAge,
      },
    };
  }
}

const students = [
  {
    name: "budi",
    email: "budi@mail.com",
    age: 20,
    score: 85,
  },
  {
    name: "siti",
    email: "siti@mail.com",
    age: 21,
    score: 92,
  },
  {
    name: "joko",
    email: "joko@mail.com",
    age: 19,
    score: 78,
  },
];

const studentCalculator = new StudentCalculator(students);

const result = studentCalculator.calculate();
console.log(result);

//2  ========================================================
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.cart = [];
    this.total = 0;
  }

  addToCart(product, qty) {
    const existingProduct = this.cart.find(
      (item) => item.product.name === product.name
    );

    if (existingProduct) {
      existingProduct.qty += qty;
    } else {
      this.cart.push({ product, qty });
    }

    this.total += product.price * qty;
  }

  showCart() {
    console.log(this.cart);
  }

  showTotal() {
    console.log(this.total);
  }

  checkout(userMoney) {
    if (userMoney < this.total || !userMoney) {
      return "Transaction failed";
    }

    return {
      total: this.total,
      message: "Transaction Success",
      remainingFunds: userMoney - this.total,
    };
  }
}
const product1 = new Product("buku", 5000);
const product2 = new Product("pencil", 2000);

const transaction = new Transaction();

transaction.addToCart(product1, 2);
transaction.addToCart(product1, 5);
transaction.addToCart(product2, 1);

transaction.showCart();
transaction.showTotal();

console.log(transaction.checkout(100000));
