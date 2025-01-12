import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fin-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit {
  overView: any;
  result: any;
  imagePath: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<ResultComponent>
  ) { }

  ngOnInit(): void {
    this.overView = this.data.overView;
    this.result = this.data.result;
    this.imagePath = this.data.imagePath;
  }

  close() {
    this.matDialogRef.close();
  }
}
