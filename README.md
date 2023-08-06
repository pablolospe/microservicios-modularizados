# microservices

This repository contains the source code and necessary configurations to deploy a microservices system on the backend, utilizing MongoDB, Docker, and deploying it on Google Cloud.

## Description

The project consists of three interconnected microservices that provide information about characters, films, and planets from the Star Wars universe. These microservices are connected through a gateway that facilitates routing and communication between them.

## Technologies Used

- Node.js
- Express.js
- MongoDB and Mongoose
- Docker
- Google Cloud Platform (GCP)

## Project Structure

- `characters-service`: Microservice to manage character information.
- `films-service`: Microservice to manage film information.
- `planets-service`: Microservice to manage planet information.
- `gateway`: Gateway handling client requests and routing to corresponding microservices.
- `docker-compose.yml`: Docker Compose configuration file to orchestrate microservices and MongoDB in containers.
- `deployment`: Configurations and scripts to deploy the application on Google Cloud.

## Usage Instructions

1. Clone this repository to your local machine.
2. Ensure you have Docker installed.
3. Run `docker-compose up` in the root directory to build and run microservices and MongoDB containers.
4. Access `http://localhost:3000` to interact with the application through the gateway.

## Deployment on Google Cloud

1. Access your Google Cloud Platform account.
2. Create a project and set up credentials.
3. Use provided scripts in the `deployment` directory to deploy the application on Google Cloud.

---
Made with :heart: by [Pablo Xavier Lospennato]  
[https://www.linkedin.com/in/pablo-xavier-lospennato-1065b4a2/] | [https://pablolospe.github.io/pol-folio/] | [yosoypxl@gmail.com]
