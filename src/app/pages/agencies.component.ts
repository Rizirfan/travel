import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TravelService, Agency } from '../travel.service';

@Component({
  selector: 'app-agencies',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './agencies.component.html',
  styleUrl: './agencies.component.css'
})
export class AgenciesComponent implements OnInit {
  searchQuery: string = '';
  selectedFilter: string = 'All';
  selectedAgency: Agency | null = null;

  readonly filterCategories: string[] = [
    'All',
    'Flights & Packages',
    'Hotels & Stays',
    'Tours & Experiences',
    'Transit & Rail'
  ];

  constructor(public travelService: TravelService) {}

  ngOnInit(): void {
    if (this.travelService.agencies.length > 0) {
      this.selectedAgency = this.travelService.agencies[0];
    }
  }

  get filteredAgencies(): Agency[] {
    let list = this.travelService.agencies;

    if (this.selectedFilter !== 'All') {
      if (this.selectedFilter === 'Flights & Packages') {
        list = list.filter(a => a.category.toLowerCase().includes('flight') || a.category.toLowerCase().includes('travel'));
      } else if (this.selectedFilter === 'Hotels & Stays') {
        list = list.filter(a => a.category.toLowerCase().includes('lodging') || a.category.toLowerCase().includes('stays'));
      } else if (this.selectedFilter === 'Tours & Experiences') {
        list = list.filter(a => a.category.toLowerCase().includes('tour') || a.category.toLowerCase().includes('review'));
      } else if (this.selectedFilter === 'Transit & Rail') {
        list = list.filter(a => a.category.toLowerCase().includes('transit') || a.category.toLowerCase().includes('rail'));
      }
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(a => 
        a.name.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.specialty.toLowerCase().includes(q) ||
        a.highlights.toLowerCase().includes(q)
      );
    }

    return list;
  }

  selectAgency(agency: Agency): void {
    this.selectedAgency = agency;
  }
}
