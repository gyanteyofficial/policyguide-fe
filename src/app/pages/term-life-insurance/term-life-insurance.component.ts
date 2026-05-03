import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type SortKey = 'premium' | 'coverage' | 'claim' | 'rating';

interface TermPlan {
  id: string;
  insurer: string;
  insurerShort: string;
  planName: string;
  annualPremium: number;
  coverAmount: number;
  claimSettlementRatio: number;
  rating: number;
  reviewCount: number;
  policyTerm: string;
  entryAge: string;
  features: string[];
  riders: string[];
  popular?: boolean;
  badge?: string;
  badgeColor?: string;
}

@Component({
  selector: 'app-term-life-insurance',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './term-life-insurance.component.html',
  styleUrl: './term-life-insurance.component.css'
})
export class TermLifeInsuranceComponent {
  plans: TermPlan[] = [
    { id: 'lic-tech', insurer: 'LIC', insurerShort: 'LI', planName: 'Tech Term', annualPremium: 12480, coverAmount: 10000000, claimSettlementRatio: 98.6, rating: 4.8, reviewCount: 24120, policyTerm: 'Till 85 years', entryAge: '18-65 years', features: ['High Sum Assured', 'Online Purchase', 'Flexible Premium Modes', 'Tax Benefits'], riders: ['Accidental Death', 'Critical Illness'], popular: true, badge: 'Trusted', badgeColor: 'blue' },
    { id: 'hdfc-click2protect', insurer: 'HDFC Life', insurerShort: 'HL', planName: 'Click 2 Protect Super', annualPremium: 10320, coverAmount: 10000000, claimSettlementRatio: 99.0, rating: 4.7, reviewCount: 19420, policyTerm: 'Till 85 years', entryAge: '18-65 years', features: ['Life Stage Protection', 'Waiver of Premium', 'Premium Return Option', 'Tax Benefits'], riders: ['Critical Illness', 'Accidental Disability'], popular: true, badge: 'Best Seller', badgeColor: 'green' },
    { id: 'icici-iprotect', insurer: 'ICICI Prudential', insurerShort: 'IP', planName: 'iProtect Smart', annualPremium: 9480, coverAmount: 10000000, claimSettlementRatio: 97.9, rating: 4.6, reviewCount: 15280, policyTerm: 'Till 80 years', entryAge: '18-60 years', features: ['Return of Premium Option', 'Whole Life Cover', 'Special Exit Value', 'Tax Benefits'], riders: ['Critical Illness', 'Waiver of Premium'], badge: 'Popular', badgeColor: 'orange' },
    { id: 'max-smart', insurer: 'Max Life', insurerShort: 'ML', planName: 'Smart Secure Plus', annualPremium: 8840, coverAmount: 10000000, claimSettlementRatio: 99.2, rating: 4.8, reviewCount: 13710, policyTerm: 'Till 85 years', entryAge: '18-60 years', features: ['Smart Exit Value', 'Low Premiums', 'Joint Life Option', 'Tax Benefits'], riders: ['Critical Illness', 'Accidental Death'], badge: 'Top Rated', badgeColor: 'purple' },
    { id: 'tata-smart', insurer: 'Tata AIA', insurerShort: 'TA', planName: 'Sampoorna Raksha Supreme', annualPremium: 9100, coverAmount: 10000000, claimSettlementRatio: 98.2, rating: 4.7, reviewCount: 11940, policyTerm: 'Till 100 years', entryAge: '18-60 years', features: ['Whole Life Cover', 'Increasing Cover', 'Life Stage Benefit', 'Tax Benefits'], riders: ['Critical Illness', 'Accidental Death'], badge: 'New', badgeColor: 'blue' },
    { id: 'sbi-shield', insurer: 'SBI Life', insurerShort: 'SB', planName: 'eShield Next', annualPremium: 7660, coverAmount: 10000000, claimSettlementRatio: 98.8, rating: 4.5, reviewCount: 8720, policyTerm: 'Till 80 years', entryAge: '18-65 years', features: ['Life Cover at Low Cost', 'Flexible Premium Terms', 'Tax Benefits', 'Option to Increase Cover'], riders: ['Accidental Death', 'Critical Illness'], badge: 'Value', badgeColor: 'green' },
  ];

  sortBy = signal<SortKey>('premium');
  maxPremium = signal(15000);
  selectedInsurers = signal<string[]>([]);
  compareList = signal<string[]>([]);
  showFilters = signal(false);
  showCompareModal = signal(false);

  insurerList = [...new Set(this.plans.map(p => p.insurer))];

  sortedPlans = computed(() => {
    let items = this.plans.filter(p => p.annualPremium <= this.maxPremium() && (this.selectedInsurers().length === 0 || this.selectedInsurers().includes(p.insurer)));
    const sort = this.sortBy();
    return [...items].sort((a, b) => {
      if (sort === 'premium') return a.annualPremium - b.annualPremium;
      if (sort === 'coverage') return b.coverAmount - a.coverAmount;
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
    this.maxPremium.set(15000);
    this.selectedInsurers.set([]);
    this.sortBy.set('premium');
  }

  formatPremium(amount: number) {
    return '₹' + amount.toLocaleString('en-IN');
  }

  formatCoverage(amount: number) {
    return amount >= 10000000 ? '₹' + (amount / 10000000) + ' Cr' : '₹' + (amount / 100000).toFixed(0) + ' Lakh';
  }

  isInCompare(id: string) {
    return this.compareList().includes(id);
  }

  starArray(rating: number) {
    return Array.from({ length: 5 }, (_, i) => i < Math.floor(rating) ? 'full' : i < rating ? 'half' : 'empty');
  }
}
