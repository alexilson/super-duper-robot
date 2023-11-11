// TODO: Include packages needed for this application
inq = require('inquirer')
fs = require('fs')

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

inq.prompt(questions).then((response) => console.log(response))