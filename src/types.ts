    export type Config = {
        projectSecret: string;
        cloudLoggerUrl: string;
        throwExceptionOnFailure: boolean;
    };
    /**
     * __Name:__ The name of the column in the project where the data will be logged. Ensure that the provided name matches the column name exactly as defined in the project.
     *
     *__Value:__ The data to be logged into the specified column of the project. It is imperative to ensure that the data logged aligns precisely with the designated data type specified for the column.
     */
    export type CloudLoggerItem = {
        Name: string;
        Value: any;
    };
    /**
     *__ThrowExceptionOnFailure__: Specifies throwing an exception in case of failure. If __ThrowExceptionOnFailure__ set to __true__, an exception is thrown when the logging operation fails. If set to __false__, an error will be written in console.*
     */
    export type CloudLoggerOptions = {
        ThrowExceptionOnFailure: boolean;
    };

