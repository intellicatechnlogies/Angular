import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fin-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrl: './fab-button.component.scss'
})
export class FabButtonComponent {
  @Input() disabled: boolean = false;
  @Input({required: true}) type: string = 'primary';
  @Input() iconPath: string = '';
  @Input() tooltip: string = '';

  @Output() afterClick = new EventEmitter();
}
