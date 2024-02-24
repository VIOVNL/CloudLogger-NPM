# CloudLogger

CloudLogger enables you to perform logging operations easily and quickly in your JavaScript and React projects. This package facilitates logging operations by sending HTTP requests to a logging service running on the server side.

## Installation

### Package managers
You can add the package to your project using npm or yarn package managers:

```bash
npm install cloudlogger-js
```
or
```bash
yarn add cloudlogger-js
```

### CDN
Or you can include the script in your HTML:
```html
<script src="dist/cloudlogger.min.js"></script>
```

## Project Key
To use CloudLogger, you will need a Project key. You can get your project key from [CloudLogger](https://cloudlogger.app).


## Configuration

### CommonJS
```js
// Include the CloudLogger package in your project
const CloudLogger = require('cloudlogger-js');

// Create an instance of CloudLogger and configure it
const cloudLogger = CloudLogger.create('your_project_secret_here', options);
```

### Browser
```js
// Create an instance of CloudLogger and configure it
const cloudLogger = CloudLogger.create("your_project_secret", { throwExceptionOnFailure: true });
```

### React
```js
// Import CloudLogger from the 'cloudlogger-js' package
import CloudLogger from 'cloudlogger-js';
```
```js
// Create an instance of CloudLogger and configure it
CloudLogger.create('your_project_secret_here', options);
```

## Methods and Parameters

### CloudLogger.create(projectSecret: string, options?: CloudLogger.Options)
```js
CloudLogger.create('your_project_secret_here', options);
```
This method takes the projectSecret parameter and assigns it to the projectSecret property of the config object. Then, it returns this CloudLogger instance. 

#### projectSecret
This is a parameter used for CloudLogger to provide access to a secret key specifically defined for a particular project.

#### CloudLogger.Options
| Parameter | Type | Default Value | Description
| --- | --- | --- | ---
| throwExceptionOnFailure | boolean | false | Specifies throwing an exception in case of failure. If set to true, an exception is thrown when the logging operation fails. If set to false, an error will be written in console.


### CloudLogger.log(logItems: CloudLogger.LogItem[])
Performs the logging operation.
```ts
// Prepare the items you want to log
const logItems: CloudLogger.LogItem[] = [
    { name: 'Log1', value: 'Value1' },
    { name: 'Log2', value: 'Value2' }
];

// Perform the logging operation
cloudLogger.log(logItems);
```


#### CloudLogger.LogItem
| Parameter | Type
| --- | ---
| name | string
| value | string

### CloudLogger.updateProjectSecretKey(projectSecret: string)
This method takes the new projectSecret parameter and assigns it to the CloudLogger class, updating its current value with the new projectSecret.

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