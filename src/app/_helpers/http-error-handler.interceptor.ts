import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable()

export class HttpErrorHandlerInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            break;
        }
        return throwError(error);
      })
    )
  }
}