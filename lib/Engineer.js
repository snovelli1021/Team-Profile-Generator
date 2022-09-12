const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, role, gitHubProfile) {
    super(name, id, email, role);
    this.gitHubProfile = gitHubProfile;
  }
  getRole() {
    return this.role;
  }
  getGitHubProfile() {
    return this.gitHubProfile;
  }
}

module.exports = Engineer;
