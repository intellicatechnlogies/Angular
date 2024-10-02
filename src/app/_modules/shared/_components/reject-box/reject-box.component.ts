import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fin-reject-box',
  templateUrl: './reject-box.component.html',
  styleUrl: './reject-box.component.scss'
})
export class RejectBoxComponent {
  message: string = '';
  confirmationButtonLabel: string = '';
  cancelButtonLabel: string = '';
  control: FormControl = new FormControl();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<RejectBoxComponent>
  ) { }

  ngOnInit(): void {
    this.message = this.data.message;
    this.confirmationButtonLabel = this.data.confirmationButtonLabel;
    this.cancelButtonLabel = this.data.cancelButtonLabel;
  }

  onConfirm(): void {
    const value  = this.control.value;
    this.matDialogRef.close(value);
  }

  onCancel(): void {
    this.matDialogRef.close(false);
  }
}