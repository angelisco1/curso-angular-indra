import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

interface MiEvento {
  prop: string,
  value: string
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() datosCambiados = new EventEmitter<MiEvento>();
  // @Output() apellidos_cambiados = new EventEmitter<string>();
  @Input() nombre_form: string = ''
  @Input() apellidos_form: string = ''
  @Input() skills_form: Array<string> = []

  constructor() { }

  ngOnInit() {
  }

  cambiarDatos(target) {
    let miEvento = {
      prop: target.name,
      value: target.value
    }
    this.datosCambiados.emit(miEvento)
  }

  // cambiarNombre(nuevoNombre) {
  //   this.nombre_cambiado.emit(nuevoNombre);
  // }

  // cambiarApellidos(nuevoApellido) {
  //   this.apellidos_cambiados.emit(nuevoApellido);
  // }

  addSkill(event) {
    console.log(event.target.value)
    this.skills_form.push(event.target.value)
  }

}
