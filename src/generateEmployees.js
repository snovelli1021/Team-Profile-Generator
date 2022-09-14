const inquirer = require("inquirer");
const { generateHTML } = require("./generateHTML");
const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");

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

function defineEmployeePrompt() {
  return inquirer.prompt([
    {
      name: "role",
      message: "What type of employee are you submitting?",
      type: "list",
      choices: ["Manager", "Engineer", "Intern"],
    },
    { name: "name", message: "What is their name?", type: "input" },
    { name: "email", message: "What is their email?", type: "input" },
    { name: "id", message: "What is their employee ID?", type: "input" },
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
  let employeePrompt = defineEmployeePrompt();
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
      "Please make sure you have at lease one Manager AND one Engineer before selecting 'Yes' again."
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
