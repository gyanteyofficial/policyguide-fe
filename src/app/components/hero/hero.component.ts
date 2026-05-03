import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  private interval: any;

  slides = [
    {
      badge: 'Most Popular',
      title: 'Protect Your Family',
      subtitle: "Get India's Best",
      highlight: 'Health Insurance',
      desc: 'Cashless treatment at 10,000+ hospitals. Plans starting at just ₹500/month.',
      cta: 'Get Free Quote',
      ctaSecondary: 'View Plans',
      tag: 'Up to 40% Discount',
      tagColor: 'green',
      stat1: { value: '10,000+', label: 'Network Hospitals' },
      stat2: { value: '₹500/mo', label: 'Starting Premium' },
    },
    {
      badge: 'Term Life',
      title: 'Secure Your Loved Ones',
      subtitle: 'Get ₹1 Crore',
      highlight: 'Life Cover',
      desc: 'Comprehensive term life insurance plans with critical illness add-ons.',
      cta: 'Check Premium',
      ctaSecondary: 'Learn More',
      tag: '0% GST on All Plans',
      tagColor: 'blue',
      stat1: { value: '₹1 Crore', label: 'Max Life Cover' },
      stat2: { value: '₹490/mo', label: 'Starting at' },
    },
    {
      badge: 'Car Insurance',
      title: 'Drive Without Worry',
      subtitle: 'Compare & Save on',
      highlight: 'Car Insurance',
      desc: 'Compare 25+ insurers and get the best deal. Instant policy, zero paperwork.',
      cta: 'Get Car Quote',
      ctaSecondary: 'Compare Plans',
      tag: '35% Cheaper',
      tagColor: 'orange',
      stat1: { value: '25+', label: 'Insurers' },
      stat2: { value: '2 Min', label: 'Policy Issued' },
    }
  ];

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
    }, 4500);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
