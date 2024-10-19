import { Component, Input } from '@angular/core';

@Component({
  selector: 'fin-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

  @Input() breadcrumbs: any[] = [];

  constructor() { }

}
