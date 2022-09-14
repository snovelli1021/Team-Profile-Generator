const Employee = require("../lib/Employee");

describe("Employee Test", () => {
  it("should getName() as input name.", () => {
    const stephen = new Employee(
      "Stephen",
      "stephen@email.com",
      "1",
      "Employee"
    );
    expect(stephen.getName()).toBe("Stephen");
  });
  it("should getId() as input Employee ID.", () => {
    const stephen = new Employee(
      "Stephen",
      "stephen@email.com",
      "1",
      "Employee"
    );
    expect(stephen.getId()).toBe("1");
  });
  it("should getEmail() as input email.", () => {
    const stephen = new Employee(
      "Stephen",
      "stephen@email.com",
      "1",
      "Employee"
    );
    expect(stephen.getEmail()).toBe("stephen@email.com");
  });
  it("should getRole() as Employee.", () => {
    const stephen = new Employee(
      "Stephen",
      "stephen@email.com",
      "1",
      "Employee"
    );
    expect(stephen.getRole()).toBe("Employee");
  });
});
