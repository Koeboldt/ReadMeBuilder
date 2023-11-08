// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
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
    name: 'test',
    message: 'What are the test guildines?'
},

{
    type: 'checkbox', 
    name: 'liscense',
    message: 'Which liscense is used here?',
    choices: [1,2,3,4]
},
{
    type: 'input', 
    name: 'username',
    message: 'What is your GitHub username??'
},
{
    type: 'input', 
    name: 'email',
    message: 'What is your Email address?'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
