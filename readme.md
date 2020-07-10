<h1 align="center">
    Readme Generator 
</h1>   

## User Story

    ```
    AS A developer

    I WANT a README generator

    SO THAT I can easily put together a good README for a new project
    ```

Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

    ```sh
    node index.js
    ```

The user will be prompted for their GitHub username, 
which will be used to make a call to the GitHub API to retrieve their email and profile image. They will then be prompted with questions about their project.

It utilizes the inquirer module from, [npm](https://www.npmjs.com/) to prompt the users with questions from cli.

It utilizes the 'FS' or File System module from, [npm](https://www.npmjs.com/) to write a new file (readme.md) (using Markdown syntax).

It also utilizes [Nodejs](https://nodejs.org/en/) axios library to make Api call to GitHub
for user data.


Here's what the CLi looks like (gif of readme Generator).

<p align="center">
<img height=400 src="assets/ReadmeGenerator.gif" />
   <a href="https://drive.google.com/file/d/180daClvEo1SCpbBMFGX9QmialH8i_Kz3/view">
       [GitHub](https://drive.google.com/file/d/180daClvEo1SCpbBMFGX9QmialH8i_Kz3/view)
</p>


- - - 
   
## Minimum Requirements

- Functional, deployed application.

- GitHub repository with a unique name describing project.

- The generated README includes a bio image from the user's GitHub profile.

- The generated README includes the user's email.


- _The README will be populated with the following:_

  - Project title
  - Description
  - Installation
  - License
  - Contributing
  - Tests
  - Questions
    - User GitHub profile picture
    - User GitHub URL
    - User email

    ```
    GIVEN the developer has a GitHub profile and a repository

    WHEN prompted for the developer's GitHub username and repo specific information

    THEN a README for the repo is generated
    ```
- - -
    
- [Readme Generator](#readme-generator)
  - [User Story](#user-story)
  - [Minimum Requirements](#minimum-requirements)
  - [Business Context](#business-context)
  - [Installation](#installation)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Author](#author)


## Business Context

As developer it is really easy to have command line interface to buid a readme of a project it is easy and fast to handle too,it can lead to up to do date inforamation.
    
## Installation

   This command installs axios
   ```sh
   npm i axios
   ```
   This command installs inquirer
   ```sh
   npm i inquirer
   ``` 
   main entry point for application to be invoked
   ```sh 
   Node index.js
   ```
   - - -
   used the command ``npm init``

## License 

This project is licensed under **Dhanya Kunhikrishnan**

## Contributors

Dhanya-Kunhikrishnan
    
## Tests

## Author 
    
**Dhanya-Kunhikrishan**
**Dhanya-krishnan2(Git hub name)**
    
Email: dhanyakunhi@gmail.com
    
GitHub: https://github.com/Dhanya-krishnan2

- _Software Utilized_
  
  - [Nodejs](https://nodejs.org)
  - [axios](https://www.npmjs.com/axios)
  - [fs](https://www.npmjs.com/fs)(filesync module)
  - [Git Version Control](https://git-scm.com/)
  - [Visual Studio Code](https://code.visualstudio.com)
  - [mastering markdown](https://guides.github.com/features/mastering-markdown/)
  - [read-examples](https://github.com/microsoft/vscode/blob/master/README.md)
  The screenshot of this CLI readme application is shown below
  ![](/2020-07-10%20(1).png)
  ![](/2020-07-10.png)
    

                
