import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p>
      error works!
    </p>
  `,
  styles: [
    `
      p {
        color: red;
        font-size: 30px;
        font-weight: bold;
      }
    ` 
  ]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
