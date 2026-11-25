import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TravelService } from './travel.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public travelService: TravelService) {}

  get isDark(): boolean {
    return this.travelService.currentTheme === 'dark';
  }

  toggleTheme(): void {
    this.travelService.toggleTheme();
  }

  logout(): void {
    this.travelService.logout();
  }
}
