// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project!!",
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log("Title cannot be blank, please try again!!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please provide description for this project!!",
        validate: descriptionInput => {
            if (descriptionInput.split(' ').length > 4) {
                return true;
            }
            else {
                console.log("Please input at least five words!!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions on how to install this project!!",
        validate: installationInput => {
            if (installationInput.split(' ').length > 4) {
                return true;
            }
            else {
                console.log("Please input at least five words!!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter the usage information for the project!!",
        validate: usageInput => {
            if (usageInput.split(' ').length > 4) {
                return true;
            }
            else {
                console.log("Please input at least five words!!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution guidelines for the project!!",
        validate: contributionInput => {
            if (contributionInput.split(' ').length > 4) {
                return true;
            }
            else {
                console.log("Please input at least five words!!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions for the project!!",
        validate: testInput => {
            if (testInput.split(' ').length > 4) {
                return true;
            }
            else {
                console.log("Please input at least five words!!");
                return false;
            }
        }
    }
]

/*() => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Please enter the title of your project!!",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log("Title cannot be blank, please try again!!");
                    return false;
                }
            }
        }
    ])
};*/

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer
        .prompt(questions);
};

// Function call to initialize app
init()
    .then(readmeData => {
        console.log(readmeData);
    });
