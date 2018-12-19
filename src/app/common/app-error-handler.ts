import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error?) {
        alert('An unexpected error occurred');
        // save/log the error somewhere on the server
    }
}
