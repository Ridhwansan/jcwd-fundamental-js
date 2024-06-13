class Employee {
  constructor(salary, overSalary) {
    this.salary = salary;
    this.overSalary = overSalary;
    let hours = 0;
  }

  setWorkingHours(number) {
    this.hours = number;
  }

  getSalary() {
    //ini tempat buat menghitung gaji yang didapat berapa
  }
}

class FulltimeEmployee extends Employee {
  constructor(salary = 100000, overSalary = 75000) {
    super(salary, overSalary);
  }
}

class PartimeEmployee extends Employee {
  constructor(salary = 50000, overSalary = 35000) {
    super(salary, overSalary);
  }
}

const ridhwan = new PartimeEmployee();
console.log(ridhwan);
