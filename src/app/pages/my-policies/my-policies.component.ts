import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-policies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-policies.component.html',
  styleUrl: './my-policies.component.css'
})
export class MyPoliciesComponent {
  policies = [
    { type: 'Health Insurance', insurer: 'Bajaj Allianz', policyNo: 'HG-2049-8821', premium: '₹7,188/yr', renewal: '12 Aug 2026', status: 'Active' },
    { type: 'Car Insurance', insurer: 'ICICI Lombard', policyNo: 'CI-1184-5502', premium: '₹6,420/yr', renewal: '03 Nov 2026', status: 'Renew Soon' },
    { type: 'Term Life', insurer: 'HDFC Life', policyNo: 'TL-9001-3344', premium: '₹5,880/yr', renewal: '19 Jan 2027', status: 'Active' }
  ];

  renewals = [
    { label: 'Policies expiring in 90 days', value: '2' },
    { label: 'Claims filed this year', value: '1' },
    { label: 'Saved with PolicyGuide', value: '₹12,400' }
  ];
}
