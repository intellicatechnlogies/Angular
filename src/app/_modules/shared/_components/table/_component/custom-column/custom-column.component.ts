import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RejectBoxComponent } from '../../../reject-box/reject-box.component';
import { CommonService } from '../../../../../../_services/_common/common.service';
import { CUSTOMCOLUMNEVENT } from '../../../../../../_models/table.model';

@Component({
  selector: 'fin-custom-column',
  templateUrl: './custom-column.component.html',
  styleUrl: './custom-column.component.scss'
})
export class CustomColumnComponent implements OnInit {

  @Input() columnDetails: any;
  @Input() rowData: any;
  @Input() entity: any;
  @Output() componentEvent: EventEmitter<CUSTOMCOLUMNEVENT> = new EventEmitter<CUSTOMCOLUMNEVENT>();

  constructor(
    private matDialog: MatDialog,
    private commonService: CommonService
  ) {
  }

  ngOnInit(): void {
  }

  /**
  * get SHG/VO Age
  * @param date 
  * @returns 
  */
  getAge(date: string) {
    const today = new Date();
    const formationDate = new Date(date);
    let age = today.getFullYear() - formationDate.getFullYear();
    const m = today.getMonth() - formationDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < formationDate.getDate())) {
      age--;
    }
    return age  
  } 

  /**
   * viewButtonHandler method
   */
  viewButtonHandler() {
    this.componentEvent.emit({ row: this.rowData, column: this.columnDetails, updatedValue: null, entity: this.entity });
  }


  rejectButtonHandler() {
    switch (this.entity) {
      case 'verifyCbo':
        this.matDialog.open(RejectBoxComponent, {
          width: '550px',
          enterAnimationDuration: '200ms',
          exitAnimationDuration: '200ms',
          data: {
            message: `Are You Sure you want to Reject this proposal ?`,
            confirmationButtonLabel: 'Reject',
            cancelButtonLabel: 'Cancel'
          },
        })
        break;
      default:
        break;
    }
  }


  onlinkClick() {
    this.commonService.customColumnEventListner$.next({ data: this.rowData, entity: this.entity, render: this.columnDetails?.render });
  }

  /**
   * On button click
   */
  onButtonClick() {
    this.componentEvent.emit({ row: this.rowData, column: this.columnDetails, updatedValue: null, entity: this.entity });
  }

  /**
   * On Input changes
   * @param $event 
   */
  onInput($event: any) {
    this.componentEvent.emit({ row: this.rowData, column: this.columnDetails, updatedValue: $event, entity: this.entity });
  }

}
