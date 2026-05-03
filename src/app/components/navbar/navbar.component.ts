import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeDropdown = signal<string | null>(null);

  signInOpen = signal(false);
  signInTab = signal<'signin' | 'register'>('signin');
  signInStep = signal<'phone' | 'otp' | 'done'>('phone');
  phoneValue = signal('');
  nameValue = signal('');
  emailValue = signal('');
  otpValue = signal('');
  isLoading = signal(false);

  insuranceProducts = [
    { name: 'Health Insurance',        icon: '🏥', route: '/health-insurance',       isInternal: true },
    { name: 'Term Life Insurance',     icon: '🛡️', route: '/term-life-insurance',    isInternal: true },
    { name: 'Car Insurance',           icon: '🚗', route: '/car-insurance',          isInternal: true },
    { name: 'Two Wheeler Insurance',   icon: '🏍️', route: '/two-wheeler-insurance', isInternal: true },
    { name: 'Travel Insurance',        icon: '✈️', route: '/travel-insurance',       isInternal: true },
    { name: 'Home Insurance',          icon: '🏠', route: null,                      isInternal: false },
    { name: 'Investment Plans',        icon: '📈', route: null,                      isInternal: false },
    { name: 'Retirement Plans',        icon: '👴', route: null,                      isInternal: false },
  ];

  renewOptions = [
    { name: 'Renew Health Insurance', icon: '🏥' },
    { name: 'Renew Car Insurance',    icon: '🚗' },
    { name: 'Renew Two Wheeler',      icon: '🏍️' },
    { name: 'Renew Term Plan',        icon: '🛡️' },
  ];

  claimOptions = [
    { name: 'Health Claim',          icon: '🏥' },
    { name: 'Motor Claim',           icon: '🚗' },
    { name: 'Life Insurance Claim',  icon: '🛡️' },
  ];

  @HostListener('window:scroll')
  onScroll() { this.isScrolled.set(window.scrollY > 20); }

  @HostListener('document:keydown.escape')
  onEscape() { this.signInOpen.set(false); }

  toggleDropdown(name: string) {
    this.activeDropdown.set(this.activeDropdown() === name ? null : name);
  }

  closeDropdown() { this.activeDropdown.set(null); }
  toggleMobile()  { this.mobileMenuOpen.set(!this.mobileMenuOpen()); }

  openSignIn(tab: 'signin' | 'register' = 'signin') {
    this.signInTab.set(tab);
    this.signInStep.set('phone');
    this.phoneValue.set('');
    this.nameValue.set('');
    this.emailValue.set('');
    this.otpValue.set('');
    this.signInOpen.set(true);
  }

  closeSignIn() { this.signInOpen.set(false); }

  sendOtp() {
    if (!this.phoneValue() && !this.emailValue()) return;
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      this.signInStep.set('otp');
    }, 1200);
  }

  verifyOtp() {
    if (this.otpValue().length < 4) return;
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      this.signInStep.set('done');
    }, 1000);
  }
}
