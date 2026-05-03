import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  insuranceLinks = [
    'Health Insurance', 'Term Life Insurance', 'Car Insurance',
    'Two Wheeler Insurance', 'Travel Insurance', 'Home Insurance',
    'Child Plans', 'Retirement Plans'
  ];

  investmentLinks = [
    'Investment Plans', 'ULIP Plans', 'Guaranteed Return Plans',
    'Fixed Deposits', 'NRI Plans', 'Pension Plans'
  ];

  companyLinks = [
    'About Us', 'Careers', 'Press', 'Blog',
    'Partner With Us', 'Sitemap'
  ];

  supportLinks = [
    'Help Center', 'Claim Support', 'Track Policy',
    'Renew Policy', 'Contact Us', 'Feedback'
  ];

  partners = ['LIC', 'HDFC Life', 'ICICI Prudential', 'SBI Life', 'Max Life', 'Bajaj Allianz', 'Tata AIA', 'Star Health'];
}
