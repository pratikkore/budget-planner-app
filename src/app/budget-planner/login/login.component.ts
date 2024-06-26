import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;

  activeForm: 'login' | 'register' = 'login'; //here we check which form is current login or register

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (email === 'pratik@gmail.com' && password === '1234') {
        console.log('login info =>', this.loginForm.value);
        this.router.navigate(['./budget-planner/dashboard']);
      } else {
        this.snackbar.open('Incorrect username or password', 'Close', {
          duration: 3000,
        });
      }
    } else {
      this.snackbar.open('Invalid email or password', 'Close', {
        duration: 3000,
      });
    }
  }

  register() {
    if (this.registerForm.valid) {
      console.log('Register info =>', this.registerForm.value);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['./budget-planner/login']);
    } else {
      this.snackbar.open('Please fill in all fields correctly ! ', 'close', {
        duration: 3000,
      });
    }
  }
}
