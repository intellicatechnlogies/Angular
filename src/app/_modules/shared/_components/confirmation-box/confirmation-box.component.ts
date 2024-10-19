import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fin-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrl: './confirmation-box.component.scss'
})
export class ConfirmationBoxComponent implements OnInit {

  message: string = '';
  confirmationButtonLabel: string = '';
  cancelButtonLabel: string = '';
  title: string = 'confirmation';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<ConfirmationBoxComponent>
  ) { }

  ngOnInit(): void {
    this.message = this.data.message;
    this.confirmationButtonLabel = this.data.confirmationButtonLabel;
    this.cancelButtonLabel = this.data.cancelButtonLabel;
    this.title = this.data.title ? this.data.title : 'Confirmation';
  }

  onConfirm(): void {
    this.matDialogRef.close(true);
  }

  onCancel(): void {
    this.matDialogRef.close(false);
  }
}
