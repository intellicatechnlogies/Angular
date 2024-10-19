import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  customColumnEventListner$ = new Subject<any>();
  customActionEventListner$ = new Subject<any>();
  pageRefreshEventListner$ = new Subject<any>();

  constructor() { }

  /**
   * Prepare financial year
   * @returns array of financial year
   */
  prepareFinancialYear() {
    const currentYear = new Date().getFullYear();
    const financialYear = [];
    for(let i = 0; i < 15; i++) {
      financialYear.push(`${currentYear - i} - ${currentYear - i + 1}`);
    }
    return financialYear;
  }
}
