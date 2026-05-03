import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface Plan {
  id: string;
  insurer: string;
  insurerShort: string;
  planName: string;
  planType: string;
  annualPremium: number;
  monthlyPremium: number;
  coverage: number;
  networkHospitals: number;
  claimSettlementRatio: number;
  rating: number;
  reviewCount: number;
  features: string[];
  exclusions: string[];
  roomRent: string;
  noClaimBonus: string;
  preExistingWaiting: string;
  freeHealthCheckup: boolean;
  daycare: boolean;
  ambulance: boolean;
  maternity: boolean;
  popular: boolean;
  badge?: string;
  badgeColor?: string;
}

@Component({
  selector: 'app-health-insurance',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './health-insurance.component.html',
  styleUrl: './health-insurance.component.css'
})
export class HealthInsuranceComponent {
  allPlans: Plan[] = [
    {
      id: 'hdfc-optima',
      insurer: 'HDFC ERGO',
      insurerShort: 'HE',
      planName: 'Optima Secure',
      planType: 'Individual / Family',
      annualPremium: 11892,
      monthlyPremium: 991,
      coverage: 500000,
      networkHospitals: 13000,
      claimSettlementRatio: 99.8,
      rating: 4.8,
      reviewCount: 12540,
      features: ['No Room Rent Limit', 'Restore Benefit', 'Secure Benefit (2x coverage)', '60 Day Pre-Hospitalization', '180 Day Post-Hospitalization'],
      exclusions: ['Cosmetic Surgery', 'Self-inflicted Injuries', 'War & Nuclear Risks'],
      roomRent: 'No Limit',
      noClaimBonus: 'Up to 100%',
      preExistingWaiting: '36 months',
      freeHealthCheckup: true,
      daycare: true,
      ambulance: true,
      maternity: false,
      popular: true,
      badge: 'Best Seller',
      badgeColor: 'blue'
    },
    {
      id: 'star-family',
      insurer: 'Star Health',
      insurerShort: 'SH',
      planName: 'Family Health Optima',
      planType: 'Family Floater',
      annualPremium: 8496,
      monthlyPremium: 708,
      coverage: 500000,
      networkHospitals: 14000,
      claimSettlementRatio: 99.1,
      rating: 4.6,
      reviewCount: 18920,
      features: ['Largest Hospital Network', 'Automatic Recharge', 'No Pre-Medical Check-up', '30 Day Pre-Hospitalization', '60 Day Post-Hospitalization'],
      exclusions: ['Dental Treatment', 'Vision Correction', 'Obesity Treatment'],
      roomRent: 'Single Private AC Room',
      noClaimBonus: 'Up to 100%',
      preExistingWaiting: '48 months',
      freeHealthCheckup: true,
      daycare: true,
      ambulance: true,
      maternity: true,
      popular: true,
      badge: 'Most Reviews',
      badgeColor: 'green'
    },
    {
      id: 'niva-reassure',
      insurer: 'Niva Bupa',
      insurerShort: 'NB',
      planName: 'ReAssure 2.0',
      planType: 'Individual / Family',
      annualPremium: 10188,
      monthlyPremium: 849,
      coverage: 500000,
      networkHospitals: 10000,
      claimSettlementRatio: 91.6,
      rating: 4.7,
      reviewCount: 9840,
      features: ['Lock the Clock Premium', 'ReAssure Benefit (unlimited refill)', 'No-Claim Bonus Super', '60 Day Pre-Hospitalization', '180 Day Post-Hospitalization'],
      exclusions: ['Non-allopathic Treatment', 'Experimental Procedures'],
      roomRent: 'No Limit',
      noClaimBonus: 'Up to 50% per year',
      preExistingWaiting: '36 months',
      freeHealthCheckup: true,
      daycare: true,
      ambulance: true,
      maternity: false,
      popular: false,
      badge: 'New',
      badgeColor: 'purple'
    },
    {
      id: 'icici-complete',
      insurer: 'ICICI Lombard',
      insurerShort: 'IL',
      planName: 'Complete Health Insurance',
      planType: 'Individual / Family',
      annualPremium: 9756,
      monthlyPremium: 813,
      coverage: 500000,
      networkHospitals: 6500,
      claimSettlementRatio: 97.8,
      rating: 4.5,
      reviewCount: 7640,
      features: ['Wellness Program', 'OPD Coverage', '15% No Claim Discount', '30 Day Pre-Hospitalization', '60 Day Post-Hospitalization'],
      exclusions: ['Adventure Sports Injuries', 'Substance Abuse'],
      roomRent: 'Single Private Room',
      noClaimBonus: 'Up to 75%',
      preExistingWaiting: '48 months',
      freeHealthCheckup: true,
      daycare: true,
      ambulance: true,
      maternity: false,
      popular: false
    },
    {
      id: 'bajaj-healthguard',
      insurer: 'Bajaj Allianz',
      insurerShort: 'BA',
      planName: 'Health Guard Gold',
      planType: 'Individual / Family',
      annualPremium: 7188,
      monthlyPremium: 599,
      coverage: 500000,
      networkHospitals: 8000,
      claimSettlementRatio: 98.0,
      rating: 4.4,
      reviewCount: 11230,
      features: ['Unlimited Recharge', 'Bariatric Surgery Cover', 'Mental Healthcare', '60 Day Pre-Hospitalization', '90 Day Post-Hospitalization'],
      exclusions: ['Experimental Drugs', 'Obesity-related Conditions'],
      roomRent: 'Single AC Room',
      noClaimBonus: 'Up to 130%',
      preExistingWaiting: '36 months',
      freeHealthCheckup: true,
      daycare: true,
      ambulance: true,
      maternity: true,
      popular: false,
      badge: 'Best Value',
      badgeColor: 'orange'
    },
    {
      id: 'aditya-activ',
      insurer: 'Aditya Birla',
      insurerShort: 'AB',
      planName: 'Activ Health Platinum',
      planType: 'Individual / Family',
      annualPremium: 11496,
      monthlyPremium: 958,
      coverage: 500000,
      networkHospitals: 10000,
      claimSettlementRatio: 95.4,
      rating: 4.7,
      reviewCount: 5820,
      features: ['Chronic Management Program', 'HealthReturns™ up to 100%', 'OPD Cover', '60 Day Pre-Hospitalization', '180 Day Post-Hospitalization'],
      exclusions: ['Congenital Diseases (initial period)', 'Cosmetic Surgery'],
      roomRent: 'No Limit',
      noClaimBonus: 'Up to 50%',
      preExistingWaiting: '36 months',
      freeHealthCheckup: true,
      daycare: true,
      ambulance: true,
      maternity: true,
      popular: false
    },
    {
      id: 'care-supreme',
      insurer: 'Care Health',
      insurerShort: 'CH',
      planName: 'Care Supreme',
      planType: 'Individual / Family',
      annualPremium: 8988,
      monthlyPremium: 749,
      coverage: 500000,
      networkHospitals: 25000,
      claimSettlementRatio: 95.2,
      rating: 4.6,
      reviewCount: 8340,
      features: ['Largest Hospital Network (25k+)', 'Instant Claim Settlement', 'Annual Health Check-up', '30 Day Pre-Hospitalization', '60 Day Post-Hospitalization'],
      exclusions: ['Non-Allopathic Treatment', 'External Congenital Defects'],
      roomRent: 'No Limit',
      noClaimBonus: 'Up to 150%',
      preExistingWaiting: '48 months',
      freeHealthCheckup: true,
      daycare: true,
      ambulance: true,
      maternity: false,
      popular: false
    },
    {
      id: 'tata-medicare',
      insurer: 'Tata AIG',
      insurerShort: 'TA',
      planName: 'MediCare Premier',
      planType: 'Individual / Family',
      annualPremium: 7992,
      monthlyPremium: 666,
      coverage: 500000,
      networkHospitals: 8000,
      claimSettlementRatio: 92.5,
      rating: 4.5,
      reviewCount: 4890,
      features: ['Inflation-Proof Coverage', 'International Emergency Cover', 'Air Ambulance', '60 Day Pre-Hospitalization', '90 Day Post-Hospitalization'],
      exclusions: ['Pre-existing Diseases (initial period)', 'Elective Procedures'],
      roomRent: 'Single Private Room',
      noClaimBonus: 'Up to 100%',
      preExistingWaiting: '48 months',
      freeHealthCheckup: true,
      daycare: true,
      ambulance: true,
      maternity: false,
      popular: false
    }
  ];

