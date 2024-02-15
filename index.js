
const outquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [{
    type: 'input', 
    name: 'title',
    message: 'What is the title of the Project?'
},{
    type: 'input', 
    name: 'description',
    message: 'What is the project description?'
},
{
    type: 'input', 
    name: 'installation',
    message: 'What are the installation instructions?'
},
{
    type: 'input', 
    name: 'usage',
    message: 'What is the usage information?'
},
{
    type: 'input', 
    name: 'contribution',
    message: 'What are the guildlines for contribution?'
},
{
    type: 'input', 
    name: 'contributors',
    message: 'Is there anyone else that contributed to the project?'
},
{
    type: 'input', 
    name: 'test',
    message: 'What are the test guildines?'
},

{
    type: 'input', 
    name: 'liscense',
    message: 'Which liscense is used here?',
},
{
    type: 'input', 
    name: 'username',
    message: 'What is your GitHub username, or a link to your Github profile?'
},
{
    type: 'input', 
    name: 'email',
    message: 'What is your Email address?'
}];


function writeToFile(fileName, answers) {
    fs.writeFile(`./output/${fileName}` ,generateMarkdown(answers), (err)=> console.log(err)); console.log(answers)
}

function init() {
    outquire.prompt(questions).then(answers => writeToFile('README.md', answers))}

// Function call to initialize app
init();
