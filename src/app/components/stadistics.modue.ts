import { NgModule } from '@angular/core';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { LineStylesComponent } from './line-styles/line-styles.component';
import { LineComponent } from './line/line.component';
import { MultiaxisComponent } from './multiaxis/multiaxis.component';
import { PipeComponent } from './pipe/pipe.component';
import { RadarComponent } from './radar/radar.component';
import { StackedBarComponent } from './stacked-bar/stacked-bar.component';
import { VerticalBarComponent } from './vertical-bar/vertical-bar.component';

@NgModule({
  imports: [
    DoughnutComponent,
    LineComponent,
    StackedBarComponent,
    VerticalBarComponent,
    HorizontalBarComponent,
    PipeComponent,
    MultiaxisComponent,
    LineStylesComponent,
    RadarComponent,
  ],
  exports: [
    DoughnutComponent,
    LineComponent,
    StackedBarComponent,
    VerticalBarComponent,
    HorizontalBarComponent,
    PipeComponent,
    MultiaxisComponent,
    LineStylesComponent,
    RadarComponent,
  ],
})
export class StadisticsModule {}
