const Engineer = require("../Engineer");

describe("Engineer Test", () => {
  it("should getRole() as Engineer.", () => {
    const stephen = new Engineer(
      "Stephen",
      "stephen@email.com",
      "1",
      "Engineer",
      "stephen1021"
    );
    expect(stephen.getRole()).toBe("Engineer");
  });
  it("should getGitHubProfile() as input GitHub profile.", () => {
    const stephen = new Engineer(
      "Stephen",
      "stephen@email.com",
      "1",
      "Engineer",
      "stephen123"
    );
    expect(stephen.getGitHubProfile()).toBe("stephen1021");
  });
});
