const generateMarkdown = require("./generateMarkdown");
const inquirer = require ("inquirer")

// array of questions for user
const questions = [
{
    type: "input",
    message: "What's your name?",
    name: "Title"
},
{
    type: "input",
    message: "What's your email address?",
    name: "Title"
},
{
    type: "input",
    message: "What's skills do have?",
    name: "Title"
},
{
    type: "input",
    message: "How many years of experience do you have?",
    name: "Title"
},
{
    type: "input",
    message: "Tell us about yourself?",
    name: "Title"
},
{
    type: "input",
    message: "What makes you a good fit?",
    name: "Title"
},


];

// function to write README file
function writeToFile(fileName, data) {
    writeToFile(fileName,data, err => {
        if (err) {
            throw err;
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {

        const response = generateMarkdown(answers);
        console.log(answers);
        
    })

}

// function call to initialize program
init();
