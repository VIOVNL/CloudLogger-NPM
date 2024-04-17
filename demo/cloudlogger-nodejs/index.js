
import { CloudLogger } from '@viovnl/cloudlogger';

const cloudLogger = CloudLogger.Create("your_project_secret");
const cloudLoggerItems = [
  { Name: "Date", Value: "22-10-1994" },
  { Name: "Country", Value: "Netherlands" }
];

cloudLogger.Log(cloudLoggerItems)
  .then(() => {
    console.log('Loglama başarılı!');
  })
  .catch((err) => {
    console.error('Loglama sırasında hata oluştu:', err);
  });
