import { Component, OnInit } from '@angular/core';
import { MemesService } from '../memes.service';
import { Meme } from '../meme';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  memes: Array<Meme> = []
  constructor(private memesServ: MemesService) { }

  ngOnInit() {
    this.memes = this.memesServ.listaMemes;
  }

}
