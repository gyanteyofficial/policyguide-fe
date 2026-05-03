import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  activeIndex = signal(0);

  testimonials = [
    {
      name: 'Priya Sharma',
      city: 'Mumbai',
      avatar: 'PS',
      rating: 5,
      product: 'Health Insurance',
      review: 'PolicyGuide helped me find the best health insurance plan for my family. The comparison tool is amazing and I saved ₹8,000 annually compared to my old plan!',
      verified: true,
    },
    {
      name: 'Rajesh Kumar',
      city: 'Delhi',
      avatar: 'RK',
      rating: 5,
      product: 'Term Life Insurance',
      review: 'Got a ₹1 Crore term plan in just 15 minutes. The process was completely digital and the premium was 30% lower than what my bank offered. Highly recommended!',
      verified: true,
    },
    {
      name: 'Anitha Menon',
      city: 'Bengaluru',
      avatar: 'AM',
      rating: 4,
      product: 'Car Insurance',
      review: 'Renewed my car insurance in 2 minutes. The cashless garage network is excellent and the claim process was very smooth. Will continue using PolicyGuide.',
      verified: true,
    },
    {
      name: 'Suresh Patel',
      city: 'Ahmedabad',
      avatar: 'SP',
      rating: 5,
      product: 'Investment Plans',
      review: 'The investment plan comparison feature is outstanding. My advisor explained everything clearly and I am now investing ₹10,000 monthly in a ULIP plan.',
      verified: true,
    },
    {
      name: 'Meera Nair',
      city: 'Chennai',
      avatar: 'MN',
      rating: 5,
      product: 'Health Insurance',
      review: 'Excellent customer service! When my mother was hospitalized, the cashless claim was processed within hours. The team was very supportive throughout.',
      verified: true,
    },
  ];

  prev() {
    this.activeIndex.set((this.activeIndex() - 1 + this.testimonials.length) % this.testimonials.length);
  }

  next() {
    this.activeIndex.set((this.activeIndex() + 1) % this.testimonials.length);
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
