import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meme } from '../meme';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() meme = new Meme()
  @Output() reseteaMeme = new EventEmitter<boolean>();
  constructor(private memesServ: MemesService) { }

  ngOnInit() {
  }
  guardar() {
    this.memesServ.addMeme(this.meme);
    this.reseteaMeme.emit(true);
  }
}
