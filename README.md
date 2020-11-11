[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/hjlogique/Burger?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/hjlogique/Burger?style=flat&logo=appveyor)
  
# Burger

  ## Description 
  
  The `Eat Da Burger Menu` application is a restaurant app that lets users submit the names of burgers they'd like to eat, and the app stores the information in the database, and displays two lists of burgers waiting to be devoured and the devoured burgers. This app is created with `MySQL`, `Node`, `Express`, `Handlebars` and `ORM`, and follows the `MVC` design pattern; using `Node` and `MySQL` to query and route data, and `Handlebars` to generate the `HTML`. It runs on `Heroku` and connect remotely to `Heroku` database. 
 
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  
  For running this application locally, a `MySql` databese called `burgers_db` containing a table called `burgers` is required. The `schema.sql` file in the `db` folder generates the database and the table. In the command line type `mysql -uroot -p > schema.sql` to generate them. The `seeds.sql` file insert the information to the table. In command line type `mysql -uroot -p -D burgers_db > seeds.sql` to insert the records. 

  To run the application type the `npm i` command to install the NPM package dependencies specified in the `package.json` file. The required modules for this application are [express](https://www.npmjs.com/package/express), [express-handlebars](https://www.npmjs.com/package/express-handlebars), [mysql](https://www.npmjs.com/package/mysql), and [handlebars-helper-css](https://www.npmjs.com/package/handlebars-helper-css). Next type `node server.js` to run the server and the application. 
 
  This application is also deployed on the `Heroku` server. You can access it at this [link to Eat Da Burger Menu on Heroku](https://rocky-brook-16354.herokuapp.com).


  ## Usage 
  
  Users can input the names of burgers they'd like to eat in the `Add A Burger` field and submit. The submitted burgers are stored in the database, and added to the `Burgers List` list on the left, where each Burger has a `Devour It` button. By clicking the `Devour It` buttons, users can move the burgers to another list on the right, called `Devoured Burgers`. (see the app's user interface below)

![Eat Da Burger Menu application screenshot1](/screenshots/screenshot1.png)


  ## Contributing
  
  Please let me know if there are any ways to improve the logic, the code or the features of this application. Please also let me know about any found bugs or issues. I would really appreciate your contributions.
  
  ## Questions
  
  [Link to my GitHub profile](https://github.com/hjlogique)

  If you have any questions, please contact me via email:
  
  Email: hjlogique@yahoo.com
  
  ## License
  
  MIT License

