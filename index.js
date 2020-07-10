
//declaring and assigning the node modules for to run command line interface
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');
// this is an asynchronous function that initialising CLI(command line inerface)
async function main() {
    console.log(`starting`);
    // Inquirer prompt method utilizing await until questions
   //from array of objects userResponse get answered by user.
const userResponse = await inquirer
    .prompt([
    
        

        {
            type: "input",
            message: "Please provide your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "Please provide your github profile URL?",
            name: "url_1"
        },
        {
            type: "input",
            message: "Please provide your Email address?",
            name: "email_1"
        },
        {
            type: "input",
            message: "Please provide the project title.",
            name: "project_title"
        },
        {
            type: "input",
            message: "Please provide project details & descriptions.",
            name: "description"
        },
        {
            type: "input",
            message: "Please provide steps and requirements for install of project.",
            name: "installation"
        },
        {
            type: "input",
            message: "Please provide License name (if any).",
            name: "license_name"
        },
        {
            type: "input",
            message: "Please provide github usernames of any contributors including yourself.",
            name: "contributors"
        },
        {
            type: "input",
            message: "Provide any test information (if any).",
            name: "tests"
        },
        
        {
            type: "input",
            message: "What is your  Git hub user name?",
            name: "name"
        },
        {
            type: "input",
            message: "What languages did you used for this projects?",
            name: "language"
        },
        {
            type: "input",
            message: "Emphasis?",
            name: "name"
        },
        {
            type: "input",
            message: "What are the list of specification?",
            name: "unorderd list"
        },
        {
            type: "input",
            message: "type out your deployed link from the repository",
            name: "link"
        },
        {
            type: "input",
            message: "add images to Readme file",
            name: "link"
        }

    ])
    console.log(`starting`);
        console.log(userResponse);


        const Username = userResponse.username;
        const Url_1 = userResponse.url_1;
        const Email_1 = userResponse.email_1;
        const Project_title = userResponse.project_title;
        const Description = userResponse.description;
        const Installation = userResponse.installation;
        const License_name = userResponse.license_name;
        const Contributors = userResponse.contributors;
        const Tests = userResponse.tests;

        const Response = {
            getUsername (username) { 
                return axios
                  .get(`https://api.github.com/users/${Username}`)
                  .catch(err => {
                    console.log(`User not found`);
                    process.exit(1);
                  });
            }
        } 

        const Data = Response.data;
        const Name = Response.username;
        const Url = Response.html_url;
        const ProfileImage = Response.avatar_url;
        const Names_Array = Contributors.split(",");
        
        console.log(Names_Array);

        var resultContributor;

        for ( i = 0; i < Names_Array.length; i++ ) {
            var git_username = Names_Array[i];
            const Response2 = await axios.get(`https://api.github.com/users/${git_username}`);
            var profileImage2 = Response2.data.avatar_url;
            var Url_2 = Response2.data.html_url;
                resultContributor += (`
            \n <img src="${profileImage2}" alt="drawing" width="150" display="inline"/> ${git_username}  GitHubLink: ${Url_2}`);
        }

        var result = (`

        # ${Project_title} 
        
    
        ${Description}
        \n* [Installation](#Installation)
        \n* [License](#License)
        \n* [Contributors](#Contributors)
        \n* [Author](#Author)
        \n* [Tests](#Tests)
    
    
        ## Installation
        ${Installation}
    
    
        ## License 
        This project is licensed under the ${License_name}.
    
    
        ## Contributors
        ${git_username}
        ${resultContributor}
        
    
    
        ## Tests
        ${Tests}
            
    
        ## Author 
        \n**${Username}**
        \nEmail: ${Email_1}
        \nGitHub: ${Url_1}
        \n![ProfileImage](${ProfileImage})
                    `);
    
    
    var writeResult = fs.writeFileSync(path.join(__dirname, '../README-Generator', 'readMe.md'), result);
    console.log("READme file generated...");
    }
    
    main();
    
    


   /*.then(function (response) {
        var resp = {};
        resp.name          = response.name;
        resp.language      = response.language;
        resp.communication = response.communication;
        fs.appendFile("response.json", JSON.stringify(resp), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
    });*/


