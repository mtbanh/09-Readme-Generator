//Project scope
//Prompt the user for the following info:
//github username
//name of project
//brief description
//installations and usage in developement of project
//how to contribute
//tests(?)
//user github email and profile pic; 
//info gather from axios call to github api using github username:
//profile pic = data.owner.avatar_url
//a badge
//need to store all the userinput 
// store into an object with keys and values = userInput
//need to access the userinput and display it into the html pg
var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");
const util = require("util");


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
    return `
# ${data.projectName}
      
## About the project
      
${data.projectDescription}
      ---
      
## Getting started
    Below are the prerequisite understanding and programs that were utilized :
      * ${data.toolsUsed[0]}
      * ${data.toolsUsed[1]}
      * ${data.toolsUsed[2]}
      * ${data.toolsUsed[3]}
    ---
      
      
## How to contribute
      
      
    ${data.contribution}
      
## Deployed link
      
    [Live site]${data.deployedLink}
      ---
      
## Author
      
**${data.username}**
      - [Link to Github](https://github.com/${data.gitUsername})
      - ![Profile picture](${data.picture})
      
See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
      

      
    `;
    }
    async function init () {
        try{
            const data = await promptUser();
            const markdown = generateMarkdown(data);
            await writeFileAsync("README_Generator.md", markdown);
            console.log(`yay! wrote to markdown.md`)
        } catch(err){
            console.log(err)
        }
    }
    
    init();
    
    
    