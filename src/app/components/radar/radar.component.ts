import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-radar',
  standalone: true,
  imports: [ChartModule],
  template: ` <p-chart type="radar" [data]="data" [options]="options" /> `,
  styles: ``,
})
export class RadarComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );

    this.data = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running',
      ],
      datasets: [
        {
          label: 'My First dataset',
          borderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointBackgroundColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          borderColor: documentStyle.getPropertyValue('--pink-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
          pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary,
          },
          pointLabels: {
            color: textColorSecondary,
          },
        },
      },
    };
  }
}
