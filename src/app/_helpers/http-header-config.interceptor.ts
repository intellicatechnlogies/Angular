import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpHeaderConfigInterceptor implements HttpInterceptor {
  
  constructor(
  ) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     * Add headers for request
     */
    
    let headers: { [key: string]: any } = {}
    
    const newHeaders = new HttpHeaders(headers);
    req = req.clone({ headers: newHeaders });
    return next.handle(req);
  }
}