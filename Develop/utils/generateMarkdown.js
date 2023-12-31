// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `https://img.shields.io/badge/${license}`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const licenseBadge = renderLicenseBadge(data.license)
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## License
[![License: ${data.license}](https://img.shields.io/badge/${data.license}.svg)](https://api.github.com/licenses/${data.license})

## Contributing
${data.contributing}

## Tests
${data.testing}

## Questions
For additional questions, please contact me here:

GitHub: https://www.github.com/${data.username}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
