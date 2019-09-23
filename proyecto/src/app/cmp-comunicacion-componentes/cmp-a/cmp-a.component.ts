import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {
  @Output() nombreCambiado = new EventEmitter<string>();
  @Input() miNombre = 'Sansa';

  constructor() { }

  ngOnInit() {
  }

  avisarCambio(nuevoNombre) {
    this.nombreCambiado.emit(nuevoNombre)
  }

}
