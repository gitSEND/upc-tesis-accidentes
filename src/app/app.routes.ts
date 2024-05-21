import { Routes } from '@angular/router';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { PersonComponent } from './pages/person/person.component';

export const routes: Routes = [
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'person',
    component: PersonComponent,
  },
];
