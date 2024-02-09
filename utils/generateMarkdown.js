
function generateMarkdown(answers) {
  return `# ${answers.title}

  ![License](https://img.shields.io/badge/license-${answers.liscense}-blue.svg)
  
# Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
2. [Usage Information](#Usage)    
3. [Contribution Instructions](#Contribution)
4. [Contributors](#contributors)
5. [Testing Instructions](#Testing)
6. [Questions](#Questions?????!)

## Description <a name="Description"></a>
${answers.description}

## Installation <a name="Installation"></a>
${answers.installation}

## Usage Information <a name="Usage"></a>
${answers.usage}

## Contribution Instructions <a name="Contribution"></a>
${answers.contribution}

### Contributors<a name="contributors"></a>
${answers.contributors}

## Testing Instructions <a name="Testing"></a>
${answers.test}

## Questions? <a name="Questions?????!"></a>
For questions you can reach me at:
<br/> ${answers.username} - My Github
<br/> ${answers.email} - My Email
`;
}

module.exports = generateMarkdown;
