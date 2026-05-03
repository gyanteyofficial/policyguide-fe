import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  openFaq = signal<number | null>(null);
  formSubmitted = signal(false);
  name = signal('');
  email = signal('');
  phone = signal('');
  topic = signal('General Query');
  message = signal('');

  faqs = [
    { q: 'How does PolicyGuide work?', a: 'PolicyGuide is a comparison platform where you can browse, filter, and compare insurance plans from 51+ top insurers across Health, Life, Car, Two Wheeler, and Travel categories. We display real premiums and ratings so you can make an informed choice.' },
    { q: 'Is using PolicyGuide free?', a: 'Yes, completely free for you. We are compensated by insurers when you purchase through our platform — this never influences the plans we show or their order.' },
    { q: 'How do I compare plans?', a: 'On any comparison page, click "+ Compare" on up to 3 plans. A tray appears at the bottom — click "Compare Now" to see a full side-by-side breakdown of features, premiums, claim ratios, and more.' },
    { q: 'Can I buy insurance directly on PolicyGuide?', a: 'Currently you can compare and shortlist plans. To purchase, click "View Plan" which will take you to the insurer\'s official site with your details pre-filled for a smooth experience.' },
    { q: 'How do I file a claim?', a: 'For claims assistance, contact our support team via phone or email. We will connect you with the right insurer claims department and help you through the documentation process at no charge.' },
    { q: 'What is claim settlement ratio?', a: 'The claim settlement ratio is the percentage of claims an insurer pays out versus total claims received in a year. A higher ratio (e.g., 99%+) generally means the insurer is reliable in honouring claims.' },
    { q: 'Are the premiums shown on PolicyGuide accurate?', a: 'The premiums shown are indicative based on standard profiles (age 30, non-smoker, etc.). Your actual premium may vary based on age, health history, city, and add-ons selected.' },
    { q: 'Is my data safe on PolicyGuide?', a: 'Yes. We are ISO 27001 certified and use industry-standard encryption for all data. We never sell your personal information to third parties.' },
  ];

  helpTopics = [
    { icon: '🏥', title: 'Health Insurance', desc: 'Plan queries, coverage, hospitals' },
    { icon: '🛡️', title: 'Term Life', desc: 'Policy terms, riders, nominations' },
    { icon: '🚗', title: 'Motor Insurance', desc: 'Car & bike coverage, garages' },
    { icon: '✈️', title: 'Travel Insurance', desc: 'Trip cover, medical claims abroad' },
    { icon: '📋', title: 'Claims Assistance', desc: 'File, track, and resolve claims' },
    { icon: '💳', title: 'Renewals', desc: 'Renew your existing policies' },
  ];

  toggleFaq(i: number) {
    this.openFaq.set(this.openFaq() === i ? null : i);
  }

  submitForm() {
    this.formSubmitted.set(true);
  }
}
