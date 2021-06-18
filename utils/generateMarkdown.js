// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, optional) {
  if (optional.badgeOption) {
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else if (license === "Apache") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (license === "GNU") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    else if (license === "ISC") {
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    }
    else if (license === "EPL") {
      return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }
  }
}

const tableOfContent = (installation, usage, contribution, test, license, optional) => {
  let table = `
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)`;
  if (optional.credit) {
    console.log("in")
    table = table.concat("\n* [Credit](#credit)")
  }
  if (optional.feature) {
    console.log("in")
    table = table.concat("\n* [Feature](#feature)")
  }
  return table;
}

const checkScreenshot = (optional, section) => {
  console.log(optional)
  if (optional.screenshot.length === 0) {
    return "";
  }
  let ssText = "";
  optional.screenshot.forEach(screenshot => {
    if (screenshot.screenshotSection === section) {
      ssText = ssText.concat(`\n![image](./assets/img/${screenshot.screenshotFile})`)
    }
  });
  return ssText;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const {title, description, installation, usage, contribution, test, license, ...optional} = data;
  return `# ${title}
## Description

${description}
${checkScreenshot(optional, "Description")}

## Table of Contents
${tableOfContent(installation, usage, contribution, test, license, optional)}

## License

${license} ${renderLicenseBadge(license, optional)}

## Installation

${installation}

## Usage

${usage}
${checkScreenshot(optional, "Usage")}

## Contribution

${contribution}

## Test

${test}

`;
}

module.exports = generateMarkdown;
