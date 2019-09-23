import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {

  @Input() miNombre = 'Sansa';

  constructor() { }

  ngOnInit() {
  }

}
