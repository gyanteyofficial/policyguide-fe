import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-plans.component.html',
  styleUrl: './featured-plans.component.css'
})
export class FeaturedPlansComponent {
  plans = [
    {
      type: 'Health Insurance',
      icon: '🏥',
      tag: 'Best Seller',
      tagColor: 'blue',
      title: 'Special Health Cover for Families',
      desc: 'Get cashless treatment at 10,000+ hospitals with no room rent capping.',
      highlight: 'No extra cost for parents!',
      cta: 'View Plans',
      gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    },
    {
      type: 'ULIP Investment Plans',
      icon: '📈',
      tag: 'Exclusive for NRI',
      tagColor: 'green',
      title: 'Invest ₹18k per month',
      desc: 'Get ₹2 Crore in return with market-linked ULIP plans.',
      highlight: '& get ₹2 Crore in return',
      cta: 'Invest Now',
      gradient: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
    },
    {
      type: 'Term Life Insurance',
      icon: '🛡️',
      tag: 'Limited Time Offer',
      tagColor: 'orange',
      title: 'Get ₹2 Crore Term Plan',
      desc: 'Comprehensive term insurance plan with waiver of premium benefit.',
      highlight: 'Starting @₹802/month*',
      cta: 'Check Premium',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #6366f1 100%)',
    },
  ];
}
