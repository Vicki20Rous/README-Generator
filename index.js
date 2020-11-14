const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
{
    type: "input",
    message: "What's your name?",
    name: "Title"
},
{
    type: "input",
    message: "What's your name?",
    name: "Title"
},
{
    type: "input",
    message: "What's your name?",
    name: "Title"
},
{
    type: "input",
    message: "What's your name?",
    name: "Title"
},
{
    type: "input",
    message: "What's your name?",
    name: "Title"
},
{
    type: "input",
    message: "What's your name?",
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
    prompt(questions).then(answers => {

        const response = generateMarkdown(answers);
        console.log((answers);
        )
    })

}

// function call to initialize program
init();
