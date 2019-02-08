import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error?) {
        // save/log the error somewhere on the server
        console.log(error);
    }
}
