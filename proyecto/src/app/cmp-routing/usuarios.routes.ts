import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { UsuarioGuard } from './usuario/usuario.guard';
import { EditarUsuarioGuard } from './editar-usuario/editar-usuario.guard';

export const USUARIOS_ROUTES: Routes = [
  { path: ':id/info', component: UsuarioComponent, canActivate: [UsuarioGuard] },
  { path: ':id/editar', component: EditarUsuarioComponent, canDeactivate: [EditarUsuarioGuard] },
]