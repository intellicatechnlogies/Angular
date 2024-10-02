import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { iconPositions } from '../../../../_constants/input.constant';

@Component({
  selector: 'fin-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnChanges{

  @Input({ required: false }) label: string = '';
  @Input({ required: true }) placeholder: string = 'placeholder';
  @Input({ required: true }) type: string = 'text';
  @Input({ required: false }) value: string = '';
  @Input({ required: true }) required: boolean = false;
  @Input({ required: false }) control: FormControl = new FormControl('');
  @Input({ required: false }) readonly: boolean = false;
  @Input({ required: false }) isIcon: boolean = false;
  @Input({ required: false }) iconPath: string = '';
  @Input({ required: false }) iconPosition: string = '';

  @Output() afterInput = new EventEmitter();
  @Output() afterBlur = new EventEmitter();
  @Output() afterFocus = new EventEmitter();
  @Output() afterIconClick = new EventEmitter();


  iconPositions = iconPositions;

  constructor() { }

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
