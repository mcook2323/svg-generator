// These are the packages required to run the  Auto generate README
const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./generateLogo');
const path = require('path')

// These are the array of questions to place in the automated README file
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'What text would you like to include (Up to 3 characters)',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the text color to be? Enter a color keyword (OR a hexadecimal number)?'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like your logo to be?',
    choices: ['Triangle', 'Square', 'Circle']
  }
];


// This is the funnction to write the README file
function writeToFile(fileName, data) {
  let content = generateLogo(data)
  fs.writeFileSync(fileName, content, function(error) {
    if(error){
      return console.log(error)
    } 
    console.log('Generated SVG Logo!')
  });
}

// This is the function to initialize the app
function init() {
  inquirer
  .prompt(questions).then(function(data){
    var fileName = 'logo.svg';
    writeToFile(fileName, data);
  });}

// Function call to initialize app
init();
