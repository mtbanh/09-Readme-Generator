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
var axios = require("axios")

inquirer
    .prompt([
        {
            message: "What is your github username?",
            name: "username"
        },
        {
            message: "What is the name of your project?",
            name: "projectName"
        },
        {
            message: "Write a brief description of the project?",
            name: "projectDescription"
        },
        {
            message: "What are some tools and installation used during developement?",
            name: "toolsUsed"
        },
        {
            message: "How to contribute?",
            name: "contribution"
        },

    ]).then(response => {
        console.log(response);
        const projectName = `
        <h1>${response.projectName}</h1>`;

        const projectNameAppend = document.getElementById("Readme");
        projectNameAppend.append = projectName;
    })
// ]).then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
//     axios
//     .get(queryUrl)
//     .then(data => {
//       // console.log(result.data)
//      var userProfilePic = data.owner.avatar_url

//       console.log(userProfilePic)

//   const repoNameStr = repoName.join("\n")

//   fs.writeFile("gitHubRepo.json", repoNameStr, err => {
//     if(err) {
//       throw err
//     }
//   })
// })

// const questions = [


function writeToFile(fileName, data) {
}

function init() {

}

init();
