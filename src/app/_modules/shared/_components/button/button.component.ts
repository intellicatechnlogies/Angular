import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fin-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input({required: true}) type: string = 'primary';
  @Input() isIcon: boolean = false;
  @Input() iconPath: string = '';
  @Input() tooltip: string = '';
  @Input() count: number = 0;

  @Output() afterClick = new EventEmitter();

  constructor() { }
}
