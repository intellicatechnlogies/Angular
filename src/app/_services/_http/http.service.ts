import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  backendEndpoint = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getRecoards(url: string) {
    return this.http.get(`${this.backendEndpoint}${url}`);
  }

  getRecoard(url: string, id: string) {
    return this.http.get(`${this.backendEndpoint}${url}/${id}`);
  }

  saveRecoard(url: string, paylod: any) {
    return this.http.post(`${this.backendEndpoint}${url}`, paylod);
  }

  deleteRecoard(url: string, id: string) {
    return this.http.delete(`${this.backendEndpoint}${url}/${id}`);
  }

  updateRecoard(url: string, id: string, paylod: any) {
    return this.http.put(`${this.backendEndpoint}${url}/${id}`, paylod);
  }

}
