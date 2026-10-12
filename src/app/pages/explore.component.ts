import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TravelService, Destination, HeroSlide } from '../travel.service';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  selectedCategory: string = 'All';
  sortBy: string = '-rating';
  viewFilter: 'all' | 'flagged' = 'all';
  viewDensity: 'comfortable' | 'compact' = 'comfortable';

  selectedDestination: Destination | null = null;
  currentSlideIndex: number = 0;
  showAgencyModal: boolean = false;
  private carouselInterval: any;

  heroSlides: HeroSlide[] = [];
  categories: string[] = [];

  constructor(public travelService: TravelService) {
    this.heroSlides = this.travelService.heroSlides;
    this.categories = this.travelService.categories;
  }

  ngOnInit(): void {
    if (this.travelService.destinations.length > 0) {
      this.selectedDestination = this.travelService.destinations[0];
    }
    this.startCarousel();
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  startCarousel(): void {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
  }

  goToSlide(idx: number): void {
    this.currentSlideIndex = idx;
  }

  get filteredDestinations(): Destination[] {
    return this.travelService.destinations
      .filter(item => {
        if (this.viewFilter === 'flagged' && !this.travelService.isSaved(item.id)) {
          return false;
        }
        if (this.selectedCategory !== 'All' && item.category !== this.selectedCategory) {
          return false;
        }
        if (!this.searchQuery) return true;
        const q = this.searchQuery.toLowerCase().trim();
        return (
          item.name.toLowerCase().includes(q) ||
          item.country.toLowerCase().includes(q) ||
          item.region.toLowerCase().includes(q) ||
          item.shortDescription.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        if (this.sortBy === 'name') return a.name.localeCompare(b.name);
        if (this.sortBy === '-rating') return b.rating - a.rating;
        if (this.sortBy === 'budgetNum') return a.budgetNum - b.budgetNum;
        if (this.sortBy === '-budgetNum') return b.budgetNum - a.budgetNum;
        return 0;
      });
  }

  selectItem(dest: Destination): void {
    this.selectedDestination = dest;
  }

  toggleFav(id: number, event?: Event): void {
    if (event) event.stopPropagation();
    this.travelService.toggleFavorite(id);
  }
}
