import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fin-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  @Input({ required: false }) label: string = ''
  @Input({ required: true }) placeholder: string = 'placeholder'
  @Input({ required: false }) value: string = ''
  @Input({ required: true }) required: boolean = false;
  @Input({ required: false }) control: FormControl = new FormControl();
  @Input({ required: false }) readonly: boolean = false;

  @Output() afterFocus = new EventEmitter();
  @Output() afterDateChange = new EventEmitter();

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }
}
