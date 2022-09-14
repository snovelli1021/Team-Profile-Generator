const Intern = require("../lib/Intern");

describe("Intern Test", () => {
  it("should getRole() as Intern.", () => {
    const stephen = new Intern(
      "Stephen",
      "stephen@email.com",
      "1",
      "Intern",
      "University of Washington"
    );
    expect(stephen.getRole()).toBe("Intern");
  });
  it("should getSchool() as input school.", () => {
    const stephen = new Intern(
      "Stephen",
      "stephen@email.com",
      "1",
      "Intern",
      "University of Washington"
    );
    expect(stephen.getSchool()).toBe("University of Washington");
  });
});
