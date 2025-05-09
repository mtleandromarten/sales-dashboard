import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) {}

  login(credentials: { email: string; password: string }) {
    if (credentials.email === 'admin@admin.com' && credentials.password === '1234') {
      localStorage.setItem('access_token', 'aaa');
      // Redireciona para o dashboard
      this.router.navigate(['/dashboard']);
    }
  }
}