  sortBy = signal<'premium' | 'rating' | 'hospitals' | 'csr'>('premium');
  maxPremium = signal(15000);
  selectedInsurers = signal<string[]>([]);
  selectedCoverage = signal<number>(500000);
  selectedFeatures = signal<string[]>([]);
  compareList = signal<string[]>([]);
  showFilters = signal(false);
  showCompareModal = signal(false);

  coverageOptions = [
    { label: '₹3 Lakh', value: 300000 },
    { label: '₹5 Lakh', value: 500000 },
    { label: '₹10 Lakh', value: 1000000 },
    { label: '₹25 Lakh', value: 2500000 },
    { label: '₹50 Lakh', value: 5000000 },
    { label: '₹1 Crore', value: 10000000 },
  ];

  featureFilters = [
    { label: 'No Room Rent Limit', key: 'roomRentNoLimit' },
    { label: 'Free Health Checkup', key: 'freeHealthCheckup' },
    { label: 'Maternity Cover', key: 'maternity' },
    { label: 'Daycare Procedures', key: 'daycare' },
    { label: 'Ambulance Cover', key: 'ambulance' },
  ];

  insurerList = [...new Set(this.allPlans.map(p => p.insurer))];

  sortedAndFilteredPlans = computed(() => {
    let plans = this.allPlans.filter(p => {
      const premiumOk = p.annualPremium <= this.maxPremium();
      const insurerOk = this.selectedInsurers().length === 0 || this.selectedInsurers().includes(p.insurer);
      return premiumOk && insurerOk;
    });

    const sort = this.sortBy();
    plans = [...plans].sort((a, b) => {
      if (sort === 'premium') return a.annualPremium - b.annualPremium;
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'hospitals') return b.networkHospitals - a.networkHospitals;
      if (sort === 'csr') return b.claimSettlementRatio - a.claimSettlementRatio;
      return 0;
    });
    return plans;
  });

  comparePlans = computed(() => this.allPlans.filter(p => this.compareList().includes(p.id)));

  toggleInsurer(insurer: string) {
    const current = this.selectedInsurers();
    if (current.includes(insurer)) {
      this.selectedInsurers.set(current.filter(i => i !== insurer));
    } else {
      this.selectedInsurers.set([...current, insurer]);
    }
  }

  toggleCompare(id: string) {
    const current = this.compareList();
    if (current.includes(id)) {
      this.compareList.set(current.filter(i => i !== id));
    } else if (current.length < 3) {
      this.compareList.set([...current, id]);
    }
  }

  isInCompare(id: string) {
    return this.compareList().includes(id);
  }

  clearFilters() {
    this.maxPremium.set(15000);
    this.selectedInsurers.set([]);
    this.selectedFeatures.set([]);
    this.sortBy.set('premium');
  }

  activeFiltersCount = computed(() => {
    let count = 0;
    if (this.maxPremium() < 15000) count++;
    if (this.selectedInsurers().length > 0) count++;
    if (this.selectedFeatures().length > 0) count++;
    return count;
  });

  formatPremium(p: number): string {
    return '₹' + p.toLocaleString('en-IN');
  }

  formatCoverage(c: number): string {
    if (c >= 10000000) return '₹' + (c / 10000000) + ' Crore';
    if (c >= 100000) return '₹' + (c / 100000) + ' Lakh';
    return '₹' + c.toLocaleString('en-IN');
  }

  formatHospitals(h: number): string {
    if (h >= 1000) return (h / 1000).toFixed(0) + 'k+';
    return h + '+';
  }

  maxCsr = computed(() => Math.max(...this.comparePlans().map(p => p.claimSettlementRatio)));

  getStarArray(rating: number): string[] {
    return Array(5).fill('').map((_, i) => {
      if (i < Math.floor(rating)) return 'full';
      if (i < rating) return 'half';
      return 'empty';
    });
  }
}
