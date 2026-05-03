import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface QuickTab {
  id: string;
  label: string;
  icon: string;
  route: string;
  formType: 'health' | 'term' | 'car' | 'bike' | 'travel' | 'invest';
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  activeTab = signal('health');
  private interval: any;

  tabs: QuickTab[] = [
    { id: 'health', label: 'Health', icon: '🏥', route: '/health-insurance', formType: 'health' },
    { id: 'term',   label: 'Term',   icon: '🛡️', route: '/term-life-insurance', formType: 'term' },
    { id: 'car',    label: 'Car',    icon: '🚗', route: '/car-insurance', formType: 'car' },
    { id: 'bike',   label: 'Bike',   icon: '🏍️', route: '/two-wheeler-insurance', formType: 'bike' },
    { id: 'travel', label: 'Travel', icon: '✈️', route: '/travel-insurance', formType: 'travel' },
    { id: 'invest', label: 'Invest', icon: '📈', route: '/health-insurance', formType: 'invest' },
  ];

  activeRoute = computed(() => this.tabs.find(t => t.id === this.activeTab())?.route ?? '/health-insurance');

  slides = [
    {
      tag: 'Up to 40% Discount',
      tagColor: 'green',
      subtitle: "Get India's Best",
      highlight: 'Health Insurance',
      desc: 'Cashless treatment at 10,000+ hospitals. Plans starting at just ₹500/month.',
      cta: 'Get Free Quote',
      ctaSecondary: 'View Plans',
      route: '/health-insurance',
      stat1: { value: '10,000+', label: 'Network Hospitals' },
      stat2: { value: '₹500/mo', label: 'Starting Premium' },
    },
    {
      tag: '0% GST on All Plans',
      tagColor: 'blue',
      subtitle: 'Get ₹1 Crore',
      highlight: 'Life Cover',
      desc: 'Comprehensive term life insurance with critical illness add-ons.',
      cta: 'Check Premium',
      ctaSecondary: 'View Plans',
      route: '/term-life-insurance',
      stat1: { value: '₹1 Crore', label: 'Max Life Cover' },
      stat2: { value: '₹490/mo', label: 'Starting at' },
    },
    {
      tag: '35% Cheaper Online',
      tagColor: 'orange',
      subtitle: 'Compare & Save on',
      highlight: 'Car Insurance',
      desc: 'Compare 25+ insurers and get the best deal. Instant policy, zero paperwork.',
      cta: 'Get Car Quote',
      ctaSecondary: 'View Plans',
      route: '/car-insurance',
      stat1: { value: '25+', label: 'Insurers' },
      stat2: { value: '2 Min', label: 'Policy Issued' },
    },
  ];

  formValues: Record<string, Record<string, string>> = {
    health:  { planType: 'Individual', age: '30', cover: '₹5 Lakh' },
    term:    { gender: 'Male', age: '28', cover: '₹1 Crore' },
    car:     { regYear: '2021', fuelType: 'Petrol', city: 'Mumbai' },
    bike:    { regYear: '2022', cc: '150cc', city: 'Delhi' },
    travel:  { tripType: 'International', days: '7 Days', members: '1' },
    invest:  { goal: 'Wealth Growth', tenure: '10 Years', amount: '₹5,000/mo' },
  };

  formConfig: Record<string, { label: string; key: string; options?: string[]; type?: string; placeholder?: string }[]> = {
    health: [
      { label: 'Plan Type', key: 'planType', options: ['Individual', 'Family Floater', 'Senior Citizen', 'Group'] },
      { label: 'Age', key: 'age', type: 'number', placeholder: '30' },
      { label: 'Cover Amount', key: 'cover', options: ['₹3 Lakh', '₹5 Lakh', '₹10 Lakh', '₹25 Lakh', '₹50 Lakh'] },
    ],
    term: [
      { label: 'Gender', key: 'gender', options: ['Male', 'Female', 'Other'] },
      { label: 'Age', key: 'age', type: 'number', placeholder: '28' },
      { label: 'Life Cover', key: 'cover', options: ['₹25 Lakh', '₹50 Lakh', '₹1 Crore', '₹2 Crore', '₹5 Crore'] },
    ],
    car: [
      { label: 'Registration Year', key: 'regYear', options: ['2024','2023','2022','2021','2020','2019','2018','2017'] },
      { label: 'Fuel Type', key: 'fuelType', options: ['Petrol', 'Diesel', 'CNG', 'Electric'] },
      { label: 'City', key: 'city', options: ['Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Hyderabad', 'Pune'] },
    ],
    bike: [
      { label: 'Registration Year', key: 'regYear', options: ['2024','2023','2022','2021','2020','2019','2018'] },
      { label: 'Engine CC', key: 'cc', options: ['Up to 100cc', '100–150cc', '150–250cc', '250cc+'] },
      { label: 'City', key: 'city', options: ['Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Hyderabad', 'Pune'] },
    ],
    travel: [
      { label: 'Trip Type', key: 'tripType', options: ['International', 'Domestic', 'Multi-Trip Annual'] },
      { label: 'Duration', key: 'days', options: ['3 Days', '7 Days', '15 Days', '30 Days', '60 Days', '90 Days'] },
      { label: 'Travellers', key: 'members', options: ['1', '2', '3–4', '5+'] },
    ],
    invest: [
      { label: 'Goal', key: 'goal', options: ['Wealth Growth', 'Retirement', 'Child Education', 'Tax Saving'] },
      { label: 'Tenure', key: 'tenure', options: ['5 Years', '10 Years', '15 Years', '20 Years'] },
      { label: 'Monthly Investment', key: 'amount', options: ['₹1,000/mo', '₹2,500/mo', '₹5,000/mo', '₹10,000/mo'] },
    ],
  };

  currentFields = computed(() => this.formConfig[this.activeTab()] ?? this.formConfig['health']);
  currentValues = computed(() => this.formValues[this.activeTab()] ?? {});

  constructor(private router: Router) {}

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

  selectTab(id: string) {
    this.activeTab.set(id);
  }

  getFieldValue(key: string): string {
    return this.formValues[this.activeTab()]?.[key] ?? '';
  }

  setFieldValue(key: string, value: string) {
    if (!this.formValues[this.activeTab()]) this.formValues[this.activeTab()] = {};
    this.formValues[this.activeTab()][key] = value;
  }

  compareNow() {
    this.router.navigate([this.activeRoute()]);
  }

  gotoSlideRoute(route: string) {
    this.router.navigate([route]);
  }
}
