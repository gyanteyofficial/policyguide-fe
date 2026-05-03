import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  insuranceLinks: { label: string; route: string }[] = [
    { label: 'Health Insurance', route: '/health-insurance' },
    { label: 'Term Life Insurance', route: '/term-life-insurance' },
    { label: 'Car Insurance', route: '/car-insurance' },
    { label: 'Two Wheeler Insurance', route: '/two-wheeler-insurance' },
    { label: 'Travel Insurance', route: '/travel-insurance' },
    { label: 'Home Insurance', route: '#' },
    { label: 'Child Plans', route: '#' },
    { label: 'Retirement Plans', route: '#' },
  ];

  investmentLinks: { label: string; route: string }[] = [
    { label: 'Investment Plans', route: '#' },
    { label: 'ULIP Plans', route: '#' },
    { label: 'Guaranteed Return Plans', route: '#' },
    { label: 'Fixed Deposits', route: '#' },
    { label: 'NRI Plans', route: '#' },
    { label: 'Pension Plans', route: '#' },
  ];

  companyLinks: { label: string; route: string }[] = [
    { label: 'About Us', route: '/about' },
    { label: 'Careers', route: '#' },
    { label: 'Press', route: '#' },
    { label: 'Blog', route: '#' },
    { label: 'Partner With Us', route: '#' },
    { label: 'Sitemap', route: '#' },
  ];

  supportLinks: { label: string; route: string }[] = [
    { label: 'Help Center', route: '/support' },
    { label: 'Claim Support', route: '/support' },
    { label: 'Track Policy', route: '#' },
    { label: 'Renew Policy', route: '#' },
    { label: 'Contact Us', route: '/support' },
    { label: 'Feedback', route: '/support' },
  ];

  partners = ['LIC', 'HDFC Life', 'ICICI Prudential', 'SBI Life', 'Max Life', 'Bajaj Allianz', 'Tata AIA', 'Star Health'];
}
