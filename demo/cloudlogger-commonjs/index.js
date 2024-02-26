
// Import the CloudLogger module from the @viovnl/cloudlogger package
const { CloudLogger } = require('@viovnl/cloudlogger');

// Initialize CloudLogger with your API key
const cloudLogger = CloudLogger.Create('your_project_secret');

// Prepare the items you want to log
const logItems = [
    { Name: "Date", Value: "22-10-1994" },
    { Name: "Country", Value: "Netherlands" },
];

// Perform the logging operation
cloudLogger.Log(logItems, true);