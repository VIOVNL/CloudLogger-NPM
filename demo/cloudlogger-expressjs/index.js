const express = require('express');
const { CloudLogger } = require('@viovnl/cloudlogger');

const app = express();
const port = 3000;

const cloudLogger = CloudLogger.Create("your_project_secret");
const cloudLoggerItems = [
  { Name: "Date", Value: "22-10-1994" },
  { Name: "Country", Value: "Netherlands" }
];

app.get('/', (req, res) => {
  cloudLogger.Log(cloudLoggerItems)
});

app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} üzerinde çalışıyor.`);
});
