import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fin-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {

  @Input() label!: string;
  @Input() checked!: boolean;
  @Input() disabled!: boolean;
  @Input() labelPosition: 'before' | 'after' = 'after';


  @Output() checkedChange = new EventEmitter<boolean>();

}
