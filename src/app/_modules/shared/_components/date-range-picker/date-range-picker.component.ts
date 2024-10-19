import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fin-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss'
})
export class DateRangePickerComponent {
  @Input({ required: false }) label: string = ''
  @Input({ required: false }) value: string = ''
  @Input({ required: true }) required: boolean = false;
  @Input({ required: false }) control: FormControl = new FormControl();

  @Output() afterFocus = new EventEmitter();
  @Output() afterDateChange = new EventEmitter();

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }
}
