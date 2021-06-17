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
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select optional data you want to add?",
        choices: [
            "MIT", "Apache","GNU", "ISC", "Rust"
        ],
        default: "MIT"
    },
    {
        type: "confirm",
        name: "videoOption",
        message: "Would you like to add a video link?",
        default: false
    },
    {
        type: "input",
        name: "video",
        message: "Please enter the video link for your project!!",
        when: ({videoOption}) => {
            if (videoOption) {
                return true;
            } else {
                return false;
            }
        },
        validate: input => {
            if (input) {
                return true;
            }
            else {
                console.log("Link cannot be blank, please try again!!");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "creditOption",
        message: "Would you like to add credits for your project?",
        default: false
    },
    {
        type: "input",
        name: "credit",
        message: "Please enter credits for your project!!",
        when: ({creditOption}) => {
            if (creditOption) {
                return true;
            } else {
                return false;
            }
        },
        validate: input => {
            if (input) {
                return true;
            }
            else {
                console.log("Entry cannot be blank, please try again!!");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "featureOption",
        message: "Would you like to add features for your project?",
        default: false
    },
    {
        type: "input",
        name: "feature",
        message: "Please enter features for your project!!",
        when: ({creditOption}) => {
            if (creditOption) {
                return true;
            } else {
                return false;
            }
        },
        validate: input => {
            if (input) {
                return true;
            }
            else {
                console.log("Entry cannot be blank, please try again!!");
                return false;
            }
        }
    }
]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
    return inquirer
        .prompt(questions);
};

// Function call to initialize app
init()
    //.then(optionalData)
    .then(readmeData => {
        console.log(readmeData);
    });
