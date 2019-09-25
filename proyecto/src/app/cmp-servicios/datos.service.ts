import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  datoEnviado = new EventEmitter<string>();
  datos = ['Dato 1', 'Dato 2']
  constructor() { }

  addDato(nuevoDato) {
    this.datos.push(nuevoDato);
  }

  enviarDato(dato) {
    this.datoEnviado.emit(dato);
  }
}
