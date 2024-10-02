import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingService {

  appTheme$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }
}
