// src/CloudLoggerClient.ts
var CloudLoggerClient = class {
  constructor() {
    this.config = {
      projectSecret: "",
      cloudLoggerUrl: "https://dash.cloudlogger.app",
      throwExceptionOnFailure: false
    };
  }
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
  Create(projectSecret, options) {
    this.config.projectSecret = projectSecret;
    if (options) {
      this.config.throwExceptionOnFailure = options.ThrowExceptionOnFailure;
    }
    return this;
  }
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
  UpdateProjectSecret(projectSecret) {
    this.config.projectSecret = projectSecret;
  }
  /**
   * Performs the logging operation.
   *
   * @param {CloudLogger.LogItem[]} logItems __An array of log items where each item represents a column, and the array as a whole represents a row.__
   * @param {boolean} throwExceptionOnFailure Specifies throwing an exception in case of failure. If __ThrowExceptionOnFailure__ set to __true__, an exception is thrown when the logging operation fails. If set to __false__, an error will be written in console.*
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
  async Log(logItems, throwExceptionOnFailure) {
    fetch(`${this.config.cloudLoggerUrl}/Api/Log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        ProjectSecret: this.config.projectSecret
      },
      body: JSON.stringify(logItems)
    }).then((response) => response.json()).then((response) => {
      if (response === "SecretFailure") {
        this.throwOrConsole(
          "SecretFailure: CloudLogger project secret is invalid.",
          throwExceptionOnFailure
        );
      } else if (response === "ServerFailure") {
        this.throwOrConsole(
          "ServerFailure: CloudLogger server encountered an error.",
          throwExceptionOnFailure
        );
      }
    });
  }
  throwOrConsole(error, throwExceptionOnFailure) {
    if (throwExceptionOnFailure !== void 0 ? throwExceptionOnFailure : this.config.throwExceptionOnFailure) {
      throw new Error(error);
    } else {
      console.error(error);
    }
  }
};

// src/index.ts
var CloudLogger = new CloudLoggerClient();
if (typeof window !== "undefined" && window) {
  window.CloudLogger = CloudLogger;
}
export {
  CloudLogger
};
