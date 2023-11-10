// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(input) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(input) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(input) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

# Table of Contents
1. [Description](#Description)
2. [Some paragraph](#paragraph1)
    1. [Sub paragraph](#subparagraph1)
3. [Another paragraph](#paragraph2)

## Description <a name="Description"></a>
${answers.description}

## Description <a name="Description"></a>
${answers.description}

## Description <a name="Description"></a>
${answers.description}

## Description <a name="Description"></a>
${answers.description}
`;
}

module.exports = generateMarkdown;
