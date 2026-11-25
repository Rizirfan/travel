
import { Component, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

interface Trip {
  id: number;
  destination: string;
  date: string;
  budget: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  destination = signal('');
  date = signal('');
  budget = signal('');
  searchText = signal('');

  trips = signal<Trip[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.trips.set(this.loadTrips());
    }
  }

  // Load trips
  loadTrips(): Trip[] {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem('trips') || '[]');
    }
    return [];
  }

  // Save trips
  saveTrips() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('trips', JSON.stringify(this.trips()));
    }
  }

  // Add trip
  addTrip(event: Event) {
    event.preventDefault();

    if (!this.destination() || !this.date() || Number(this.budget()) <= 0) {
      return;
    }

    const newTrip: Trip = {
      id: Date.now(),
      destination: this.destination(),
      date: this.date(),
      budget: Number(this.budget())
    };

    this.trips.update(list => [...list, newTrip]);

    this.saveTrips();

    this.destination.set('');
    this.date.set('');
    this.budget.set('');

    alert('Trip added successfully!');
  }

  // Delete trip
  deleteTrip(id: number) {
    this.trips.update(list =>
      list.filter(trip => trip.id !== id)
    );

    this.saveTrips();
  }

  // Search trip
  filteredTrips() {
    return this.trips().filter(trip =>
      trip.destination.toLowerCase().includes(
        this.searchText().toLowerCase()
      )
    );
  }

  // Total budget
  getTotalBudget() {
    return this.trips().reduce(
      (total, trip) => total + trip.budget, 0
    );
  }

  // Upcoming trips
  getUpcomingTrips() {
    const today = new Date().toISOString().split('T')[0];

    return this.trips().filter(
      trip => trip.date >= today
    ).length;
  }

}
