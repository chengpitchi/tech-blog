# The Tech Blog

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

## Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Database Schema](#database-schema)
* [Installation](#installation)
* [Testing](#testing)
* [Screenshot](#screenshot)
* [Live URL](#live-url)
* [Contributors](#contributors)
* [Questions](#questions)
* [License](#license)

## Description
This tech blog is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Database Schema
![DatabaseSchema](./public/images/model.png)

## Installation

1. To setup the application in local, run "npm i" to install the below packages. 
    * bcryptjs
    * connect-session-sequelize
    * dotenv
    * express
    * express-handlebars
    * express-session
    * mysql2
    * sequelize

2. Under the repository folder, open the terminal and login mySQL CLI.  Execute script by issuing command "source db/schema.sql" to create the database. 

3. Quit the mySQL CLI, run "npm start" to load the model to the database. 

## Testing
> APIs were tested using Insomnia: https://insomnia.rest/ 

> Application is tested by manual test scripts through the Chrome browser.  

## Screenshot
![This is the first solution screenshot for the tech blog](./public/images/tech-blog-1.png)

![This is the second solution screenshot for the tech blog](./public/images/tech-blog-2.png)

![This is the third solution screenshot for the tech blog](./public/images/tech-blog-3.png)

![This is the fourth solution screenshot for the tech blog](./public/images/tech-blog-4.png)

![This is the fifth solution screenshot for the tech blog](./public/images/tech-blog-5.png)

![This is the sixth solution screenshot for the tech blog](./public/images/tech-blog-6.png)

## Live URL 
https://tech-blog-99.herokuapp.com/

## Contributors
* GitHub: [chengpitchi](https://github.com/chengpitchi)

## Questions
Please send your questions to chengpitchi@yahoo.com or visit [github/chengpitchi](https://github.com/chengpitchi).

## License
N/A