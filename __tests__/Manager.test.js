const Manager = require("../lib/Manager");

describe("Manager Test", () => {
  it("should getRole() as Manager.", () => {
    const stephen = new Manager(
      "Stephen",
      "stephen@email.com",
      "1",
      "Manager",
      1
    );
    expect(stephen.getRole()).toBe("Manager");
  });
  it("should getOfficeNumber() as input office number.", () => {
    const stephen = new Manager(
      "Stephen",
      "stephen@email.com",
      "1",
      "Manager",
      1
    );
    expect(stephen.getOfficeNumber()).toBe(1);
  });
});
