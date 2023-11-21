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
  const licenseBadge = renderLicenseBadge(data.license)
  return `# ${data.title}
### Created by: 
https://www.github.com/${data.username}

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage Instructions
${data.usage}

## License Information
${licenseBadge} - 


## How To Contribute
${data.contributing}

## How To Test
${data.testing}
`;
}

module.exports = generateMarkdown;
