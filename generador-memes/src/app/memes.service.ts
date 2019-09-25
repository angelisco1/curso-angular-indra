import { Injectable } from '@angular/core';
import { Meme } from './meme';

@Injectable({
  providedIn: 'root'
})
export class MemesService {
  listaMemes: Array<Meme> = [];
  constructor() { }

  addMeme(meme: Meme) {
    this.listaMemes.push(meme);
    console.log(this.listaMemes)
  }
}
