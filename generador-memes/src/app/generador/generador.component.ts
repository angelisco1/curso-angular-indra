import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html',
  styleUrls: ['./generador.component.css']
})
export class GeneradorComponent implements OnInit {
  meme: Meme = new Meme('Txt1', 'Txt2', '#333333', 'https://i.imgflip.com/12dxv.jpg');

  constructor() { }

  ngOnInit() {
  }

  resetMeme() {
    this.meme = new Meme('Txt1', 'Txt2', '#333333', 'https://i.imgflip.com/12dxv.jpg');
  }

}
