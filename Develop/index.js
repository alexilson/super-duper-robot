// TODO: Include packages needed for this application
const inq = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const fetch = require('node-fetch')



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter the description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter the installation instructions for your project:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage information about your project:',
        name: 'usage'
    },
    {
        type: 'list',
        choices: ["MIT", "PIZZA", "MICHAELANGELO"],
        message: 'Select a license for your project:',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter your test instructions:',
        name: 'testing'
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('file appended');
    })
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
    .then((response) => generateMarkdown(response))
    .then((response) => writeToFile('README.md', response))
}

// Function to get list of licenses
function getLicenses() {
    fetch('https://api.github.com/licenses')
    .then((response) => response.json())
    return response;
}

// Function call to initialize app
init();

// inq
// .prompt(questions)
// .then((response) => 
//     fs.writeFile('README.md', JSON.stringify(response, null, '\t'), (err) => {
//     if (err) throw err;
//     console.log('file appended');
// }))

// fetch('https://api.github.com/licenses')
// .then((response) => response.json())
// .then((data) => console.log(data))