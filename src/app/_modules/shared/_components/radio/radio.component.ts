import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'fin-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {

  @Input({ required: false}) label: string = '';
  @Input({ required: false}) value: string = '';
  @Input({ required: false}) required: boolean = false;
  @Input({ required: false}) disabled: boolean = false;
  @Input({ required: false}) labelPosition: 'before' | 'after' = 'after';
  @Input({ required: false}) selected = false;
  @Input({ required: false}) control: FormControl = new FormControl();

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }

}
