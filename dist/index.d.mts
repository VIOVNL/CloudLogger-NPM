type Config = {
    projectSecret: string;
    cloudLoggerUrl: string;
    throwExceptionOnFailure: boolean;
};
/**
 * __Name:__ The name of the column in the project where the data will be logged. Ensure that the provided name matches the column name exactly as defined in the project.
 *
 *__Value:__ The data to be logged into the specified column of the project. It is imperative to ensure that the data logged aligns precisely with the designated data type specified for the column.
 */
type CloudLoggerItem = {
    Name: string;
    Value: string;
};
/**
 *__ThrowExceptionOnFailure__: Specifies throwing an exception in case of failure. If __ThrowExceptionOnFailure__ set to __true__, an exception is thrown when the logging operation fails. If set to __false__, an error will be written in console.*
 */
type CloudLoggerOptions = {
    ThrowExceptionOnFailure: boolean;
};

declare class CloudLoggerClient {
    config: Config;
    /**
     * Creates a new instance of CloudLogger with the provided project secret and options.
     *
     * @param {string} projectSecret __Your CloudLogger project secret. Obtain your project secret from [CloudLogger Website](https://cloudlogger.app).__
     * @param {CloudLoggerOptions} options __(Optional) Additional configuration options.__
     * @returns {this} __The CloudLogger instance.__
     *
     * @example
     * ### Basic Usage
     * ```
     *const cloudLogger = CloudLogger.Create("your_project_secret");
     * ```
     *
     * @example
     * ### With Options
     *
     * *__ThrowExceptionOnFailure__: Specifies throwing an exception in case of failure. If __ThrowExceptionOnFailure__ set to __true__, an exception is thrown when the logging operation fails. If set to __false__, an error will be written in console.*
     *
     * ```
     * const cloudLogger = CloudLogger.Create("your_project_secret", { ThrowExceptionOnFailure: true });
     * ```
     *
     */
    Create(projectSecret: string, options?: CloudLoggerOptions): this;
    /**
     * Updates the project secret for the CloudLogger instance, enabling logging to a different project.
     *
     * @param {string} projectSecret __The new project secret to be set. Obtain your project secret from [CloudLogger Website](https://cloudlogger.app).__
     * @returns {void}
     * @example
     * ### Basic Usage
     * ```
     * CloudLogger.UpdateProjectSecret("your_project_secret");
     * ```
     */
    UpdateProjectSecret(projectSecret: string): void;
    /**
     * Performs the logging operation.
     *
     * @param {CloudLoggerItem[]} logItems __An array of log items where each item represents a column, and the array as a whole represents a row.__
     * @param {boolean} throwExceptionOnFailure Specifies throwing an exception in case of failure. If __ThrowExceptionOnFailure__ set to __true__, an exception is thrown when the logging operation fails. If set to __false__, an error will be written in console, disregarding global ThrowExceptionOnFailure setting.*
     * @returns {Promise<void>} __A promise indicating the completion of the logging operation.__
     * @example
     * ### Basic Usage
     * ```
     * CloudLogger.Log([
     *    { Name: "Date", Value: "22-10-1994" },
     *    { Name: "Country", Value: "Netherlands" },
     * ]);
     * ```
     *
     * ### With ThrowExceptionOnFailure
     * ```
     * CloudLogger.Log([
     *    { Name: "Date", Value: "22-10-1994" },
     *    { Name: "Country", Value: "Netherlands" },
     * ], true);
     * ```
     */
    Log(logItems: CloudLoggerItem[], throwExceptionOnFailure?: boolean): Promise<void>;
    private throwOrConsole;
}

declare const CloudLogger: CloudLoggerClient;

export { CloudLogger, type CloudLoggerItem, type CloudLoggerOptions };
