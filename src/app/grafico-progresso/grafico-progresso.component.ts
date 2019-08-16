import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafico-progresso',
  templateUrl: './grafico-progresso.component.html',
  styleUrls: ['./grafico-progresso.component.css']
})
export class GraficoProgressoComponent implements OnInit {
  
  private porcentagens: number[] = [75, 32, 47, 84];

  public doughnutChartLabels: Label[] = ['Progresso'];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: SingleDataSet[] = [];
  public doughnutChartOptions: ChartOptions = {
    cutoutPercentage: 75,
    rotation: 0.5 * Math.PI,
    legend: {
      display: false
    },
    hover: {
      mode: null
    },
    tooltips: {
      enabled: false
    }
  };
  public doughnutChartColors: Color[] = [
    {
      backgroundColor: [
        '#86c7f3',
        'rgba(255,255,255,1)']
    }
  ]

  constructor() {
    for (let p of this.porcentagens){
      this.doughnutChartData.push([p, 100-p]);
    }
  }

  ngOnInit() {
  }

}