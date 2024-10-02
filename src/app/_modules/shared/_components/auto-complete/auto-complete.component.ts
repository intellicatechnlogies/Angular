import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fin-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.scss'
})
export class AutoCompleteComponent {

  @Input({ required: false }) label: string = ''
  @Input({ required: true }) placeholder: string = 'placeholder'
  @Input({ required: false }) value: string = ''
  @Input({ required: true }) required: boolean = false;
  @Input({ required: false }) control: FormControl = new FormControl();
  @Input({ required: false }) multiSelect: boolean = false;
  @Input({ required: true }) optionsList: any[] = [];
  @Input({ required: false }) displayName: string = '';
  @Input({ required: false }) applyLocalFilter: boolean = true;

  @Output() optionSelected = new EventEmitter();
  @Output() afterInput = new EventEmitter();
  @Output() afterFocus = new EventEmitter();


  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

}
