import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type SortKey = 'premium' | 'cover' | 'claim' | 'rating';

interface TravelPlan {
  id: string;
  insurer: string;
  insurerShort: string;
  planName: string;
  annualPremium: number;
  medicalCover: string;
  tripType: string;
  claimSettlementRatio: number;
  rating: number;
  reviewCount: number;
  coverageRegion: string;
  benefits: string[];
  features: string[];
  badge?: string;
  badgeColor?: string;
}

@Component({
  selector: 'app-travel-insurance',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './travel-insurance.component.html',
  styleUrl: './travel-insurance.component.css'
})
export class TravelInsuranceComponent {
  plans: TravelPlan[] = [
    { id: 'bajaj', insurer: 'Bajaj Allianz', insurerShort: 'BA', planName: 'Travel Care', annualPremium: 1200, medicalCover: '$5,00,000', tripType: 'Single Trip', claimSettlementRatio: 98.2, rating: 4.7, reviewCount: 12840, coverageRegion: 'Worldwide', benefits: ['Trip Cancellation', 'Baggage Loss'], features: ['Cashless Hospitalization', 'Emergency Evacuation', '24x7 Helpline'], badge: 'Best Value', badgeColor: 'green' },
    { id: 'hdfc', insurer: 'HDFC ERGO', insurerShort: 'HE', planName: 'Travel Xpert', annualPremium: 1490, medicalCover: '$5,00,000', tripType: 'Single Trip', claimSettlementRatio: 99.0, rating: 4.8, reviewCount: 10920, coverageRegion: 'Worldwide', benefits: ['Trip Delay', 'Passport Loss'], features: ['High Medical Cover', 'Fast Claims', 'Theft Cover'], badge: 'Top Rated', badgeColor: 'blue' },
    { id: 'icici', insurer: 'ICICI Lombard', insurerShort: 'IL', planName: 'iTravel Plan', annualPremium: 1350, medicalCover: '$2,50,000', tripType: 'Single Trip', claimSettlementRatio: 98.7, rating: 4.6, reviewCount: 9460, coverageRegion: 'Asia + Schengen', benefits: ['Medical Assist', 'Loss of Check-in'], features: ['Digital Policy', 'Instant Issuance', 'Affordable'], badge: 'Popular', badgeColor: 'orange' },
    { id: 'tata', insurer: 'Tata AIG', insurerShort: 'TA', planName: 'Travel Guard', annualPremium: 980, medicalCover: '$2,50,000', tripType: 'Single Trip', claimSettlementRatio: 98.1, rating: 4.6, reviewCount: 8320, coverageRegion: 'Worldwide', benefits: ['Flight Delay', 'Hijack Distress'], features: ['Reliable Network', 'Broad Coverage', '24x7 Aid'], badge: 'Budget', badgeColor: 'purple' },
    { id: 'star', insurer: 'Star Health', insurerShort: 'SH', planName: 'Overseas Travel', annualPremium: 1100, medicalCover: '$3,00,000', tripType: 'Single Trip', claimSettlementRatio: 97.8, rating: 4.5, reviewCount: 7610, coverageRegion: 'Worldwide', benefits: ['Medical Expenses', 'Personal Accident'], features: ['Specialist Health Cover', 'Cashless Abroad', 'Repatriation'], badge: 'Health Focus', badgeColor: 'green' },
    { id: 'niva', insurer: 'Niva Bupa', insurerShort: 'NB', planName: 'Travel Plus', annualPremium: 1650, medicalCover: '$10,00,000', tripType: 'Annual Multi-Trip', claimSettlementRatio: 98.5, rating: 4.7, reviewCount: 6890, coverageRegion: 'Worldwide', benefits: ['Adventure Sports', 'Trip Cancellation', 'Baggage Delay'], features: ['High Cover Option', 'Annual Multi-Trip', 'Sports Cover'], badge: 'Premium', badgeColor: 'blue' },
  ];

  sortBy = signal<SortKey>('premium');
  maxPremium = signal(2000);
  selectedInsurers = signal<string[]>([]);
  compareList = signal<string[]>([]);
  showFilters = signal(false);
  showCompareModal = signal(false);

  insurerList = [...new Set(this.plans.map(p => p.insurer))];

  sortedPlans = computed(() => {
    const filtered = this.plans.filter(p => p.annualPremium <= this.maxPremium() && (this.selectedInsurers().length === 0 || this.selectedInsurers().includes(p.insurer)));
    const sort = this.sortBy();
    return [...filtered].sort((a, b) => {
      if (sort === 'premium') return a.annualPremium - b.annualPremium;
      if (sort === 'claim') return b.claimSettlementRatio - a.claimSettlementRatio;
      if (sort === 'rating') return b.rating - a.rating;
      return a.annualPremium - b.annualPremium;
    });
  });

  comparePlans = computed(() => this.plans.filter(p => this.compareList().includes(p.id)));
  bestClaim = computed(() => Math.max(...this.comparePlans().map(p => p.claimSettlementRatio), 0));

  toggleInsurer(insurer: string) {
    const current = this.selectedInsurers();
    this.selectedInsurers.set(current.includes(insurer) ? current.filter(i => i !== insurer) : [...current, insurer]);
  }

  toggleCompare(id: string) {
    const current = this.compareList();
    if (current.includes(id)) this.compareList.set(current.filter(i => i !== id));
    else if (current.length < 3) this.compareList.set([...current, id]);
  }

  clearFilters() {
    this.maxPremium.set(2000);
    this.selectedInsurers.set([]);
    this.sortBy.set('premium');
  }

  formatPremium(amount: number) { return '₹' + amount.toLocaleString('en-IN'); }
  isInCompare(id: string) { return this.compareList().includes(id); }
  starArray(rating: number) { return Array.from({ length: 5 }, (_, i) => i < Math.floor(rating) ? 'full' : i < rating ? 'half' : 'empty'); }
}
