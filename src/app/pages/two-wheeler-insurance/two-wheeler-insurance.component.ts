import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type SortKey = 'premium' | 'idv' | 'claim' | 'rating';

interface TwoPlan {
  id: string;
  insurer: string;
  insurerShort: string;
  planName: string;
  annualPremium: number;
  idv: number;
  claimSettlementRatio: number;
  rating: number;
  reviewCount: number;
  cashlessGarages: string;
  addOns: string[];
  features: string[];
  badge?: string;
  badgeColor?: string;
}

@Component({
  selector: 'app-two-wheeler-insurance',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './two-wheeler-insurance.component.html',
  styleUrl: './two-wheeler-insurance.component.css'
})
export class TwoWheelerInsuranceComponent {
  plans: TwoPlan[] = [
    { id: 'bajaj', insurer: 'Bajaj Allianz', insurerShort: 'BA', planName: 'Bike Shield Plus', annualPremium: 1980, idv: 85000, claimSettlementRatio: 98.2, rating: 4.7, reviewCount: 18340, cashlessGarages: '4,000+', addOns: ['Zero Dep', 'Roadside Assist'], features: ['Comprehensive Cover', '24x7 Support', 'Quick Claims'], badge: 'Best Value', badgeColor: 'green' },
    { id: 'hdfc', insurer: 'HDFC ERGO', insurerShort: 'HE', planName: 'Two Wheeler Edge', annualPremium: 1750, idv: 82000, claimSettlementRatio: 99.0, rating: 4.8, reviewCount: 16820, cashlessGarages: '6,800+', addOns: ['Zero Dep', 'NCB Protect'], features: ['Cashless Repairs', 'Wide Network', 'Fast Issuance'], badge: 'Top Rated', badgeColor: 'blue' },
    { id: 'icici', insurer: 'ICICI Lombard', insurerShort: 'IL', planName: 'Bike Protect', annualPremium: 1820, idv: 83000, claimSettlementRatio: 98.7, rating: 4.6, reviewCount: 13210, cashlessGarages: '5,200+', addOns: ['Zero Dep', 'Consumables'], features: ['Digital Policy', 'Easy Renewal', 'Theft Cover'], badge: 'Popular', badgeColor: 'orange' },
    { id: 'tata', insurer: 'Tata AIG', insurerShort: 'TA', planName: 'Moto Shield', annualPremium: 1650, idv: 81000, claimSettlementRatio: 98.1, rating: 4.6, reviewCount: 11040, cashlessGarages: '5,500+', addOns: ['Engine Protect', 'Key Loss'], features: ['Reliable Settlements', '24x7 Helpline', 'Add-on Options'], badge: 'Reliable', badgeColor: 'purple' },
    { id: 'newindia', insurer: 'New India Assurance', insurerShort: 'NI', planName: 'Two Wheeler Package', annualPremium: 1490, idv: 78000, claimSettlementRatio: 97.6, rating: 4.4, reviewCount: 8940, cashlessGarages: '3,200+', addOns: ['PA Cover', 'LL Cover'], features: ['Trusted PSU Brand', 'Low Premiums', 'Broad Network'], badge: 'Economy', badgeColor: 'green' },
    { id: 'sbi', insurer: 'SBI General', insurerShort: 'SG', planName: 'Super Bike', annualPremium: 1610, idv: 80000, claimSettlementRatio: 97.9, rating: 4.5, reviewCount: 9610, cashlessGarages: '3,400+', addOns: ['Zero Dep', 'Personal Accident'], features: ['SBI Backed', 'Easy Online Buy', 'Flexible Add-ons'], badge: 'Value', badgeColor: 'blue' },
  ];

  sortBy = signal<SortKey>('premium');
  maxPremium = signal(2500);
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
      if (sort === 'idv') return b.idv - a.idv;
      if (sort === 'claim') return b.claimSettlementRatio - a.claimSettlementRatio;
      return b.rating - a.rating;
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
    this.maxPremium.set(2500);
    this.selectedInsurers.set([]);
    this.sortBy.set('premium');
  }

  formatPremium(amount: number) { return '₹' + amount.toLocaleString('en-IN'); }
  formatIdv(amount: number) { return '₹' + (amount / 1000).toFixed(0) + 'K'; }
  isInCompare(id: string) { return this.compareList().includes(id); }
  starArray(rating: number) { return Array.from({ length: 5 }, (_, i) => i < Math.floor(rating) ? 'full' : i < rating ? 'half' : 'empty'); }
}
