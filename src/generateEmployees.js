const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");

let managersArr = [];
let engineersArr = [];
let internsArr = [];

function userInput() {
  return inquirer.prompt([
    {
      name: "lastEntry",
      message: "Will this be the last employee you want to add?",
      type: "list",
      choices: ["No", "Yes"],
    },
  ]);
}

function employeePrompt() {
  return inquirer.prompt([
    {
      name: "role",
      message: "What type of employee do you want to add?",
      type: "list",
      choices: ["Manager", "Engineer", "Intern"],
    },
    { name: "name", message: "What is the employee's name?", type: "input" },
    { name: "email", message: "What is the employee's email?", type: "input" },
    { name: "id", message: "What is the employee's ID?", type: "input" },
  ]);
}

function managerPrompt() {
  return inquirer.prompt([
    {
      name: "officeNumber",
      message: "What is the employee's Office Number?",
      type: "input",
    },
  ]);
}

function engineerPrompt() {
  return inquirer.prompt([
    {
      name: "gitHubProfile",
      message: "What is the employee's GitHub username?",
      type: "input",
    },
  ]);
}

function internPrompt() {
  return inquirer.prompt([
    {
      name: "school",
      message: "What school is the intern attending?",
      type: "input",
    },
  ]);
}

function createEmployee() {
  let employeePrompt = employeePrompt();
  let employee = new Employee(
    employeePrompt.name,
    employeePrompt.email,
    employeePrompt.id,
    "Employee"
  );
  if (employeePrompt.role === "Manager") {
    let managerAnswer = managerPrompt();
    let manager = new Manager(
      employeePrompt.name,
      employeePrompt.email,
      employeePrompt.id,
      employeePrompt.role,
      managerAnswer.officeNumber
    );
    managersArr.push(manager);
  } else if (employeePrompt.role === "Engineer") {
    let engineerAnswer = engineerPrompt();
    let engineer = new Engineer(
      employeePrompt.name,
      employeePrompt.email,
      employeePrompt.id,
      employeePrompt.role,
      engineerAnswer.gitHubProfile
    );
    engineersArr.push(engineer);
  } else if (employeePrompt.role === "Intern") {
    let internAnswer = internPrompt();
    let intern = new Intern(
      employeePrompt.name,
      employeePrompt.email,
      employeePrompt.id,
      employeePrompt.role,
      internAnswer.school
    );
    internsArr.push(intern);
  }
  let employeeEntry = userInput();
  if (employeeEntry.lastEntry === "No") {
    return createEmployee();
  } else if (
    employeeEntry.lastEntry === "Yes" &&
    managersArr.length > 0 &&
    engineersArr.length > 0
  ) {
    generateHTML(managersArr, engineersArr, internsArr);
  } else {
    console.log(
      "Please ensure you have at lease one Manager AND one Engineer before selecting 'Yes' again."
    );
    return createEmployee();
  }
}

module.exports = {
  createEmployee,
  Employee,
  Manager,
  Engineer,
  Intern,
  managersArr,
  engineersArr,
  internsArr,
};
