const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is your project is title?',
            name: 'title',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            message: 'Please write a short description of your project:',
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'installation',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            message: 'How do you use your app?',
            name: 'usage',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'list',
            message: 'What license did you used?',
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache license', 'GNU license', 'N/A'],
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributing',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'tests',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            message: 'What is your Email?',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
    ]
).then(({
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    github,
    email
}) => {
    const template = `
 # ${title}

 ${description}

 * [Installation](#installation) 
 * [Usage](#usage) 
 * [License](#license) 
 * [Contributing](#contributing) 
 * [Tests](##tests) 
 
 ## Installation
 ${installation}     
 ## Usage
 ${usage}
 ## License
 ${license}
 ## Contributing
 ${contributing}
 ## Running Tests
 ${tests}
  
 ## Questions
 * GitHub: ${github}
 * E-mail: ${email}`;
createNewFile(title,template);
}
);
function createNewFile(fileName,data){
    fs.writeFile('README.md',data,(err)=>{
        if(err){
            console.log(err);
        }
        console.log('Your README has been created');
    }) 
};