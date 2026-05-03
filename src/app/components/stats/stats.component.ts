import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats = [
    { icon: '🏢', value: '51+', label: 'Insurers Offering', sub: 'Competitive Prices' },
    { icon: '👨‍👩‍👧‍👦', value: '1.5 Crore+', label: 'Happy Customers', sub: 'Across India' },
    { icon: '📋', value: '10 Lakh+', label: 'Claims Settled', sub: 'Every Year' },
    { icon: '⭐', value: '4.8/5', label: 'Customer Rating', sub: 'On App Store' },
  ];

  features = [
    {
      icon: '🔍',
      title: 'Compare & Save',
      desc: 'Compare plans from 51+ insurers in just 2 minutes and choose the best deal.',
    },
    {
      icon: '⚡',
      title: 'Instant Policy',
      desc: 'Get your insurance policy in minutes. Zero paperwork, 100% digital.',
    },
    {
      icon: '🤝',
      title: 'Expert Guidance',
      desc: 'Talk to certified insurance advisors available 24/7 for free.',
    },
    {
      icon: '🔒',
      title: 'Hassle-Free Claims',
      desc: 'Dedicated claims support team to assist you at every step.',
    },
  ];
}
