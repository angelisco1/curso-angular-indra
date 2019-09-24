import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  texto: string = 'Minions ipsum tatata bala tu bappleees pepete potatoooo poopayee bee do bee do bee do hana dul sae. Gelatooo baboiii la bodaaa poulet tikka masala.'
  precio: number = 12;
  hoy: Date = new Date();
  mascotas: Array<string> = ['Pez', 'Periquito', 'Tortuga']

  constructor() { }

  ngOnInit() {
  }

}
