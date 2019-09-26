import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuarios = [
    {id: 23, nombre: 'Charly'},
    {id: 86, nombre: 'Kozinsky'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
