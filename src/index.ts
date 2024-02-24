import CloudLoggerClient from "./CloudLoggerClient";
export const CloudLogger = new CloudLoggerClient();

if (typeof window !== "undefined" && window) {
  window.CloudLogger = CloudLogger;
}
