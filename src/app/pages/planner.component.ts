import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TravelService, TripPlan, Destination } from '../travel.service';

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css'
})
export class PlannerComponent implements OnInit {
  plannedTrips: TripPlan[] = [];
  destinations: Destination[] = [];
  selectedFilter: 'All' | 'Draft' | 'Confirmed' | 'Completed' = 'All';
  searchFilter: string = '';

  // Form Model
  newTrip: Partial<TripPlan> = {
    days: 5,
    travelers: 2,
    status: 'Confirmed'
  };

  showAddModal: boolean = false;

  constructor(
    public travelService: TravelService,
    private route: ActivatedRoute
  ) {
    this.destinations = this.travelService.destinations;
  }

  ngOnInit(): void {
    this.refreshTrips();

    // Check query params if directed from Explore page
    this.route.queryParams.subscribe(params => {
      if (params['dest']) {
        this.newTrip.destination = params['dest'];
        const matched = this.destinations.find(d => d.name === params['dest']);
        if (matched) {
          this.newTrip.country = matched.country;
          this.newTrip.budget = matched.estimatedBudget;
        }
        this.showAddModal = true;
      }
    });
  }

  refreshTrips(): void {
    this.plannedTrips = this.travelService.getPlannedTrips();
  }

  get filteredTrips(): TripPlan[] {
    return this.plannedTrips.filter(item => {
      if (this.selectedFilter !== 'All' && item.status !== this.selectedFilter) {
        return false;
      }
      if (!this.searchFilter) return true;
      const q = this.searchFilter.toLowerCase().trim();
      return (
        item.destination.toLowerCase().includes(q) ||
        item.country.toLowerCase().includes(q) ||
        (item.notes && item.notes.toLowerCase().includes(q))
      );
    });
  }

  onDestinationChange(): void {
    const selected = this.destinations.find(d => d.name === this.newTrip.destination);
    if (selected) {
      this.newTrip.country = selected.country;
      this.newTrip.budget = selected.estimatedBudget;
    }
  }

  openModal(): void {
    this.showAddModal = true;
  }

  closeModal(): void {
    this.showAddModal = false;
  }

  saveTrip(): void {
    if (!this.newTrip.destination || !this.newTrip.date) return;
    const dest = this.destinations.find(d => d.name === this.newTrip.destination);

    this.travelService.addTrip({
      destination: this.newTrip.destination,
      country: this.newTrip.country || (dest ? dest.country : 'Global'),
      date: this.newTrip.date,
      days: Number(this.newTrip.days) || 3,
      travelers: Number(this.newTrip.travelers) || 1,
      budget: this.newTrip.budget || (dest ? dest.estimatedBudget : '$1,200'),
      status: this.newTrip.status || 'Confirmed',
      notes: this.newTrip.notes || 'Custom planned itinerary note.'
    });

    this.newTrip = { days: 5, travelers: 2, status: 'Confirmed' };
    this.closeModal();
    this.refreshTrips();
  }

  deleteTrip(id: number): void {
    this.travelService.deleteTrip(id);
    this.refreshTrips();
  }

  setStatus(trip: TripPlan, status: 'Draft' | 'Confirmed' | 'Completed'): void {
    this.travelService.updateTripStatus(trip.id, status);
    this.refreshTrips();
  }

  // Summary Metrics
  get totalTravelers(): number {
    return this.plannedTrips.reduce((acc, curr) => acc + curr.travelers, 0);
  }

  get confirmedCount(): number {
    return this.plannedTrips.filter(t => t.status === 'Confirmed').length;
  }
}
