# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Code convention
### Folder structure

```
| __mocks__ // Library mock files or constant mock files for unit tests
| node_modules // Node modules
| src // App sources
  |- assets // Images
  |- components
     |- ExampleButton
         |- index.jsx
         |- index.test.jsx
         |- ExampleButton.css
     .
     .
     |- index.js // To export all components from this folder
  |- constants
     |- routes.js // Routes
     |- apiEndpoints.js // Back-end API endpoints with path and method
     .
     .
  |- pages // Screens/pages in the app
     |- ExamplePage
         |- index.jsx
         |- index.test.jsx
         |- ExamplePage.css
     .
     .
     |- index.js // To export all pages from this folder
  |- utils 
     |- common // general functions for processing/mapping
         |- index.jsx
         |- index.test.jsx
     |- makeRequest // util for API calls
         |- index.jsx
         |- index.test.jsx
     .
     .
| App.jsx // Main app component
.
.
.
```

### General convention
- Default exports preferred when file exports only one entity.
- Single quotes for strings are preferred.
- In-line styles should not be used unless it can't be done otherwise.

### Naming practices

- All constant variables should use UPPER_SNAKE_CASE
  ```
  export const USER_API_PATH = 'some/path'
  ```
- All components and pages should use PascalCase
  ```
  functon ExampleComponent() {
      return <div />
  }
  ```
- Other variables should be in camelCase as per JS convention
- Boolean variable names should ask a question. Example: `isUserLoggedIn`, `hasAdminRole`
- Function names should start with verb. Example: `getItemBasedOnId`, `replacePathParamsInRoute`

### Git commit

The git commit messages will have the following format:

`<type>: <brief description of changes>`

Type could be one of the following:

- feat: new features
- fix: bug fixes
- improv: enhance existing feature
- chore: dev related changes. Eg. code cleanup, refactoring

Example commit message: `feat: add support for additional documents upload`

### Linting

The project uses eslint for code linting. 

Enable eslint plugin on your code editor to get inline errors for any lint issues so that they can be easily fixed during development.
