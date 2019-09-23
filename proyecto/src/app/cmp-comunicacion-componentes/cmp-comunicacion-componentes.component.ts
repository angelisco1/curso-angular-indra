import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-comunicacion-componentes',
  templateUrl: './cmp-comunicacion-componentes.component.html',
  styleUrls: ['./cmp-comunicacion-componentes.component.css']
})
export class CmpComunicacionComponentesComponent implements OnInit {

  nombreA = 'Arya'
  nombreB = 'Rickon'

  constructor() { }

  ngOnInit() {
  }

}
