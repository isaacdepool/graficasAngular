import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    
  ];
  public doughnutChartData: MultiDataSet = [

  ];
  public doughnutChartType: ChartType = 'doughnut';
  
  public colors: Color[] = [
    {
      backgroundColor: [
        '#1C16DE',
        '#D41C0B',
        '#1693DE',
        '#FD145C',
        '#6005FD',
        '#EB0049',
        '#FD145C',
        '#FD145C',
      ]
    }
  ]
  
  constructor( private graficasSvc: GraficasService ) { }

  ngOnInit(): void {

    // this.graficasSvc.getUsuariosRedes()
    //   .subscribe( data => {
    //     console.log(data);
        
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );
    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);

        
    //   });

    this.graficasSvc.getUsuariosDona()
      .subscribe( ({labels, values}) =>{

        this.doughnutChartLabels = labels;
        this.doughnutChartData = values;
      })
  }

}
