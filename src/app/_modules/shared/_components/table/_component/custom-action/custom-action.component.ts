import { Component, Input } from '@angular/core';
import { CommonService } from '../../../../../../_services/_common/common.service';

@Component({
  selector: 'fin-custom-action',
  templateUrl: './custom-action.component.html',
  styleUrl: './custom-action.component.scss'
})
export class CustomActionComponent {
  @Input() rowData: any;
  @Input() entity: any;

  constructor(
    private commonService: CommonService
  ) { }


  onLinkClick() {
    this.commonService.customActionEventListner$.next({data: this.rowData, entity: this.entity});
  }
}
