import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-c',
  templateUrl: './cmp-c.component.html',
  styleUrls: ['./cmp-c.component.css']
})
export class CmpCComponent implements OnInit {
  datos = [];
  constructor(private datosServ: DatosService) { }

  ngOnInit() {
    this.datos = this.datosServ.datos;
  }

  guardar(dato) {
    this.datosServ.addDato(dato);
  }

  enviar(dato) {
    this.datosServ.enviarDato(dato);
  }
}
