import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;

  constructor() { }

  ngOnInit() {
  }


  //funcion solo para el boton de abajo que incrementa
  cambiarValor(valor: number) {
    if ((this.progreso1 >= 100) ||  (this.progreso1 <= 0)) {
      this.progreso1 = this.progreso1 + valor;
    }
  }


}
