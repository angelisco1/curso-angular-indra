import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-d',
  templateUrl: './cmp-d.component.html',
  styleUrls: ['./cmp-d.component.css']
})
export class CmpDComponent implements OnInit {
  datos = [];
  datoRecibido: string = ''
  activado: boolean = false
  constructor(private datosServ: DatosService) { }

  ngOnInit() {
    this.datos = this.datosServ.datos;
    this.datosServ.datoEnviado.subscribe((dato) => {
      this.datoRecibido = dato;
      this.activado = !this.activado;
    });
  }

  guardar(dato) {
    this.datosServ.addDato(dato);
  }
}
