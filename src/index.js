const fs = require("fs");
const {
  createEmployee,
  managersArr,
  engineersArr,
  internsArr,
} = require("./src/generateEmployees.js");
const { generateHTML } = require("./src/generateHTML.js");

function writeToFile(data) {
  fs.writeFile("index.html", data, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("index.html file has been generated.");
  });
}

function init() {
  createEmployee();
  writeToFile(generateHTML(managersArr, engineersArr, internsArr));
}

init();
