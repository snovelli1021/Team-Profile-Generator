const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, id, role, gitHubProfile) {
    super(name, email, id, role);
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
