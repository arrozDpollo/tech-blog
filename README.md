# Tech Blog

## Description
Tech Blog is a CMS-style web application that allows developers to publish blog posts and comment on other developers’ posts. Built from scratch using the MVC architecture, this application utilizes Handlebars.js for templating, Sequelize for ORM, and Express.js for the server-side API. Users can register, log in, create, update, and delete posts, as well as leave comments on existing posts.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication (registration and login)
- Create, edit, and delete blog posts
- Comment on blog posts
- User dashboard for managing posts
- Responsive design

## Technologies Used
- **Node.js** - JavaScript runtime for building the application
- **Express.js** - Web framework for Node.js
- **Sequelize** - ORM for PostgreSQL database
- **PostgreSQL** - Relational database to store user and post data
- **Handlebars.js** - Templating engine for rendering views
- **Express-Session** - Middleware for session management
- **Bcrypt** - Library for hashing passwords
- **Dotenv** - Module for loading environment variables from a `.env` file
- **CSS** - Styling the application for an improved user experience

## Installation
1. Clone the repository

2. Install the required dependencies:
npm install

3. Create a .env file in the root directory and add your PostgreSQL connection string:

DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password

4. Create the database and tables.


5. Start the application:

npm run start

6. Open your web browser and navigate to:

http://localhost:3001

## Live Deploy
https://tech-blog-ne0v.onrender.com/

#Register a new account or log in if you already have one.

#Use the dashboard to create, edit, or delete your blog posts.

#Leave comments on existing posts to engage with other developers.
