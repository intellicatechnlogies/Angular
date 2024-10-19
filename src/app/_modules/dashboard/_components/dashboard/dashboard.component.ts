import { Component } from '@angular/core';

@Component({
  selector: 'fin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  breadcrumbs = [
    {
      label: 'Dashboard',
      link: '/main/dashboard'
    }
  ];
}
