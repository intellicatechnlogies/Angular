import { Component, Input, ViewChild, ElementRef, OnDestroy, afterNextRender } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AppSettingService } from '../../../../_services/_appSetting/app-setting.service';
import { Subscription } from 'rxjs';
import { theme } from '../../../../_constants/appSetting.constant';
import { chartColors } from '../../../../_constants/chart-colors';

interface doughnutChart {
  label: string[];
  data: number[];
  heading: string;
  color: string[];
  height: number;
}

@Component({
  selector: 'fin-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnDestroy {

  doughnutChart: any;
  subscriptions: Subscription[] = [];
  labelColor!: string;

  @Input() chartDetails!: doughnutChart;
  @ViewChild('doughnutCanvas') private doughnutCanvas!: ElementRef;

  constructor(private _app: AppSettingService) { 
    afterNextRender(() => {
      const currentTheme = this._app.appTheme$.subscribe(currentTheme => {
        this.labelColor = currentTheme === theme.LIGHT ? chartColors.lightTheme : chartColors.darkTheme;
        this.createDoughnutChart();
      });
      this.subscriptions.push(currentTheme);
      this.createDoughnutChart();
    });
  }

  ngOnInit(): void { 
  }

  createDoughnutChart() {
    if (this.doughnutCanvas) {

      if (this.doughnutChart) {
        this.doughnutChart.destroy();
      }

      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: this.chartDetails.label,
          datasets: [
            {
              data: this.chartDetails.data,
              backgroundColor: this.chartDetails.color,
              borderRadius: 10,
              borderWidth: 5,
              borderJoinStyle: 'round',
              borderAlign: 'center',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              align: 'center',
              labels: {
                boxWidth: 20,
                boxHeight: 20,
                padding: 10,
                color: this.labelColor,
                font: {
                  size: 14
                }
              }
            },
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
