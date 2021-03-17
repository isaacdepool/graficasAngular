import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['2021', '2022', '2023', '2024', '2025', '2026', '2027'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], 
      label: 'Series A', 
      backgroundColor: '#E80C7A', 
      hoverBackgroundColor: 'red'
    },
    { data: [28, 48, 40, 19, 86, 27, 90], 
      label: 'Series B', 
      backgroundColor: '#EF00FF', 
      hoverBackgroundColor: 'red'
    },
    { data: [8, 33, 78, 55, 100, 64, 20], 
      label: 'Series C', 
      backgroundColor: '#900CE8', 
      hoverBackgroundColor: 'red' 
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[ Math.round(Math.random() * 2)].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      ];
  }
}
