import { Component } from '@angular/core';
import { StadisticsModule } from '../../components/stadistics.modue';
import { PrimeNgModule } from '../../primeng.module';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [StadisticsModule, PrimeNgModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  pipe: any = {
    labels: ['A', 'B', 'C'],
    values: [300, 50, 100],
  };
}
