import { Injectable } from '@angular/core';

export interface Destination {
  id: number;
  name: string;
  country: string;
  region: string;
  category: string;
  rating: number;
  budgetNum: number;
  estimatedBudget: string;
  bestSeason: string;
  idealStay: string;
  climate: string;
  language: string;
  currency: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  topAttractions: string[];
  travelTip: string;
}

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
  memberSince: string;
  themePreference: 'dark' | 'light';
  savedDestinations: number[];
  scheduledTrips: TripPlan[];
  createdAt: string;
  lastLoginAt?: string;
}

export type User = UserAccount;

export interface TripPlan {
  id: number;
  destination: string;
  country: string;
  date: string;
  days: number;
  travelers: number;
  budget: string;
  status: 'Draft' | 'Confirmed' | 'Completed';
  notes?: string;
}

export interface Agency {
  name: string;
  category: string;
  specialty: string;
  rating: number;
  reviewsCount: string;
  url: string;
  icon: string;
  badge: string;
  coverImage: string;
  perks: string[];
  established: string;
  headquarters: string;
  highlights: string;
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  tag: string;
  location: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  readonly agencies: Agency[] = [
    {
      name: 'Expedia',
      category: 'Global Travel & Flights',
      specialty: 'Comprehensive vacation bundles, flight aggregations, vehicle rentals & global stays.',
      rating: 4.8,
      reviewsCount: '24M+ bookings',
      url: 'https://www.expedia.com',
      icon: 'fa-plane-departure',
      badge: 'Global Pioneer',
      coverImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
      perks: ['Bundle Flight + Hotel Savings', 'Free Cancellation on Select Stays', 'One Key™ Reward Points'],
      established: '1996',
      headquarters: 'Seattle, USA',
      highlights: 'World-renowned meta-engine spanning 500+ airlines, 3 million properties, and curated car hire fleets.'
    },
    {
      name: 'Booking.com',
      category: 'Lodging & Stays',
      specialty: 'Boutique hotels, alpine chalets, remote cabins & beachfront villas with verified guest scores.',
      rating: 4.9,
      reviewsCount: '300M+ reviews',
      url: 'https://www.booking.com',
      icon: 'fa-hotel',
      badge: 'Best Rates',
      coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      perks: ['Price Match Guarantee', 'Instant Confirmation', 'Genius Loyalty Discounts'],
      established: '1996',
      headquarters: 'Amsterdam, Netherlands',
      highlights: 'Over 28 million reported accommodation listings across 220 countries and territories worldwide.'
    },
    {
      name: 'Viator',
      category: 'Tours & Experiences',
      specialty: 'VIP small-group tours, alpine hiking expeditions, museum access passes and river cruises.',
      rating: 4.9,
      reviewsCount: '300K+ experiences',
      url: 'https://www.viator.com',
      icon: 'fa-ticket',
      badge: 'Top Experiences',
      coverImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
      perks: ['Reserve Now & Pay Later', '24-Hour Free Cancellation', 'Verified Traveler Photos'],
      established: '1995',
      headquarters: 'San Francisco, USA',
      highlights: 'Tripadvisor company powering handpicked guided excursions with professional native guides.'
    },
    {
      name: 'GetYourGuide',
      category: 'City Tours & Cultural Tickets',
      specialty: 'Skip-the-line admissions, iconic monument priority access, local tastings & city passes.',
      rating: 4.8,
      reviewsCount: '80K+ activities',
      url: 'https://www.getyourguide.com',
      icon: 'fa-map-location-dot',
      badge: 'Instant Digital Pass',
      coverImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
      perks: ['Mobile QR Voucher', 'Skip Ticket Counter Queues', 'Exclusive Original Tours'],
      established: '2009',
      headquarters: 'Berlin, Germany',
      highlights: 'The premier European-born experience marketplace unlocking landmarks from the Colosseum to Mount Fuji.'
    },
    {
      name: 'Tripadvisor',
      category: 'Crowdsourced Travel & Reviews',
      specialty: 'Millions of honest traveler reviews, forum recommendations, hotel comparisons & culinary rankings.',
      rating: 4.7,
      reviewsCount: '1B+ opinions',
      url: 'https://www.tripadvisor.com',
      icon: 'fa-star',
      badge: 'Verified Opinions',
      coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      perks: ['Community Advice Forums', 'Travelers Choice Awards', 'Comprehensive Restaurant Guides'],
      established: '2000',
      headquarters: 'Needham, USA',
      highlights: 'The largest global travel guidance platform assisting hundreds of millions of monthly travelers.'
    },
    {
      name: 'Klook',
      category: 'Transit & Global Leisure',
      specialty: 'High-speed rail passes (Japan Rail, Eurail), seamless eSIM data connectivity & theme park tickets.',
      rating: 4.8,
      reviewsCount: '50M+ users',
      url: 'https://www.klook.com',
      icon: 'fa-train-subway',
      badge: 'Transit & Rail Specialist',
      coverImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      perks: ['Direct Station QR Boarding', 'Instant eSIM Data Delivery', 'Best Price Guarantee'],
      established: '2014',
      headquarters: 'Hong Kong & Singapore',
      highlights: 'The essential companion for cross-border transit passes, regional trains, and modern contactless travel.'
    }
  ];
  readonly heroSlides: HeroSlide[] = [
    {
      title: 'Solitude of Alpine Fjords & Glacial Mist',
      subtitle: 'Tranquil glacial waters framed by emerald valleys and pristine snowy summits.',
      tag: 'Untouched Wilderness',
      location: 'Milford Sound & Western Alps',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85'
    },
    {
      title: 'Misty Evergreen Highlands & Ancient Peaks',
      subtitle: 'Where silence embraces eternal fog, rolling moss hills, and wandering horizons.',
      tag: 'Sacred Sanctuary',
      location: 'Pacific Northwest & Canadian Rockies',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=85'
    },
    {
      title: 'Sublime Azure Horizons & Volcanic Coastlines',
      subtitle: 'Crisp coastal winds gliding over crystalline waters and dramatic cliffs.',
      tag: 'Coastal Poetics',
      location: 'Mediterranean & Faroe Islands',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85'
    },
    {
      title: 'The Golden Canopy of Autumn Highlands',
      subtitle: 'Sunlight filtering through vibrant amber forests and tranquil mountain passes.',
      tag: 'Seasonal Rebirth',
      location: 'Dolomites & Eastern Kyoto Forest',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=85'
    }
  ];

