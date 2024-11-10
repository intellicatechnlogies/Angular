import { Injectable } from '@angular/core';
import { HttpService } from '../_http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FaceCompareService {

  constructor(
    private httpService: HttpService
  ) { }

  saveFaceCompare(payload: any) {
    return this.httpService.saveRecoard('cface', payload);
  }
}
