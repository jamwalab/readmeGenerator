// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const readFolderfiles = require("./utils/readFolderfiles");
const generateMarkdown = require("./utils/generateMarkdown");

let ssList = [];

const mockData = {
    title: 'Readme Generator',
    description: 'This project reads user inputs using inquirer and creates markdown based on the inputs.\n\nThis app makes it east to generate',
    installation: 'fork the repo and install npm modules. once done run using node and reply to series of questions.\n\nReply to me',
    usage: 'Use as you like, no restrictions',
    contribution: 'To contribut please contact the author of the project',
    test: 'Test features are not active yet',
    license: 'ISC',
    badgeOption: true,
    addBadge: '![AUR license](https://img.shields.io/aur/license/android-studio)',
    videoOption: true,
    video: 'https://www.youtube.com/watch?v=va9OS0QMGyM&ab_channel=VideoFromSpaceVideoFromSpaceVerified',
    creditOption: true,
    credit: 'Abhishek Jamwal',
    featureOption: true,
    feature: 'lots and lots ',
    FileName: 'README',
    addSs: true,
    screenshot: [
      {
        screenshotSection: 'Description',
        screenshotFile: '05-third-party-apis-homework-demo.gif',
        addSs: true
      },
      {
        screenshotSection: 'Usage',
        screenshotFile: '06-server-side-apis-homework-demo.png',
        addSs: false
      }
    ]
  }

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project!!\n",
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log("\nTitle cannot be blank, please try again!!\n");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please provide description for this project!! Use \\n\\n for newline and \\n* for bullets!!\n",
        validate: descriptionInput => {
            if (descriptionInput.split(' ').length > 4) {
                return true;
            }
            else {
                console.log("\nPlease input at least five words!!\n");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions on how to install this project!! Use \\n\\n for newline and \\n* for bullets!!\n",
        validate: installationInput => {
            if (installationInput.split(' ').length > 4) {
                return true;
            }
            else {
                console.log("\nPlease input at least five words!!\n");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter the usage information for the project!! Use \\n\\n for newline and \\n* for bullets!!\n",
        validate: usageInput => {
            if (usageInput.split(' ').length > 4) {
                return true;
            }
            else {
                console.log("\nPlease input at least five words!!\n");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution guidelines for the project!! Use \\n\\n for newline and \\n* for bullets!!\n",
        validate: contributionInput => {
            if (contributionInput.split(' ').length > 4) {
                return true;
            }
            else {
                console.log("\nPlease input at least five words!!\n");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions for the project!! Use \\n\\n for newline and \\n* for bullets!!\n",
        validate: testInput => {
            if (testInput.split(' ').length > 4) {
                return true;
            }
            else {
                console.log("\nPlease input at least five words!!\n");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please select optional data you want to add?",
        choices: [
            "MIT", "Apache","GNU", "ISC", "EPL"
        ]
    },
    {
        type: "confirm",
        name: "badgeOption",
        message: " Would you like to add badge for your license?",
        default: false
    },
    {
        type: "confirm",
        name: "videoOption",
        message: " Would you like to add a video link?",
        default: false
    },
    {
        type: "input",
        name: "video",
        message: "Please enter the video link for your project!!\n",
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
                console.log("\nLink cannot be blank, please try again!!\n");
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
        message: "Please enter credits for your project!! Use \\n\\n for newline and \\n* for bullets!!\n",
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
                console.log("\nEntry cannot be blank, please try again!!\n");
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
        message: "Please enter features for your project!! Use \\n\\n for newline and \\n* for bullets!!\n",
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
                console.log("\nEntry cannot be blank, please try again!!\n");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "FileName",
        message: "Please enter name of the Read Me file!!",
        default: "README"
    },
    {
        type: "confirm",
        name: "addSs",
        message: "Would you like to add screenshots to your project?",
        default: false
    }
]

const screenshot = questions => {
    if (!questions.screenshot) {
        questions.screenshot = [];
    }
    if (!questions.addSs) {
        return questions;
    }
    if (ssList.length === 0) {
        console.log("----No screenshots to select from!!")
        return questions;
    }
    return inquirer.prompt([
        {
            type: "list",
            name: "screenshotSection",
            message: "After which section do you want to add the screenshot to?",
            choices: [
                "Description", "Installation","Usage"
            ]
        },
        {
            type: "list",
            name: "screenshotFile",
            message: "Select an image file!!",
            choices: ssList
        },
        {
            type: "confirm",
            name: "addSs",
            message: "Would you like to add screenshots to your project?",
            default: false
        }
    ]).then (ssData => {
        questions.screenshot.push(ssData);
        if (ssData.addSs) {
            return screenshot(questions);
        }
        else {
            return questions;
        }
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
    return inquirer
        .prompt(questions);
};

// Function call to initialize app
readFolderfiles()
    .then(response => {
        ssList = response;
        console.log(ssList)
    })
    //.then(init)
    //.then(screenshot)
    //change
    .then(readmeInputs => {
        return generateMarkdown(mockData);
    })
    .then(response => {
        console.log(response);
    })
