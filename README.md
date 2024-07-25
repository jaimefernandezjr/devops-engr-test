# Deploying REST API Service on AWS with GitHub Actions and Terraform

## Overview
This projects deploys a REST API service on AWS with Github Actions for CI/CD and Terraform for Infrastructure as Code. The public endpoint can be accessed here: [PUBLIC ENDPOINT].

## The Node Application
The Node.js application consumes a REST API from (https://jsonplaceholder.typicode.com/posts) and displays the data as a response. It is using the Express framework to create a web server. It also uses Axios, a promise-based HTTP client, to fetch data from an external API. The app fetch the data from the given endpoint by making an HTTP GET request and if successful, the data from the response is sent back to the client in JSON format. It then starts the server and makes it listen for incoming requests on the specified port, in which I used port 3000.

## Dockerizing the Application
- **Dockerfile**: Created to Dockerize the application.
- **Base Image**: Uses Node.js.
- **Configuration**: Includes copying necessary files and dependencies, running the app command, and exposing the port.

## Continuous Integration
- **CI Pipeline**: Created using GitHub Actions.
- **Trigger**: Activates on changes pushed to the development branch.
- **Steps**:
  - Checks out the repo code
  - Builds the Docker image
  - Logs in to DockerHub using credentials stored in GitHub Secrets
  - Pushes the image to DockerHub
  - Triggers the continuous deployment (CD) workflow

## Continuous Deployment
- **Configuration**: Files related to continuous deployment are available in this repository: https://github.com/jaimefernandezjr/devops-engr-test-iac
