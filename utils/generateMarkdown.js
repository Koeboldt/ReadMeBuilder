// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(input) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(input) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(input) {}


function generateMarkdown(answers) {
  return `# ${answers.title}

# Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
2. [Usage Information](#Usage)    
3. [Contribution Instructions](#Contribution)
      I. [Contributors](#contributors)
4. [Testing Instructions](#Testing)
5. [Questions](#Questions?????!)

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
${answers.username} - My Github
${answers.email} - My Email
`;
}

module.exports = generateMarkdown;
