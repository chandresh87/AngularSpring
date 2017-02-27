// Import the core angular services.
import { ErrorHandler } from "@angular/core";
import { forwardRef } from "@angular/core";
import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";

// Import the application components and services.
import { LoggingService } from "../logging/logging.service";

export interface ErrorHandlerOptions {
    rethrowError: boolean;
    unwrapError: boolean;
}

export var ERROR_HANDLER_OPTIONS: ErrorHandlerOptions = {
    rethrowError: false,
    unwrapError: false
};


@Injectable()
export class CustomErrorHandler implements ErrorHandler {

    private logService: LoggingService;
    private options: ErrorHandlerOptions;


    //Initialize the service.
    // --
    // CAUTION: The core implementation of the ErrorHandler class accepts a boolean
    // parameter, `rethrowError`; however, this is not part of the interface for the
    // class. This is being done with an Options object (which is being defaulted in the providers).
    constructor(
        logService: LoggingService,
        @Inject( ERROR_HANDLER_OPTIONS ) options: ErrorHandlerOptions
        ) {

        this.logService = logService;
        this.options = options;
    }


    // ---
    // PUBLIC METHODS.
    // ---


    // Handle the given error.
    public handleError( error: any ) : void {

        // Log to the console.
        try {
            console.group( "ErrorHandler" );
            console.error( error.message );
            console.error( error.stack );
            console.groupEnd();

        } catch ( handlingError ) {

            console.group( "ErrorHandler" );
            console.warn( "Error when trying to output error." );
            console.error( handlingError );
            console.groupEnd();
        }

        // Send to the error-logging service.
        try {

            this.options.unwrapError
                ? this.logService.error( this.findOriginalError( error ) )
                : this.logService.error( error )
            ;

        } catch ( loggingError ) {
            console.group( "ErrorHandler" );
            console.warn( "Error when trying to log error to", this.logService );
            console.error( loggingError );
            console.groupEnd();
        }

        if ( this.options.rethrowError ) {
            throw( error );
        }
    }


    // ---
    // PRIVATE METHODS.
    // ---


    // Attempt to find the underlying error in the given Wrapped error.
    private findOriginalError( error: any ) : any {
        while ( error && error.originalError ) {
            error = error.originalError;
        }
        return( error );
    }

}


// Collection of providers used for this service at the module level.
// Notice that we are overriding the CORE ErrorHandler with our own class definition.
// --
// CAUTION: These are at the BOTTOM of the file so that we don't have to worry about
// creating futureRef() and hoisting behavior.
export var ERROR_HANDLER_PROVIDERS = [
    {
        provide: ERROR_HANDLER_OPTIONS,
        useValue: ERROR_HANDLER_OPTIONS
    },
    {
        provide: ErrorHandler,
        useClass: CustomErrorHandler
    }
];