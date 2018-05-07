import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartLabels: string[] =  [];
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartType: string = '';
  @Input() leyenda: string = '';

  constructor() { }

  ngOnInit() {
  }

}
