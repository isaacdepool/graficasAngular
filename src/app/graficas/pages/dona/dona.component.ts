import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  
  public colors: Color[] = [
    {
      backgroundColor: [
        '#D41C0B',
        '#EB0049',
        '#FD145C'
      ]
    }
  ]
  
  constructor( ) { }

  ngOnInit(): void {
  }

}
