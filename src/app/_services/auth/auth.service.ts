import { Injectable } from '@angular/core';
import { HttpService } from '../_http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) { }

  login(payload: any) {
    return this.httpService.saveRecoard('login_api', payload);
  }
}
