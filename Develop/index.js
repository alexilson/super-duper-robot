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
        name: 'Title'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'Username'
    },
    {
        type: 'input',
        message: 'Enter the description of your project:',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Enter the installation instructions for your project:',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Enter usage information about your project:',
        name: 'Usage'
    },
    {
        type: 'list',
        choices: ["MIT", "PIZZA", "MICHAELANGELO"],
        message: 'Select a license for your project:',
        name: 'License'
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines:',
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'Enter your test instructions:',
        name: 'Testing'
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inq
.prompt(questions)
.then((response) => 
    fs.writeFile('README.md', JSON.stringify(response, null, '\t'), (err) => {
    if (err) throw err;
    console.log('file appended');
}))

fetch('https://api.github.com/licenses')
.then((response) => response.json()).then((data) => console.log(data))