import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { HealthInsuranceComponent } from './pages/health-insurance/health-insurance.component';
import { TermLifeInsuranceComponent } from './pages/term-life-insurance/term-life-insurance.component';
import { CarInsuranceComponent } from './pages/car-insurance/car-insurance.component';
import { TwoWheelerInsuranceComponent } from './pages/two-wheeler-insurance/two-wheeler-insurance.component';
import { TravelInsuranceComponent } from './pages/travel-insurance/travel-insurance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'support', component: SupportComponent },
  { path: 'health-insurance', component: HealthInsuranceComponent },
  { path: 'term-life-insurance', component: TermLifeInsuranceComponent },
  { path: 'car-insurance', component: CarInsuranceComponent },
  { path: 'two-wheeler-insurance', component: TwoWheelerInsuranceComponent },
  { path: 'travel-insurance', component: TravelInsuranceComponent },
  { path: '**', redirectTo: '' }
];
