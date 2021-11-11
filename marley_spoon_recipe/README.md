# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

cd `marley_spoon_recipe`

Before starting application add contentful spaceId and accessToken to an `.env` file.

To start application run the following commands:

### `yarn install`
### `yarn start`


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Assumptions
* some of the data fields that don't exist are replace by static data

### Improvements
* Adding of e2e test with cypres
* Adding unit test for utility functions
* Implement API error handling
* Implement ErrorBoundary for application
* Add fallback recipe images
* Fix color palette for theme
* Create well structured data types
* Create more reusable complement
* Make some existing component flexible and re-usable
* Add storybook (optional)

### Architectural decision
Use of UI component vs CSS libraries such as tailwind-css pros and cons