import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {
  // Tipos: string, number, boolean, any, Array<number>, Array<string>, Animal
  nombre: string;
  modoEdicion: boolean;

  constructor() { }

  ngOnInit() {
    // this.nombre = 2;
    this.nombre = "Angel"
    this.modoEdicion = false;
  }

  muestraMsg() {
    console.log('eeeeei')
  }

  cambiarNombre(event) {
    console.log('Event', event);
    this.nombre = event.target.value;
  }
}
