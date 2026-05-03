import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type SortKey = 'premium' | 'idv' | 'claim' | 'rating';

interface CarPlan {
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
  popular?: boolean;
  badge?: string;
  badgeColor?: string;
}

@Component({
  selector: 'app-car-insurance',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './car-insurance.component.html',
  styleUrl: './car-insurance.component.css'
})
export class CarInsuranceComponent {
  plans: CarPlan[] = [
    { id: 'bajaj', insurer: 'Bajaj Allianz', insurerShort: 'BA', planName: 'Car Shield Plus', annualPremium: 8200, idv: 850000, claimSettlementRatio: 98.2, rating: 4.7, reviewCount: 22140, cashlessGarages: '4,000+', addOns: ['Zero Dep', 'Engine Protect'], features: ['24x7 Assistance', 'Roadside Help', 'NCB Protect'], popular: true, badge: 'Best Value', badgeColor: 'green' },
    { id: 'hdfc', insurer: 'HDFC ERGO', insurerShort: 'HE', planName: 'Optima Secure', annualPremium: 7900, idv: 830000, claimSettlementRatio: 99.0, rating: 4.8, reviewCount: 19870, cashlessGarages: '6,800+', addOns: ['Zero Dep', 'Return to Invoice'], features: ['Fast Claims', 'Garage Network', 'Cashless Repairs'], popular: true, badge: 'Top Rated', badgeColor: 'blue' },
    { id: 'newindia', insurer: 'New India Assurance', insurerShort: 'NI', planName: 'Private Car Package', annualPremium: 7050, idv: 800000, claimSettlementRatio: 97.6, rating: 4.4, reviewCount: 14620, cashlessGarages: '3,200+', addOns: ['PA Cover', 'NCB Protect'], features: ['Trusted PSU', 'Affordable Premiums', 'Broad Coverage'], badge: 'Popular', badgeColor: 'orange' },
    { id: 'icici', insurer: 'ICICI Lombard', insurerShort: 'IL', planName: 'Complete Protect', annualPremium: 8450, idv: 860000, claimSettlementRatio: 98.7, rating: 4.7, reviewCount: 17320, cashlessGarages: '5,200+', addOns: ['Zero Dep', 'Consumables'], features: ['Quick Issuance', 'Add-on Options', 'Online Service'], badge: 'Featured', badgeColor: 'purple' },
    { id: 'tata', insurer: 'Tata AIG', insurerShort: 'TA', planName: 'Auto Secure', annualPremium: 7600, idv: 820000, claimSettlementRatio: 98.1, rating: 4.6, reviewCount: 15440, cashlessGarages: '5,500+', addOns: ['Engine Protect', 'Key Loss'], features: ['Reliable Service', 'Smart Add-ons', '24x7 Support'], badge: 'Reliable', badgeColor: 'blue' },
    { id: 'future', insurer: 'Future Generali', insurerShort: 'FG', planName: 'Motor Plan', annualPremium: 7350, idv: 810000, claimSettlementRatio: 97.9, rating: 4.5, reviewCount: 11910, cashlessGarages: '3,700+', addOns: ['Zero Dep', 'Roadside Assist'], features: ['Flexible Coverage', 'Digital Claims', 'Family Support'], badge: 'Value', badgeColor: 'green' },
  ];

  sortBy = signal<SortKey>('premium');
  maxPremium = signal(10000);
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
    this.maxPremium.set(10000);
    this.selectedInsurers.set([]);
    this.sortBy.set('premium');
  }

  formatPremium(amount: number) {
    return '₹' + amount.toLocaleString('en-IN');
  }

  formatIdv(amount: number) {
    return amount >= 1000000 ? '₹' + (amount / 1000000).toFixed(1) + ' Cr' : '₹' + (amount / 100000).toFixed(0) + ' Lakh';
  }

  isInCompare(id: string) {
    return this.compareList().includes(id);
  }

  starArray(rating: number) {
    return Array.from({ length: 5 }, (_, i) => i < Math.floor(rating) ? 'full' : i < rating ? 'half' : 'empty');
  }
}
