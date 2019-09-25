import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DatosService } from 'src/app/cmp-servicios/datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {
  @Output() nombreCambiado = new EventEmitter<string>();
  @Input() miNombre = 'Sansa';
  datoRecibido: string = ''

  constructor(private datosServ: DatosService) { }

  ngOnInit() {
    this.datosServ.datoEnviado.subscribe((dato) => {
      this.datoRecibido = dato;
    })
  }

  muestraEvento(e) {
    console.log(e);
  }

  avisarCambio(nuevoNombre) {
    this.nombreCambiado.emit(nuevoNombre)
    // this.miNombre = nuevoNombre;
  }

}
