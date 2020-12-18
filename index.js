// Beginning of script
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your application?',
    },
        {
        type: 'input',
        name: 'usage',
        message: 'Is there any usage information for your application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please state the guidelines for contributing to your application.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instruction for your application?',

    },
    {
        type: 'input',
        name: 'license',
        message: 'Which license did you use for your application?',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3'],

    },
])


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
