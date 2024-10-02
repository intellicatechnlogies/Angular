import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { iconPositions } from '../../../../_constants/input.constant';

@Component({
  selector: 'fin-text-area',
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent implements OnChanges {
  @Input({ required: false }) label: string = '';
  @Input({ required: true }) placeholder: string = 'placeholder';
  @Input({ required: false }) type: string = 'text';
  @Input({ required: false }) value: string = '';
  @Input({ required: true }) required: boolean = false;
  @Input({ required: false }) control: FormControl = new FormControl();
  @Input({ required: false }) readonly: boolean = false;
  @Input({ required: false }) isIcon: boolean = false;
  @Input({ required: false }) iconPath: string = '';
  @Input({ required: false }) iconPosition: string = '';
  @Input({ required: false }) disabled: boolean = false;
  @Input({ required: false }) rows: number = 0;
  @Input({ required: false }) cols: boolean = false;

  @Output() afterInput = new EventEmitter();
  @Output() afterBlur = new EventEmitter();
  @Output() afterFocus = new EventEmitter();


  iconPositions = iconPositions;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['value']) {
      this.control.patchValue(this.value);
    }
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }
}
