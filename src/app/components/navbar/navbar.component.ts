import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeDropdown = signal<string | null>(null);

  insuranceProducts = [
    { name: 'Health Insurance', icon: '🏥', link: '/health-insurance' },
    { name: 'Term Life Insurance', icon: '🛡️', link: '#term' },
    { name: 'Car Insurance', icon: '🚗', link: '#car' },
    { name: 'Two Wheeler Insurance', icon: '🏍️', link: '#two-wheeler' },
    { name: 'Travel Insurance', icon: '✈️', link: '#travel' },
    { name: 'Home Insurance', icon: '🏠', link: '#home' },
    { name: 'Investment Plans', icon: '📈', link: '#investment' },
    { name: 'Retirement Plans', icon: '👴', link: '#retirement' },
  ];

  renewOptions = [
    { name: 'Renew Health Insurance', icon: '🏥' },
    { name: 'Renew Car Insurance', icon: '🚗' },
    { name: 'Renew Two Wheeler', icon: '🏍️' },
    { name: 'Renew Term Plan', icon: '🛡️' },
  ];

  claimOptions = [
    { name: 'Health Claim', icon: '🏥' },
    { name: 'Motor Claim', icon: '🚗' },
    { name: 'Life Insurance Claim', icon: '🛡️' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleDropdown(name: string) {
    this.activeDropdown.set(this.activeDropdown() === name ? null : name);
  }

  closeDropdown() {
    this.activeDropdown.set(null);
  }

  toggleMobile() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }
}
