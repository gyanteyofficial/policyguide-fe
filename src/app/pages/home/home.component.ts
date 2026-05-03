import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { InsuranceCategoriesComponent } from '../../components/insurance-categories/insurance-categories.component';
import { FeaturedPlansComponent } from '../../components/featured-plans/featured-plans.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    InsuranceCategoriesComponent,
    FeaturedPlansComponent,
    StatsComponent,
    TestimonialsComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-insurance-categories></app-insurance-categories>
    <app-featured-plans></app-featured-plans>
    <app-stats></app-stats>
    <app-testimonials></app-testimonials>
  `
})
export class HomeComponent {}