  readonly categories: string[] = [
    'All',
    'Mountain',
    'Coast & Island',
    'Heritage & Culture',
    'Forest & Lake',
    'Metropolitan'
  ];

  readonly destinations: Destination[] = [
    {
      id: 1,
      name: 'Kyoto Cultural Sanctum',
      country: 'Japan',
      region: 'East Asia',
      category: 'Heritage & Culture',
      rating: 4.95,
      budgetNum: 1400,
      estimatedBudget: '$1,400',
      bestSeason: 'Mar – May & Oct – Nov',
      idealStay: '5 to 7 Days',
      climate: 'Temperate (Warm springs, crisp autumns)',
      language: 'Japanese',
      currency: 'JPY (¥)',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=600&q=80'
      ],
      shortDescription: 'Preserved wooden machiya homes, thousand-year moss sanctuaries, and sacred mountain torii corridors.',
      fullDescription: 'Kyoto embodies classical Japanese aesthetic restraint. Once the sovereign seat of the imperial court for over a millennium, it balances secluded zen rock gardens with sweeping views of the Arashiyama bamboo ridge line and classical wooden teahouses.',
      topAttractions: ['Fushimi Inari Taisha', 'Ryoan-ji Zen Stone Garden', 'Gion Preservation Quarter', 'Kinkaku-ji Gold Pavilion'],
      travelTip: 'Arrive at northern temple grounds at 07:30 to encounter the mist lifting through the bamboo forests before open hours.'
    },
    {
      id: 2,
      name: 'Santorini Caldera Heights',
      country: 'Greece',
      region: 'Southern Europe',
      category: 'Coast & Island',
      rating: 4.88,
      budgetNum: 1650,
      estimatedBudget: '$1,650',
      bestSeason: 'May – Jun & Sep – Oct',
      idealStay: '4 to 6 Days',
      climate: 'Mediterranean maritime',
      language: 'Greek',
      currency: 'EUR (€)',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80'
      ],
      shortDescription: 'Sculpted chalk-white terraces commanding panoramic horizons across deep cobalt Aegean waters.',
      fullDescription: 'Formed by dramatic volcanic geology, Santorini showcases minimalist Cycladic architectural vernacular built directly into caldera escarpments. The island combines quiet cliffside hiking trails with deep Aegean sunsets and ancient Minoan ruins.',
      topAttractions: ['Oia Architectural Ridge', 'Fira to Oia Caldera Path', 'Akrotiri Bronze Age Settlement', 'Pyrgos Medieval Village'],
      travelTip: 'Walk the cliffside footway between Fira and Imerovigli at dusk for unobstructed sea horizons without tour crowds.'
    },
    {
      id: 3,
      name: 'Banff Alpine Lakes & Ridges',
      country: 'Canada',
      region: 'North America',
      category: 'Mountain',
      rating: 4.96,
      budgetNum: 1350,
      estimatedBudget: '$1,350',
      bestSeason: 'Jun – Sep & Dec – Mar',
      idealStay: '6 to 8 Days',
      climate: 'Alpine Continental',
      language: 'English, French',
      currency: 'CAD ($)',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80'
      ],
      shortDescription: 'Glacial turquoise waters encircled by monumental limestone massifs and old-growth boreal forest.',
      fullDescription: 'Nestled in the Canadian Rockies, Banff National Park represents alpine majesty at its purest. Its world-renowned glacial waters—fed by mineral rock flour—exhibit surreal turquoise reflections flanked by snow-draped ridges.',
      topAttractions: ['Moraine Lake Valley of the Ten Peaks', 'Lake Louise Glacial Cirque', 'Icefields Parkway', 'Plain of Six Glaciers Trail'],
      travelTip: 'Reserve park transit shuttles well in advance. Morning stillness on the lakes produces mirror-like reflections.'
    },
    {
      id: 4,
      name: 'Interlaken & Jungfrau Glacier',
      country: 'Switzerland',
      region: 'Central Europe',
      category: 'Mountain',
      rating: 4.92,
      budgetNum: 1950,
      estimatedBudget: '$1,950',
      bestSeason: 'Jun – Sep & Dec – Feb',
      idealStay: '5 to 7 Days',
      climate: 'Alpine High-Altitude',
      language: 'German, French, Romansh',
      currency: 'CHF',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80'
      ],
      shortDescription: 'Crystalline waters nestled beneath the legendary triumvirate of Eiger, Mönch, and Jungfrau peaks.',
      fullDescription: 'Interlaken sits gracefully in the Bernese Oberland between Lake Thun and Lake Brienz. Famous for precision alpine cogwheel railways that ascend into eternal ice fields, the region offers serene meadows and dramatic glacial cirques.',
      topAttractions: ['Jungfraujoch Glacier Observatory', 'Lauterbrunnen Valley of 72 Waterfalls', 'Mürren Car-Free Plateau', 'Harder Kulm Ridge'],
      travelTip: 'Acquire an Oberland Pass for seamless travel on all mountain trains, funiculars, and lake steamers.'
    },
    {
      id: 5,
      name: 'Amalfi Coast Terraces',
      country: 'Italy',
      region: 'Southern Europe',
      category: 'Coast & Island',
      rating: 4.79,
      budgetNum: 1800,
      estimatedBudget: '$1,800',
      bestSeason: 'Apr – Jun & Sep – Oct',
      idealStay: '5 to 7 Days',
      climate: 'Mediterranean Coastal',
      language: 'Italian',
      currency: 'EUR (€)',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80'
      ],
      shortDescription: 'Limestone precipices draped in lemon groves and terracotta villas overlooking azure sea corridors.',
      fullDescription: 'A UNESCO World Heritage coastal landmark, the Amalfi Peninsula offers precipitous topography, medieval cliff monasteries, and maritime villages sculpted into vertical stone faces.',
      topAttractions: ['Path of the Gods (Sentiero degli Dei)', 'Ravello Villa Rufolo Gardens', 'Positano Bay', 'Ferriere Nature Reserve'],
      travelTip: 'Utilize water taxis and scheduled ferries instead of narrow mountain roads to save transit time and appreciate cliff topography.'
    },
    {
      id: 6,
      name: 'Machu Picchu Andean Citadel',
      country: 'Peru',
      region: 'South America',
      category: 'Heritage & Culture',
      rating: 4.97,
      budgetNum: 1200,
      estimatedBudget: '$1,200',
      bestSeason: 'May – Oct (Dry Season)',
      idealStay: '4 to 6 Days',
      climate: 'Subtropical Highland',
      language: 'Spanish, Quechua',
      currency: 'PEN (S/)',
      image: 'https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80'
      ],
      shortDescription: '15th-century imperial Inca stonework perched serenely between mist-covered Andean cloud forests.',
      fullDescription: 'Rising 2,430 meters above sea level above the sacred Urubamba River canyon, Machu Picchu stands as a monument to Incan astronomical alignment and civil engineering embedded harmoniously within vertical nature.',
      topAttractions: ['Intihuatana Astronomical Stone', 'Huayna Picchu Summit Ascent', 'Sun Gate (Inti Punku)', 'Temple of the Three Windows'],
      travelTip: 'Spend two acclimatization days in Ollantaytambo before ascending to minimize altitude fatigue.'
    },
    {
      id: 7,
      name: 'Reykjavik & Volcanic Highlands',
      country: 'Iceland',
      region: 'Northern Europe',
      category: 'Forest & Lake',
      rating: 4.85,
      budgetNum: 1750,
      estimatedBudget: '$1,750',
      bestSeason: 'Sep – Apr (Aurora) & Jun – Aug',
      idealStay: '7 to 9 Days',
      climate: 'Subpolar Oceanic',
      language: 'Icelandic, English',
      currency: 'ISK (kr)',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80'
      ],
      shortDescription: 'Basalt canyons, geothermal steam valleys, active volcanic fissures, and celestial northern auroras.',
      fullDescription: 'Iceland sits astride the Mid-Atlantic tectonic rift. Its raw landscape alternates between obsidian lava fields, roaring glacial cataracts, and geothermal pools that warm travellers beneath ethereal midnight skies.',
      topAttractions: ['Thingvellir Continental Rift', 'Gullfoss Glacial Falls', 'Reynisfjara Black Sand Columns', 'Kerlingarfjöll Geothermal Range'],
      travelTip: 'Monitor the Icelandic Meteorological Office auroral forecast map for geomagnetic Kp index readings.'
    },
    {
      id: 8,
      name: 'Lake Como & Prealpine Valleys',
      country: 'Italy',
      region: 'Southern Europe',
      category: 'Forest & Lake',
      rating: 4.82,
      budgetNum: 1600,
      estimatedBudget: '$1,600',
      bestSeason: 'Apr – Jun & Sep – Oct',
      idealStay: '4 to 6 Days',
      climate: 'Sub-Mediterranean Lake',
      language: 'Italian',
      currency: 'EUR (€)',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80'
      ],
      shortDescription: 'Glacial fjord waters bordered by neo-classical botanical gardens and silent alpine foothills.',
      fullDescription: 'Formed during the Quaternary glacial period, Lake Como is among Europe’s deepest bodies of inland water. Aristocratic villas with cypress terraces overlook sapphire waters framed by prealpine summits.',
      topAttractions: ['Villa Balbianello Terraces', 'Bellagio Historic Promontory', 'Varenna Lovers Path', 'Sentiero del Viandante'],
      travelTip: 'A day-pass ferry ticket grants seamless hopping between central lake villages without vehicle logistics.'
    }
  ];

  private plannedTrips: TripPlan[] = [
    {
      id: 101,
      destination: 'Kyoto Cultural Sanctum',
      country: 'Japan',
      date: '2026-11-15',
      days: 7,
      travelers: 2,
      budget: '$2,800',
      status: 'Confirmed',
      notes: 'Autumn maple foliage season, private tea master session confirmed.'
    },
    {
      id: 102,
      destination: 'Interlaken & Jungfrau Glacier',
      country: 'Switzerland',
      date: '2027-01-20',
      days: 5,
      travelers: 1,
      budget: '$2,100',
      status: 'Draft',
      notes: 'Glacier panoramic train itinerary with high-altitude hiking route.'
    },
    {
      id: 103,
      destination: 'Banff Alpine Lakes & Ridges',
      country: 'Canada',
      date: '2027-06-12',
      days: 8,
      travelers: 4,
      budget: '$4,200',
      status: 'Confirmed',
      notes: 'Boreal backcountry lodge permit secured with canoe rentals.'
    }
  ];

  private savedIds: Set<number> = new Set<number>([1, 3]);

  // User Authentication & JSON Registry
  readonly USERS_DB_KEY = 'tripmate_users_json_db';
  readonly ACTIVE_SESSION_KEY = 'tripmate_active_session';

  usersDatabase: UserAccount[] = [];
  currentUser: UserAccount | null = null;

  readonly DEFAULT_USERS: UserAccount[] = [
    {
      id: 'USR-101',
      name: 'Alex Mercer',
      email: 'alex@tripmate.com',
      password: 'Password123!',
      role: 'VIP Explorer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      memberSince: 'March 2024',
      themePreference: 'dark',
      savedDestinations: [1, 3],
      scheduledTrips: [
        {
          id: 101,
          destination: 'Kyoto Ancient Sanctuaries',
          country: 'Japan',
          date: '2026-11-20',
          days: 8,
          travelers: 2,
          budget: '$3,800',
          status: 'Confirmed',
          notes: 'Bamboo forest photography and ryokan reservations confirmed.'
        },
        {
          id: 102,
          destination: 'Serengeti Migration Expedition',
          country: 'Tanzania',
          date: '2027-01-15',
          days: 10,
          travelers: 4,
          budget: '$8,200',
          status: 'Draft',
          notes: 'Hot air balloon safari upgrade pending.'
        }
      ],
      createdAt: '2024-03-15T10:00:00.000Z'
    }
  ];

  constructor() {
    this.loadUsersDatabase();
    this.loadFavorites();
    this.loadTrips();
    this.initTheme();
    this.loadActiveSession();
  }

  getPlannedTrips(): TripPlan[] {
    return [...this.plannedTrips];
  }

  addTrip(trip: Omit<TripPlan, 'id'>): TripPlan {
    const newEntry: TripPlan = {
      ...trip,
      id: Date.now()
    };
    this.plannedTrips.unshift(newEntry);
    this.persistTrips();
    this.syncCurrentUserData();
    return newEntry;
  }

  deleteTrip(id: number): void {
    this.plannedTrips = this.plannedTrips.filter(t => t.id !== id);
    this.persistTrips();
    this.syncCurrentUserData();
  }

  updateTripStatus(id: number, status: 'Draft' | 'Confirmed' | 'Completed'): void {
    const item = this.plannedTrips.find(t => t.id === id);
    if (item) {
      item.status = status;
      this.persistTrips();
      this.syncCurrentUserData();
    }
  }

  isSaved(id: number): boolean {
    return this.savedIds.has(id);
  }

  toggleFavorite(id: number): void {
    if (this.savedIds.has(id)) {
      this.savedIds.delete(id);
    } else {
      this.savedIds.add(id);
    }
    this.persistFavorites();
    this.syncCurrentUserData();
  }

  getSavedIds(): Set<number> {
    return this.savedIds;
  }

  private loadFavorites(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const raw = localStorage.getItem('wander_favs_modern');
        if (raw) {
          this.savedIds = new Set(JSON.parse(raw));
        }
      } catch (e) {}
    }
  }

  private persistFavorites(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('wander_favs_modern', JSON.stringify(Array.from(this.savedIds)));
      } catch (e) {}
    }
  }

  private loadTrips(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const raw = localStorage.getItem('wander_trips_modern');
        if (raw) {
          this.plannedTrips = JSON.parse(raw);
        }
      } catch (e) {}
    }
  }

  // Theme Mode: 'dark' | 'light'
  currentTheme: 'dark' | 'light' = 'dark';

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('wander_theme_mode', this.currentTheme);
      } catch (e) {}
    }
    this.syncCurrentUserData();
  }

  initTheme(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const saved = localStorage.getItem('wander_theme_mode') as 'dark' | 'light';
        if (saved) {
          this.currentTheme = saved;
        }
      } catch (e) {}
    }
  }

  private persistTrips(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem('wander_trips_modern', JSON.stringify(this.plannedTrips));
      } catch (e) {}
    }
  }

  // =========================================================================
  // USER REGISTRATION, AUTHENTICATION & JSON DATA STORE
  // =========================================================================

  register(name: string, email: string, password: string, theme: 'dark' | 'light' = 'dark'): { success: boolean; message: string; user?: UserAccount } {
    const cleanName = (name || '').trim();
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    if (!cleanName || !cleanEmail || !cleanPassword) {
      return { success: false, message: 'All registration fields (Full Name, Email, Password) are required.' };
    }

    if (cleanPassword.length < 3) {
      return { success: false, message: 'Password must be at least 3 characters long.' };
    }

    // Refresh database from local storage to catch any prior writes
    this.loadUsersDatabase();

    // Check if user already exists in JSON database
    const existing = this.usersDatabase.find(u => u.email.toLowerCase() === cleanEmail);
    if (existing) {
      return { success: false, message: `An account with email "${cleanEmail}" is already registered. Please sign in instead.` };
    }

    const newUser: UserAccount = {
      id: 'USR-' + Math.floor(1000 + Math.random() * 9000),
      name: cleanName,
      email: cleanEmail,
      password: cleanPassword,
      role: 'Registered Explorer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
      memberSince: this.formatCurrentMonthYear(),
      themePreference: theme,
      savedDestinations: [],
      scheduledTrips: [],
      createdAt: new Date().toISOString()
    };

    this.usersDatabase.push(newUser);
    this.saveUsersDatabase();

    return {
      success: true,
      message: `Account created successfully for ${cleanName}! You can now sign in with your credentials.`,
      user: newUser
    };
  }

  login(email: string, password: string): { success: boolean; message?: string } {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPassword = (password || '').trim();

    if (!cleanEmail || !cleanPassword) {
      return { success: false, message: 'Please provide both email and password.' };
    }

    // Refresh database from local storage to catch any newly registered users
    this.loadUsersDatabase();

    const matchedUser = this.usersDatabase.find(
      u => u.email.toLowerCase() === cleanEmail && u.password === cleanPassword
    );

    if (matchedUser) {
      this.currentUser = matchedUser;
      matchedUser.lastLoginAt = new Date().toISOString();

      // Apply User's Saved Theme Setting from JSON
      if (matchedUser.themePreference) {
        this.currentTheme = matchedUser.themePreference;
        if (typeof window !== 'undefined' && window.localStorage) {
          try {
            localStorage.setItem('wander_theme_mode', this.currentTheme);
          } catch (e) {}
        }
      }

      // Apply User's Saved Scheduled Trips from JSON
      if (Array.isArray(matchedUser.scheduledTrips)) {
        this.plannedTrips = [...matchedUser.scheduledTrips];
        this.persistTrips();
      }

      // Apply User's Saved Destinations from JSON
      if (Array.isArray(matchedUser.savedDestinations)) {
        this.savedIds = new Set(matchedUser.savedDestinations);
        this.persistFavorites();
      }

      this.saveUsersDatabase();
      this.persistActiveSession();
      return { success: true };
    }

    return { success: false, message: 'Invalid email or password. Please verify your credentials.' };
  }

  logout(): void {
    if (this.currentUser) {
      this.syncCurrentUserData();
    }
    this.currentUser = null;
    this.persistActiveSession();
  }

  syncCurrentUserData(): void {
    if (!this.currentUser) return;

    this.currentUser.themePreference = this.currentTheme;
    this.currentUser.savedDestinations = Array.from(this.savedIds);
    this.currentUser.scheduledTrips = [...this.plannedTrips];

    const idx = this.usersDatabase.findIndex(u => u.id === this.currentUser?.id);
    if (idx !== -1) {
      this.usersDatabase[idx] = { ...this.currentUser };
    }
    this.saveUsersDatabase();
    this.persistActiveSession();
  }

  getUserJsonString(): string {
    if (!this.currentUser) return '{}';
    return JSON.stringify(this.currentUser, null, 2);
  }

  getUsersDatabaseJsonString(): string {
    return JSON.stringify(this.usersDatabase, null, 2);
  }

  private loadUsersDatabase(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const raw = localStorage.getItem(this.USERS_DB_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            this.usersDatabase = parsed;
            return;
          }
        }
      } catch (e) {}
    }
    this.usersDatabase = JSON.parse(JSON.stringify(this.DEFAULT_USERS));
    this.saveUsersDatabase();
  }

  private saveUsersDatabase(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(this.USERS_DB_KEY, JSON.stringify(this.usersDatabase, null, 2));
      } catch (e) {}
    }
  }

  private loadActiveSession(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const raw = localStorage.getItem(this.ACTIVE_SESSION_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          const found = this.usersDatabase.find(u => u.id === parsed.id);
          if (found) {
            this.currentUser = found;
            if (found.themePreference) this.currentTheme = found.themePreference;
            if (Array.isArray(found.scheduledTrips)) this.plannedTrips = [...found.scheduledTrips];
            if (Array.isArray(found.savedDestinations)) this.savedIds = new Set(found.savedDestinations);
          }
        }
      } catch (e) {}
    }
  }

  private persistActiveSession(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        if (this.currentUser) {
          localStorage.setItem(this.ACTIVE_SESSION_KEY, JSON.stringify(this.currentUser));
        } else {
          localStorage.removeItem(this.ACTIVE_SESSION_KEY);
        }
      } catch (e) {}
    }
  }

  private formatCurrentMonthYear(): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date();
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  }
}
