import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html',
  styleUrls: ['./generador.component.css']
})
export class GeneradorComponent implements OnInit {
  meme: Meme = new Meme();

  constructor() { }

  ngOnInit() {
  }

  resetMeme() {
    this.meme = new Meme();
  }

}
