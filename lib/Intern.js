const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, email, id, role, school) {
    super(name, email, id, role);
    this.school = school;
  }
  getRole() {
    return this.role;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
