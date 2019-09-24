import { Component, OnInit } from '@angular/core';

// type numero_y_string = number | string

@Component({
  selector: 'app-ejercicio-cv',
  templateUrl: './ejercicio-cv.component.html',
  styleUrls: ['./ejercicio-cv.component.css']
})
export class EjercicioCvComponent implements OnInit {
  nombre: string = 'Angel';
  apellidos: string = 'Villalba';
  skills: Array<string> = ['Angular', 'JS']

  constructor() { }
  
  ngOnInit() {
  }

  cambiarDatos(event) {
    this[event.prop] = event.value
  }
}
