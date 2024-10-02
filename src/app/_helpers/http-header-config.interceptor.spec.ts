import { TestBed } from '@angular/core/testing';
import { HttpHeaderConfigInterceptor } from './http-header-config.interceptor';

describe('httpHeaderConfigInterceptor', () => {

  let interceptor: HttpHeaderConfigInterceptor

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
