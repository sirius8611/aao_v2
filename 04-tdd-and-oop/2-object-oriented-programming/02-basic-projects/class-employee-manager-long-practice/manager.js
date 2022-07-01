const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, salary, title, manager) {
    super(name, salary, title, manager);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    return (this._totalSubSalary() + this.salary) * multiplier;
  }

  _totalSubSalary() {
    let totalSubSalary = 0;
    this.employees.forEach((employee) => {
      if (employee instanceof Manager) {
        totalSubSalary += employee.salary + employee._totalSubSalary();
      } else {
        totalSubSalary += employee.salary;
      }
    });
    return totalSubSalary;
  }
}
module.exports = Manager;
