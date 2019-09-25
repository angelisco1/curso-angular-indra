import { Component, OnInit, Input } from '@angular/core';
import { Meme } from '../meme';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() meme = new Meme()
  constructor(private memesServ: MemesService) { }

  ngOnInit() {
  }
  guardar() {
    this.memesServ.addMeme(this.meme);

  }
}
