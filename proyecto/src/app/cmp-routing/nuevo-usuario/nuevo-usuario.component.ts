import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { LoaderService } from '../loader.service';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../editar-usuario/editar-usuario.guard';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit, ComponentCanDeactivate {
  usuarioCreado = false;
  constructor(private router: Router, private loaderServ: LoaderService) { }

  ngOnInit() {
  }

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.usuarioCreado ? true : confirm('Quieres salir?? Perderas los datos.');
  }

  guardar() {
    this.loaderServ.eventLoading.emit(true);
    setTimeout(() => {
      this.usuarioCreado = true;
      console.log('Guardamos los datos');
      this.loaderServ.eventLoading.emit(false);
      this.router.navigate(['/']);
      // this.router.navigateByUrl('/');
    }, 1500);
  }

}
