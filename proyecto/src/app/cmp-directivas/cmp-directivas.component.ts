import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {
  colorLetra: string = 'black';
  activado: boolean = true;
  colores = ['azul', 'amarillo', 'rojo'];
  serie = {
    titulo: 'Fear The Walking Dead',
    temporadas: 5,
    capitulos: 100
  }
  miMascota = 'periquito'

  constructor() { }

  ngOnInit() {
  }

}
