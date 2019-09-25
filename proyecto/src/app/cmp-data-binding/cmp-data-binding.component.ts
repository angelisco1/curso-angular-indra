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
  imagen: string

  constructor() { }

  ngOnInit() {
    // this.nombre = 2;
    this.nombre = "Angel"
    this.modoEdicion = false;
    this.imagen = "http://fr.web.img6.acsta.net/c_215_290/pictures/17/07/10/13/28/128744.jpg"
  }

  muestraMsg(msg) {
    alert(msg)
    //console.log(msg)
  }

  cambiarNombre(event) {
    console.log('Event', event);
    this.nombre = event.target.value;
  }
}
