# devops-engr-test

# REST API Service

## Overview
This service consumes data from a REST API (https://jsonplaceholder.typicode.com/posts) and serves it through a public endpoint.

## Running Locally
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the service: `node index.js`
4. Access the service at `http://localhost:3000/posts`

## Docker
1. Build the Docker image: `docker build -t rest-api-service .`
2. Run the Docker container: `docker run -p 3000:3000 rest-api-service`

## Deployment
The service is deployed on AWS ECS. The CI/CD pipeline is set up using GitHub Actions.

## Access
The service is accessible at [your-public-endpoint]

## Repository
The code is available at [GitHub Repository URL].

## CI/CD Pipeline
The pipeline is configured to build and deploy the service on push to the main branch.
