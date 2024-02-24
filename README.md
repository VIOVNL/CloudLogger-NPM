# CloudLogger

CloudLogger enables you to perform logging operations easily and quickly in your JavaScript and TypeScript projects. This package facilitates logging operations by sending HTTP requests to a logging service running on the server side.

## Installation

### Package managers
You can add the package to your project using npm or yarn package managers:

```bash
npm install cloudlogger
```
or
```bash
yarn add cloudlogger
```

### CDN
Or you can include the script in your HTML:
```html
<script src="https://cdn.statically.io/gh/VIOVNL/CloudLogger-NPM/main/dist/index.global.min.js"></script>
```

## Project Secret
To use CloudLogger, you will need a Project secret. Obtain your project secret from __[CloudLogger Website](https://cloudlogger.app)__.


## Configuration

### CommonJS
```js
// Include the CloudLogger package in your project
const CloudLogger = require('cloudlogger');

// Create an instance of CloudLogger and configure it
const cloudLogger = CloudLogger.Create('your_project_secret', options);
```

### VanillaJS
```js
// Create an instance of CloudLogger and configure it
const cloudLogger = CloudLogger.Create("your_project_secret", { ThrowExceptionOnFailure: true });
```

### React
```js
// Import CloudLogger from the 'cloudlogger' package
import CloudLogger from 'cloudlogger';
```
```js
// Create an instance of CloudLogger and configure it
CloudLogger.Create('your_project_secret', options);
```

## Methods and Parameters

### CloudLogger.Create(projectSecret: string, options?: CloudLogger.Options)
```js
CloudLogger.Create('your_project_secret', options);
```
Creates a new instance of CloudLogger with the provided project secret and options.

#### projectSecret
Your CloudLogger project secret. Obtain your project secret from [CloudLogger Website](https://cloudlogger.app).

#### CloudLogger.Options
| Parameter               | Type | Default Value | Description
|-------------------------| --- | --- | ---
| ThrowExceptionOnFailure | boolean | false | Specifies throwing an exception in case of failure. If __ThrowExceptionOnFailure__ set to __true__, an exception is thrown when the logging operation fails. If set to __false__, an error will be written in console.


### CloudLogger.log(logItems: CloudLogger.LogItem[])
Performs the logging operation.
#### Example 1
```js
// Perform the logging operation
CloudLogger.Log([
    { Name: "Date", Value: "22-10-1994" },
    { Name: "Country", Value: "Netherlands" },
]);
```
#### Example 2
```ts
// Prepare the items you want to log
const logItems: CloudLogger.LogItem[] = [
    { Name: "Date", Value: "22-10-1994" },
    { Name: "Country", Value: "Netherlands" },
];

// Perform the logging operation
CloudLogger.Log(logItems);
```

#### CloudLogger.LogItem
| Parameter | Type   | Description
|-----------|--------|-----------
| Name      | string | The name of the column created for your project.
| Value     | any    | The data corresponding to the type selected in your project. It should match the data type defined for the project.

### CloudLogger.UpdateProjectSecret(projectSecret: string)
Updates the project secret for the CloudLogger instance, enabling logging to a different project.

```ts
// Update the project secret
CloudLogger.UpdateProjectSecret("your_project_secret");
```


## Demos
You can checkout different demos we have prepared for you under the `demo` folder.
### React + TS
Install the dependencies:
```
npm install
````
Run the demo:
````
npm run dev
````

### React + JS
Install the dependencies:
```
npm install
````
Run the demo:
````
npm run dev
````


### Vanilla JS
Launch the file in your browser to see the demo in action.