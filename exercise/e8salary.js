// class Employee {
//   constructor(salary, overSalary) {
//     this.salary = salary;
//     this.overSalary = overSalary;
//     let hours = 0;
//   }

//   setWorkingHours(number) {
//     this.hours = number;
//   }

//   getSalary() {
//     //ini tempat buat menghitung gaji yang didapat berapa
//     if (this.hours > 6) {
//       const totalSalary = this.overSalary * this.hours;
//       console.log(`gajinya ${totalSalary}`);
//     }
//   }
// }

// class FulltimeEmployee extends Employee {
//   constructor(salary = 100000, overSalary = 75000) {
//     super(salary, overSalary);
//   }
// }

// class PartimeEmployee extends Employee {
//   constructor(salary = 50000, overSalary = 35000) {
//     super(salary, overSalary);
//   }
// }

// const ridhwan = new PartimeEmployee();
// console.log(ridhwan);
// ridhwan.setWorkingHours(7);
// ridhwan.getSalary();

//DIBAHAS ====================================
class Employee {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.workingHours = 0;
  }

  formatCurrency(price) {
    const result = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
    return result;
  }
}

class FulltimeEmployee extends Employee {
  constructor(name, gender) {
    super(name, gender);
  }

  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  calculateSalary() {
    const hourlyRate = 100000;
    const extraHourlyRate = 75000;

    if (this.workingHours <= 6) {
      return {
        name: this.name,
        totalSalary: this.workingHours * hourlyRate,
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workingHours - regularHours;

      return {
        name: this.name,
        totalSalaryRegular: this.formatCurrency(regularHours * hourlyRate),
        totalSalaryExtra: this.formatCurrency(extraHours * hourlyRate),
        total: this.formatCurrency(
          regularHours * hourlyRate + extraHours * extraHourlyRate
        ),
      };
    }
  }
}

class ParttimeEmployee extends Employee {
  constructor(name, gender) {
    super(name, gender);
  }

  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  calculateSalary() {
    const hourlyRate = 50000;
    const extraHourlyRate = 35000;

    if (this.workingHours <= 6) {
      return {
        name: this.name,
        totalSalary: this.workingHours * hourlyRate,
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workingHours - regularHours;

      return {
        name: this.name,
        totalSalaryRegular: this.formatCurrency(regularHours * hourlyRate),
        totalSalaryExtra: this.formatCurrency(extraHours * hourlyRate),
        total: this.formatCurrency(
          regularHours * hourlyRate + extraHours * extraHourlyRate
        ),
      };
    }
  }
}

const employee1 = new FulltimeEmployee("ridhwan", "laki");
employee1.addWorkingHours(2);
employee1.addWorkingHours(6);
employee1.addWorkingHours(2);
console.log(employee1.workingHours);

console.log(employee1.calculateSalary());

const employee2 = new ParttimeEmployee("siska", "cewek");
employee2.addWorkingHours(5);
employee2.addWorkingHours(4);

console.log(employee2.calculateSalary());
