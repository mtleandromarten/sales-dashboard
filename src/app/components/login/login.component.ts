import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get email() {
    return this.form.get('email')!;
  }

  get password() {
    return this.form.get('password')!;
  }

  getEmailError() {
    if (this.email.hasError('required')) return 'Email é obrigatório';
    if (this.email.hasError('email')) return 'Email inválido';
    return '';
  }

  submit() {
    if (this.form.valid) {
      this.loginService.login(this.form.value);
    }
  }

}
