import { Component, Input } from '@angular/core';

@Component({
  selector: 'fin-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  @Input() label!: string;
  @Input() required = false;
  @Input() fontWeight: string = '';

}
