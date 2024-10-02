import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fin-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit, OnChanges {

  @Input() tableRecord: any[] = [];
  @Input() columns: any[] = [];
  @Input() entity: any;
  @Input() selectedRow: any = [];

  @Output() onSortingChange: EventEmitter<any> = new EventEmitter();
  @Output() onRowClick: EventEmitter<any> = new EventEmitter();
  @Output() onSelectionChange: EventEmitter<any> = new EventEmitter();
  @Output() customColumnEvent: EventEmitter<any> = new EventEmitter();

  displayColumns: any[] = [];
  dataSource = new MatTableDataSource(this.tableRecord);
  selection = new SelectionModel<any>(true, []);



  constructor() { }


  ngOnInit(): void {}


  ngOnChanges(changes: SimpleChanges) {
    if (changes['tableRecord']) {
      this.dataSource = new MatTableDataSource(this.tableRecord);
    }

    if (changes['columns']) {
      this.prepareColumnForShow();
    }

    if (changes['selectedRow']) {
      this.selection = new SelectionModel<any>(true, this.selectedRow);
    }
  }

  prepareColumnForShow() {
    this.displayColumns = [];
    this.columns?.forEach((obj: any) => { this.displayColumns.push(obj.field); });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
    this.onSelectionChange.emit(this.selection.selected);
  }

  toggleRowsSelection(row: any) {
    this.selection.toggle(row)
    this.onSelectionChange.emit(this.selection.selected);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  rowClick(row: any) {
    this.onRowClick.emit(row);
  }

  sortData(event: any) {
    this.onSortingChange.emit(event);
  }
}
