# Epiroc Office Planner

## About the Project

The Application Epiroc-Office-Planner is developed as a LIA-project by students from Yrkeshögskolan SKY.

The application itself is meant to make it easier for the users of the application where they are booked for a specific day or week.

Tha application also contains an admin page where an admin can add groups/rooms and set up a long term schedule for where the different teams are booked.

### Reqirements

This project is dependent upon that it has a connection with the backend that serves its API endpoints. See the readme for the epiroc-office-planner-backend for more information.

### Installation

- Clone the project to VS Code
- CD into the right folder path `/project-sky`
- Run `npm install` in the terminal to install the required dependencies

### Deployment

- Download the extension Azure App Service for VS Code
- Make sure you have activated yor role in Azure Portal
- Sign in to Azure App Service in VS Code
- Run `npm build` on the the branch that you want to deploy
- In the Azure App Service right click the App Service epiroc-office-planner and select Deploy To Web App in the dropdown menu
- Select the build folder that was created in the earlier step and deploy it (it is important that only the build folder is deployed)

Further information about deployment of a NODE project can be read about here:
https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-vscode