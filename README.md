# SAIT_Node_Assignment

## Course Information

**Course Name:** Web Application Development  
**Course Code:** CPRG-210  
**Instructor:** Samuel Sofela  
**Project Due Date:** 10-17-2024  
**Student Name:** Sorawat Tanthikun

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Usage](#usage)

## Project Overview

This project is an information website that allow user to view, create and delete website contact. The website is built using Node.js, Express, and MySQL.

## Features

- **Homepage:** A landing page that provides an overview of the website.
- **About Page:** Displays information about the team members, queried from the database.
- **Contact Page:** Allows users to send their information through a form. The submitted contact information is displayed, and users can delete it as well.
- **404 Page:** A custom error page that is shown when a user navigates to a non-existent route.

## Technologies Used

- **Programming Language:** EJS, NodeJS, MySQL

## Usage

### Installation

Before running the application, ensure that all dependencies are installed. Run the following command in the project directory:

```sh
npm install
```

This will install all necessary packages specified in the `package.json` file.

### Setting Up Environment Variables

- Before starting the server, ensure that you have copied the `.env.example` file and renamed it to `.env`
- Edit the `.env` file to configure the necessary environment variables for the local environment

### Running the Application in Development Mode

To run the application in development mode, use the following command:

```sh
npm start
```

### Running the Application with Docker Compose

To run the application using Docker Compose, follow these steps:

1. **Ensure Docker and Docker Compose are installed on your machine.**

2. **Build and start the containers** by running the following command in the project directory:

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker images and start the containers as defined in the `docker-compose.yaml` file.

3. **Access the application** by navigating to [http://localhost:8000](http://localhost:8000) in your web browser.

4. **Stop the containers** by pressing `Ctrl+C` in the terminal where Docker Compose is running, or by running:
   ```bash
   docker-compose down
   ```
   This command will stop and remove the containers.
