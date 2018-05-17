import { Component, OnInit} from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }


  cambiarColor( tema: string, link: any ) {
  this._ajustes.aplicarTema(tema);
  this.aplicarCheck( link );
  /* 
    this._ajustes.aplicarTema( tema );
 */
     // tslint:disable-next-line:prefer-const
  }

  aplicarCheck( link: any ) {

   // Aqui uso el document nativo de javascript que no necesita imporatacion
    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }



 colocarCheck() {
  let selectores: any = document.getElementsByClassName('selector');

  let tema = this._ajustes.ajustes.tema;

  for ( let ref of selectores ) {
    if ( ref.getAttribute('data-theme' ) === tema ) {
      ref.classList.add('working');
      break;
    }
  }


 }



 /*
  colocarCheck() {

    let selectores: any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }

  }
 */


}
