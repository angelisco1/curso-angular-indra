import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  @Input() nombre_cv: string = ''
  @Input() apellidos_cv: string = ''
  @Input() skills_cv: Array<string> = []

  constructor() { }

  ngOnInit() {
  }

}
