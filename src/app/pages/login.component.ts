import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TravelService, UserAccount } from '../travel.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  activeTab: 'login' | 'register' = 'login';

  // Login Form Model
  email = '';
  password = '';
  loginError = '';
  loginSuccess = '';
  isLoading = false;

  // Registration Form Model
  regName = '';
  regEmail = '';
  regPassword = '';
  regConfirmPassword = '';
  regTheme: 'dark' | 'light' = 'dark';
  regError = '';
  regSuccess = '';

  // JSON Explorer
  showRawJson = false;
  copyJsonSuccess = false;

  constructor(public travelService: TravelService) {}

  get currentUser(): UserAccount | null {
    return this.travelService.currentUser;
  }

  get isLoggedIn(): boolean {
    return !!this.travelService.currentUser;
  }

  switchTab(tab: 'login' | 'register'): void {
    this.activeTab = tab;
    this.loginError = '';
    this.regError = '';
  }

  quickFillDemo(): void {
    this.activeTab = 'login';
    this.email = 'alex@tripmate.com';
    this.password = 'Password123!';
    this.loginError = '';
  }

  onLogin(): void {
    this.loginError = '';
    this.loginSuccess = '';
    this.isLoading = true;

    const res = this.travelService.login(this.email, this.password);
    this.isLoading = false;
    if (res.success) {
      this.loginSuccess = `Welcome back, ${this.travelService.currentUser?.name}! Your personalized itineraries & theme preferences have been loaded.`;
    } else {
      this.loginError = res.message || 'Invalid email or password.';
    }
  }

  onRegister(): void {
    this.regError = '';
    this.regSuccess = '';

    const name = (this.regName || '').trim();
    const email = (this.regEmail || '').trim();
    const password = (this.regPassword || '').trim();
    const confirm = (this.regConfirmPassword || '').trim();

    if (!name) {
      this.regError = 'Please enter your Full Name.';
      return;
    }
    if (!email) {
      this.regError = 'Please enter a valid Email Address.';
      return;
    }
    if (!password) {
      this.regError = 'Please enter a Password.';
      return;
    }
    if (confirm && password !== confirm) {
      this.regError = 'Passwords do not match. Please re-enter identical passwords.';
      return;
    }

    this.isLoading = true;
    const res = this.travelService.register(
      name,
      email,
      password,
      this.regTheme
    );
    this.isLoading = false;

    if (res.success) {
      this.regSuccess = `Account created successfully for ${name}! Stored in JSON database.`;
      // Pre-populate the login form so the user can immediately log in
      this.email = email;
      this.password = password;
      this.loginSuccess = 'Registration complete! You can sign in now.';
    } else {
      this.regError = res.message;
    }
  }

  instantSignIn(): void {
    this.email = this.regEmail;
    this.password = this.regPassword;
    this.onLogin();
  }

  onLogout(): void {
    this.travelService.logout();
    this.email = '';
    this.password = '';
    this.loginError = '';
    this.loginSuccess = 'You have signed out. All changes have been stored to your JSON profile.';
    this.showRawJson = false;
  }

  toggleProfileTheme(): void {
    this.travelService.toggleTheme();
  }

  toggleJsonView(): void {
    this.showRawJson = !this.showRawJson;
  }

  get userJsonString(): string {
    return this.travelService.getUserJsonString();
  }

  get usersDbJsonString(): string {
    return this.travelService.getUsersDatabaseJsonString();
  }

  copyJsonToClipboard(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.userJsonString).then(() => {
        this.copyJsonSuccess = true;
        setTimeout(() => (this.copyJsonSuccess = false), 2500);
      });
    }
  }
}
