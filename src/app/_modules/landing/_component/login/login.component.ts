import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../_services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SnackbarService } from '../../../../_services/snackbar/snackbar.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  initForm() {
    this.form = this.fb.group({
      username: [''],
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
