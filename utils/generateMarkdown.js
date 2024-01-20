// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (!license) {
    return ``;
  }

  // License Badge Markdown taken from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

  switch (license) {
    case "agpl-3.0":
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    case "apache-2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case "bsd-2-clause":
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    case "bsd-3-clause":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case "bsl-1.0":
      return `[![License](https://img.shields.io/badge/License-BSL_1.0-blue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    case "cc0-1.0":
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    case "epl-2.0":
      return `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`
    case "gpl-2.0":
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    case "gpl-3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case "lgpl-3.0":
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    case "mit":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "mpl-2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case "unlicense":
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    default:
      return ``
}
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license) {
    return ``;
  }

  switch (license) {
    case "agpl-3.0":
      return `https://www.gnu.org/licenses/agpl-3.0`
    case "apache-2.0":
      return `https://opensource.org/licenses/Apache-2.0`
    case "bsd-2-clause":
      return `https://opensource.org/licenses/BSD-2-Clause`
    case "bsd-3-clause":
      return `https://opensource.org/licenses/BSD-3-Clause`
    case "bsl-1.0":
      return `https://www.boost.org/LICENSE_1_0.txt`
    case "cc0-1.0":
      return `http://creativecommons.org/publicdomain/zero/1.0/`
    case "epl-2.0":
      return `https://opensource.org/licenses/EPL-2.0`
    case "gpl-2.0":
      return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
    case "gpl-3.0":
      return `https://www.gnu.org/licenses/gpl-3.0`
    case "lgpl-3.0":
      return `https://www.gnu.org/licenses/lgpl-3.0`
    case "mit":
      return `https://opensource.org/licenses/MIT`
    case "mpl-2.0":
      return `https://opensource.org/licenses/MPL-2.0`
    case "unlicense":
      return `http://unlicense.org/`
    default:
      return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return ``;
  }

  switch (license) {
    case "agpl-3.0":
      return `GNU Affero General Public License v3.0`
    case "apache-2.0":
      return `Apache License 2.0`
    case "bsd-2-clause":
      return `BSD 2-Clause \"Simplified\" License`
    case "bsd-3-clause":
      return `BSD 3-Clause \"New\" or \"Revised\" License`
    case "bsl-1.0":
      return `Boost Software License 1.0`
    case "cc0-1.0":
      return `Creative Commons Zero v1.0 Universal`
    case "epl-2.0":
      return `Eclipse Public License 2.0`
    case "gpl-2.0":
      return `GNU General Public License v2.0`
    case "gpl-3.0":
      return `GNU General Public License v3.0`
    case "lgpl-3.0":
      return `GNU Lesser General Public License v3.0`
    case "mit":
      return `MIT License`
    case "mpl-2.0":
      return `Mozilla Public License 2.0`
    case "unlicense":
      return `The Unlicense`
    default:
      return ``
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

## Description
${renderLicenseBadge(data.license)}
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
${renderLicenseBadge(data.license)}
Project is licensed under ${renderLicenseSection(data.license)}.

Information on the license can be found here: ${renderLicenseLink(data.license)}

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
