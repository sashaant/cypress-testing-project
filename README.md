# cypress-testing-project
cypress_automation_practice


Setup guide:
npm init 
npm install cypress --save-dev
npm install --save-dev typescript


Adding npm scripts:

 "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }

Now you can invoke the command from your project root like so:
npm run cypress:open



cypress.json file setups:

    "baseUrl":"",
    "watchFielChanges":true,
    "viewportWidth": 1000, 
    "viewportHeight": 600,
    "waitForAnimations": true,
    "animationsDistanceTreshold": 20,
    "defaultCommandTimeout":5000,
    "execTimeout":60000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 15000,
    "responceTimeout": 15000,
    "video": false,
    "failOnStatusCode":false
