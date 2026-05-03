import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HealthInsuranceComponent } from './pages/health-insurance/health-insurance.component';
import { TermLifeInsuranceComponent } from './pages/term-life-insurance/term-life-insurance.component';
import { CarInsuranceComponent } from './pages/car-insurance/car-insurance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'health-insurance', component: HealthInsuranceComponent },
  { path: 'term-life-insurance', component: TermLifeInsuranceComponent },
  { path: 'car-insurance', component: CarInsuranceComponent },
  { path: '**', redirectTo: '' }
];
