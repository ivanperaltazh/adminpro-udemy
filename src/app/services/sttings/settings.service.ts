import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

   ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  guardarAjustes() {
    console.log('Guardado en el localStorage :');
    console.log(JSON.stringify(this.ajustes));
    // Covertimos json en string:con JSON.stringify()
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      // Covertimos string en json:con JSON.parse()
     this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
     console.log('Cargando del localStorage :');
     console.log(localStorage.getItem('ajustes'));
     this.aplicarTema(this.ajustes.tema);
    } else {
      console.log('Usando valores por defecto');
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: string) {

    let url = `assets/css/colors/${tema}.css`;
     this._document.getElementById('tema').setAttribute('href', url);

     this.ajustes.tema = tema;
     this.ajustes.temaUrl = url;

     this.guardarAjustes();

  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
