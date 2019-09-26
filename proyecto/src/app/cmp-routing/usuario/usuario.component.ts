import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: string = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    })
  }

}
