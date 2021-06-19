# README GENERATOR
## Version 1.0
## Description

This app helps develop a README file based on user's input. This app uses inquirer to ask user for a set of command line inputs for different sections of the README. It includes both the required and sections and the optional ones. The user has the option to ignore some of the optional sections.The user also has the option to add screenshots, video links and badges. When run the command line will look like the image below. Once all questions are answered a README file will be generated.


## Table of Contents

* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Contribution](#contribution)
* [Feature](#feature)
* [Credit](#credit)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

To install this app you need to have node installed in your system. Once installed you can clone the repository using the link _https://github.com/jamwalab/readmeGenerator.git_.

Once the repository is cloned, using bash terminal, move to the app repository. Once there install the required npm modules suing the command _"npm install"_. After the npm modules are installed, run the app using the command _"node index"_. App will ask you a series of question, answering them will generate the README file.


## Usage

Once run the app will ask a series of questions, based on which the readme file is generated. Some of the questions asked include:
* Title
* Description
* Installation
* Usage
* Test
* Contribution
* License
* Features
* Credits
* License Badge
* Screenshots
* Video Link

Please note, questions like Description, Installation,Usage, Contribution and Test have minimum of five word requirement. For screenshots files are picked up from [image folder](./assets/img/). App will ask the user for the section in which they want to add screenshots and then the user will have the option to pick an immage from the ones stored in the [image folder](./assets/img/). Adding badge will replace the license text with a badge. Clicking on the padge will open the relevant license page.\n\nA run through of this app can be found in the below video.aaa


## Test

This app does not support testing option at this moment. This feature may be added in the future versions.

## Contribution

Contributions can be made to this app. General guidelines can be found [here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

## Feature
    
Some of the features include:
* Dynamically create README based on user inputs
* Able to add screenshots using the selector menu
* Can include video links to show usage of the app
* Can add license badge with link to the license page
    
## Credits
    
NPM Module:
* [Inquirer](https://www.npmjs.com/package/inquirer)

User:
* [Abhishek Jamwal](https://github.com/jamwalab)
    