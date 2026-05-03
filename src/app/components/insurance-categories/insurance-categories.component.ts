import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insurance-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance-categories.component.html',
  styleUrl: './insurance-categories.component.css'
})
export class InsuranceCategoriesComponent {
  categories = [
    {
      id: 'health',
      name: 'Health Insurance',
      icon: '🏥',
      badge: 'Up to 40% Off',
      badgeColor: 'green',
      desc: 'Cashless hospitalization across India',
      starting: '₹500/month',
      popular: true,
    },
    {
      id: 'term',
      name: 'Term Life Insurance',
      icon: '🛡️',
      badge: '0% GST',
      badgeColor: 'blue',
      desc: 'Secure your family\'s future',
      starting: '₹490/month',
      popular: false,
    },
    {
      id: 'car',
      name: 'Car Insurance',
      icon: '🚗',
      badge: '35% Cheaper',
      badgeColor: 'orange',
      desc: 'Comprehensive & third-party covers',
      starting: '₹2,072/year',
      popular: false,
    },
    {
      id: 'two-wheeler',
      name: 'Two Wheeler Insurance',
      icon: '🏍️',
      badge: 'Waiver of Premium',
      badgeColor: 'purple',
      desc: 'Ride safe with full coverage',
      starting: '₹714/year',
      popular: false,
    },
    {
      id: 'investment',
      name: 'Investment Plans',
      icon: '📈',
      badge: 'Most Favourite',
      badgeColor: 'blue',
      desc: 'Grow your wealth smartly',
      starting: 'From ₹1,000/mo',
      popular: true,
    },
    {
      id: 'travel',
      name: 'Travel Insurance',
      icon: '✈️',
      badge: 'New Launch',
      badgeColor: 'green',
      desc: 'Travel worry-free worldwide',
      starting: '₹350/trip',
      popular: false,
    },
    {
      id: 'retirement',
      name: 'Retirement Plans',
      icon: '👴',
      badge: 'Pension for Life',
      badgeColor: 'purple',
      desc: 'Plan your golden years',
      starting: '₹2,000/month',
      popular: false,
    },
    {
      id: 'child',
      name: 'Child Savings Plans',
      icon: '👶',
      badge: 'Tax Benefits',
      badgeColor: 'orange',
      desc: 'Secure your child\'s future',
      starting: '₹1,500/month',
      popular: false,
    },
    {
      id: 'home',
      name: 'Home Insurance',
      icon: '🏠',
      badge: 'All Risk Cover',
      badgeColor: 'green',
      desc: 'Protect your home & belongings',
      starting: '₹1,500/year',
      popular: false,
    },
    {
      id: 'health-parents',
      name: 'Health Insurance for Parents',
      icon: '👨‍👩‍👧',
      badge: '35% Cheaper',
      badgeColor: 'blue',
      desc: 'Senior citizen health plans',
      starting: '₹800/month',
      popular: false,
    },
    {
      id: 'guaranteed',
      name: 'Guaranteed Return Plans',
      icon: '💰',
      badge: 'Up to 6.9% Returns',
      badgeColor: 'orange',
      desc: 'Fixed returns with life cover',
      starting: '₹2,500/month',
      popular: false,
    },
    {
      id: 'ulip',
      name: 'ULIP Plans',
      icon: '📊',
      badge: 'Market Linked',
      badgeColor: 'purple',
      desc: 'Insurance + investment combo',
      starting: '₹1,000/month',
      popular: false,
    },
  ];

  showAll = false;

  get visibleCategories() {
    return this.showAll ? this.categories : this.categories.slice(0, 8);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
