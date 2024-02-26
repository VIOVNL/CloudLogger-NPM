# CloudLogger
CloudLogger enables you to perform logging operations easily and quickly in your JavaScript and TypeScript projects. This package facilitates logging operations by sending requests to CloudLogger service running on the server side.

## Installation
### Package managers
You can add the package to your project using npm or yarn package managers:

```bash
npm install @viovnl/cloudlogger
```
or
```bash
yarn add @viovnl/cloudlogger
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
const CloudLogger = require('@viovnl/cloudlogger');

// Create an instance of CloudLogger and configure it
const cloudLogger = CloudLogger.Create('your_project_secret');
```

### Vanilla JS
```js
// Create an instance of CloudLogger and configure it
const cloudLogger = CloudLogger.Create("your_project_secret");
```

### React
```js
// Import CloudLogger from the 'cloudlogger' package
import CloudLogger from '@viovnl/cloudlogger';
```
```js
// Create an instance of CloudLogger and configure it
CloudLogger.Create('your_project_secret');
```

## Methods and Parameters

### CloudLogger.Create(projectSecret: string, options?: CloudLoggerOptions)
```js
CloudLogger.Create('your_project_secret', { ThrowExceptionOnFailure: true });
```
Creates a new instance of CloudLogger with the provided project secret and options.

#### projectSecret _(string)_
Your CloudLogger project secret. Obtain your project secret from [CloudLogger Website](https://cloudlogger.app).

#### options _(CloudLoggerOptions)_
| Parameter               | Type    | Default Value | Description                                                                                                                                                                                                            |
|-------------------------|---------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ThrowExceptionOnFailure | boolean | false         | Specifies throwing an exception in case of failure. If __ThrowExceptionOnFailure__ set to __true__, an exception is thrown when the logging operation fails. If set to __false__, an error will be written in console. |

### CloudLogger.Log(logItems: CloudLoggerItem[], throwExceptionOnFailure?: boolean)
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
const logItems: CloudLoggerItem[] = [
    { Name: "Date", Value: "22-10-1994" },
    { Name: "Country", Value: "Netherlands" },
];

// Perform the logging operation
CloudLogger.Log(logItems);
```
#### Example 3
```js
// Perform the logging operation and throw an exception if it fails, disregarding global ThrowExceptionOnFailure setting.
CloudLogger.Log([
    { Name: "Date", Value: "22-10-1994" },
    { Name: "Country", Value: "Netherlands" },
], true);
```
#### Example 4
```js
// Perform the logging operation and don't throw an exception if it fails, disregarding global ThrowExceptionOnFailure setting.
CloudLogger.Log([
    { Name: "Date", Value: "22-10-1994" },
    { Name: "Country", Value: "Netherlands" },
], false);
```
#### logItems _(CloudLoggerItem[])_
| Parameter | Type   | Description                                                                                                                                                                              |
|-----------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name      | string | The name of the column in the project where the data will be logged. Ensure that the provided name matches the column name exactly as defined in the project.                            |
| Value     | any    | The data to be logged into the specified column of the project. It is imperative to ensure that the data logged aligns precisely with the designated data type specified for the column. |

#### throwExceptionOnFailure _(boolean)_
| Parameter               | Type    | Default Value                              | Description                                                                                                                                                                                                            |
|-------------------------|---------|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| throwExceptionOnFailure | boolean | CloudLoggerOptions.ThrowExceptionOnFailure | Specifies throwing an exception in case of failure. If __throwExceptionOnFailure__ set to __true__, an exception is thrown when the logging operation fails. If set to __false__, an error will be written in console. |


### CloudLogger.UpdateProjectSecret(projectSecret: string)
Updates the project secret for the CloudLogger instance, enabling logging to a different project.

```ts
// Update the project secret
CloudLogger.UpdateProjectSecret("your_project_secret");
```


## Demos
You can check out different demos we have prepared for you under the `demo` folder.
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