export namespace CloudLogger {
  export type Config = {
    projectSecret: string;
    cloudLoggerUrl: string;
    throwExceptionOnFailure: boolean;
  };
  /**
   * __Name:__ The name of the column created for your project.
   *
   *__Value:__ The data corresponding to the type selected in your project. It should match the data type defined for the project.
   */
  export type LogItem = {
    Name: string;
    Value: string;
  };
  /**
   *__ThrowExceptionOnFailure__: Specifies throwing an exception in case of failure. If __ThrowExceptionOnFailure__ set to __true__, an exception is thrown when the logging operation fails. If set to __false__, an error will be written in console.*
   */
  export type Options = {
    ThrowExceptionOnFailure: boolean;
  };
}
