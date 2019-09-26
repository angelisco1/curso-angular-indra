import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ErrorComponent } from '../error.component';
import { USUARIOS_ROUTES } from './usuarios.routes';
import { EditarUsuarioGuard } from './editar-usuario/editar-usuario.guard';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent, canDeactivate: [EditarUsuarioGuard] },
  { path: 'usuarios', component: InicioComponent, children: USUARIOS_ROUTES },
  { path: '**', component: ErrorComponent },
  // { path: 'usuario/:usuarioId', component: UsuarioComponent },
]

export const MiRouterModule = RouterModule.forRoot(APP_ROUTES);