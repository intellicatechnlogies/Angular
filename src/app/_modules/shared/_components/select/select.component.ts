import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fin-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnChanges{

  @Input({required: false}) label: string = ''
  @Input({required: true}) placeholder: string = 'placeholder'
  @Input({required: false}) value: string = ''
  @Input({required: true}) required: boolean = false;
  @Input({required: false}) control: FormControl = new FormControl();
  @Input({required: false}) multiSelect: boolean = false;  
  @Input({required: true}) optionsList: any[] = [];
  @Input({required: false}) displayName: string = '';
  @Input({required: false}) getName: string = '';
  @Input({required: false}) disabled: boolean = false;

  @Output() afterSelectionChange = new EventEmitter();


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['value']) {
      this.control.patchValue(this.value);
    }
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'This field is required.';
    }
    return '';
  }

}
