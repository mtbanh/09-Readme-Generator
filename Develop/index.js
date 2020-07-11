
var fs = require("fs");
var inquirer = require("inquirer");
const util = require("util");
// const { makeBadge, ValidationError } = require('badge-maker')


const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
return inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "gitUserName"
        },
        {
            type: "input",
            message: "What is your github email?",
            name: "githubEmail"
        },
        {
            type: "input",
            message: "What is the name of your project?",
            name: "projectName"
        },
        {
            type: "input",
            message: "Write a brief description of the project?",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are some tools and installation used during developement?",
            name: "toolsUsed"
        },
        {
            type: "input",
            message: "How to contribute?",
            name: "contribution"
        },
        {
            type: "input",
            message: "enter the delopyed link",
            name: "deployedLink"
        },
        {
            type: "input",
            message: "please enter your github profile picture link",
            name: "picture"
        }
    ]);
    }


// function writeToFile(fileName, data) {

function generateMarkdown(data) {
    var toolsUsedArr = (data.toolsUsed.split(","))
    console.log(toolsUsedArr)
    return `
# ${data.projectName} ![Only 32 Kb](https://badge-size.herokuapp.com/Naereen/StrapDown.js/master/strapdown.min.js)

      
## About the project
      
${data.projectDescription}
 ---
      
## Getting started
Below are the prerequisite understanding and programs that were utilized:
    * ${toolsUsedArr[0]}
    * ${toolsUsedArr[1]}
    * ${toolsUsedArr[2]}
    * ${toolsUsedArr[3]}

## How to contribute
    
${data.contribution}
      
## Deployed link
      
[Live site](${data.deployedLink})
      
## Author
      
**${data.username}**
    - [Email](${data.githubEmail})
    - [Link to Github](https://github.com/${data.gitUsername})
    - ![Profile picture](${data.picture})
      
See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
      
    `;
    }
    async function init () {
        try{
            const data = await promptUser();
            console.log(data)
            const markdown = generateMarkdown(data);
            await writeFileAsync("README_Generator.md", markdown);
            console.log(`yay! wrote to markdown.md`)
        } catch(err){
            console.log(err)
        }
    }
    
    init();
    
