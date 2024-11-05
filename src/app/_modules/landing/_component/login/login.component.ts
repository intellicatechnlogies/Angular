import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../_services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SnackbarService } from '../../../../_services/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fin-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private router: Router,
    private matDialogRef: MatDialogRef<LoginComponent>
  ) { }

  initForm() {
    this.form = this.fb.group({
      userid: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  login() {
    this.authService.login(this.form.value).subscribe({
      next: (res: any) => {
        if (res) {
          this.snackbarService.successSnackbar('Login Successful');
          this.matDialogRef.close();
          this.navigateToDashboard();
        }
      },
      error: (err: any) => {
        this.snackbarService.errorSnackbar(err.error.message);
      },
      complete: () => { }
    })
  }

  navigateToDashboard() {
    this.router.navigate(['/main/dashboard']);
  }
}
