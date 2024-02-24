declare namespace CloudLogger$1 {
    type Config = {
        projectSecret: string;
        cloudLoggerUrl: string;
        throwExceptionOnFailure: boolean;
    };
    /**
     * __Name:__ The name of the column created for your project.
     *
     *__Value:__ The data corresponding to the type selected in your project. It should match the data type defined for the project.
     */
    type LogItem = {
        Name: string;
        Value: string;
    };
    /**
     *__ThrowExceptionOnFailure__: Specifies throwing an exception in case of failure. If __ThrowExceptionOnFailure__ set to __true__, an exception is thrown when the logging operation fails. If set to __false__, an error will be written in console.*
     */
    type Options = {
        ThrowExceptionOnFailure: boolean;
    };
}

declare class CloudLoggerClient {
    config: CloudLogger$1.Config;
    /**
     * Creates a new instance of CloudLogger with the provided project secret and options.
     *
     * @param {string} projectSecret __Your CloudLogger project secret. Obtain your project secret from [CloudLogger Website](https://cloudlogger.app).__
     * @param {CloudLogger.Options} options __(Optional) Additional configuration options.__
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
    Create(projectSecret: string, options?: CloudLogger$1.Options): this;
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
     * @param {CloudLogger.LogItem[]} logItems __An array of log items where each item represents a column, and the array as a whole represents a row.__
     * @returns {Promise<void>} __A promise indicating the completion of the logging operation.__
     * @example
     * ### Basic Usage
     * ```
     * CloudLogger.Log([
     *    { Name: "Date", Value: "22-10-1994" },
     *    { Name: "Country", Value: "Netherlands" },
     * ]);
     * ```
     */
    LogX(logItems: CloudLogger$1.LogItem[]): Promise<void>;
    private throwOrConsole;
}

declare const CloudLogger: CloudLoggerClient;

export { CloudLogger };
