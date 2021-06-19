//-----DECLARATION SECTION-----//
const inquirer = require("inquirer");
//Read image folder
const readFolderfiles = require("./utils/readFolderfiles");
//Generate README template
const generateMarkdown = require("./utils/generateMarkdown");
//Write the template on file
const writeFile = require("./utils/writeMarkdown");

//Empty image list array
let ssList = [];

//-----ARRAY FOR INQUIRER - LIST OF QUESTIONS-----//
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project!!(Required)\n",
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
        message: "Please provide description for this project (minimum five words)!!\n",
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
        type: "editor",
        name: "installation",
        message: "Please provide instructions on how to install this project (minimum five words)!!\n",
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
        type: "editor",
        name: "usage",
        message: "Please enter the usage information for the project (minimum five words)!!\n",
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
        message: "Please provide contribution guidelines for the project (minimum five words)!!\n",
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
        message: "Please provide test instructions for the project (minimum five words)!!\n",
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
        type: "editor",
        name: "credit",
        message: "Please enter credits for your project!!\n",
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
        type: "editor",
        name: "feature",
        message: "Please enter features for your project!!\n",
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
        name: "fileName",
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

//-----OPTIONAL SCREENSHOR SECTION - WILL LOOP UNTIL NO IS SELECTED-----//
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

//-----INITIATES THE INQUIRER-----//
function init() {
    console.log(`
    ==================================================
    README GENERATOR - Please follow the instructions.
    ==================================================
    `)
    return inquirer
        .prompt(questions);
};

//-----MAIN CALL LOGIC-----//
readFolderfiles()
    .then(response => {
        ssList = response;
    })
    .then(init)
    .then(screenshot)
    .then(readmeInputs => {
        return {
            markdownText: generateMarkdown(readmeInputs), 
            fileName: readmeInputs.fileName
        };
    })
    .then(writeFileData => {
        return writeFile(writeFileData);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })