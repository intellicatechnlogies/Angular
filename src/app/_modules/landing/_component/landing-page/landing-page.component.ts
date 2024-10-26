import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'fin-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(
    private matDialog: MatDialog
  ) {}

  openLogin() {
    this.matDialog.open(LoginComponent, {
      width: '550px',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
    });
  }
}
