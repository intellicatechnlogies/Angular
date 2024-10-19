import { TestBed } from '@angular/core/testing';
import { HttpErrorHandlerInterceptor } from './http-error-handler.interceptor';

describe('httpErrorHandlerInterceptor', () => {
  
  let interceptor: HttpErrorHandlerInterceptor

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
