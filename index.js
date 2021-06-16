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
    return inquirer.prompt(questions)
}

// Function call to initialize app
init();
