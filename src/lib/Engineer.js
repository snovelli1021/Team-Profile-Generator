const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHubProfile) {
    super(name, id, email);
    this.gitHubProfile = gitHubProfile;
  }

  getGitHubProfile() {
    return this.gitHubProfile;
  }
}

module.exports = Engineer;
