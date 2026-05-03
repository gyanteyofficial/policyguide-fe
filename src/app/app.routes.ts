import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HealthInsuranceComponent } from './pages/health-insurance/health-insurance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'health-insurance', component: HealthInsuranceComponent },
  { path: '**', redirectTo: '' }
];
