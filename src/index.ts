import CloudLoggerClient from "./CloudLoggerClient";
export { CloudLoggerItem, CloudLoggerOptions } from "./types";
export const CloudLogger = new CloudLoggerClient();

if (typeof window !== "undefined" && window) {
    window.CloudLogger = CloudLogger;
}
