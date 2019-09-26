import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http'; // Ya no existe en la versión de Angular8

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { ErrorComponent } from './error.component';
import { CardComponent } from './card/card.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { CmpComunicacionComponentesComponent } from './cmp-comunicacion-componentes/cmp-comunicacion-componentes.component';
import { CmpAComponent } from './cmp-comunicacion-componentes/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-comunicacion-componentes/cmp-b/cmp-b.component';
import { EjercicioCvComponent } from './ejercicio-cv/ejercicio-cv.component';
import { FormularioComponent } from './ejercicio-cv/formulario/formulario.component';
import { CvComponent } from './ejercicio-cv/cv/cv.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { HidePipe } from './cmp-pipes/hide.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { BlinkDirective } from './cmp-directivas/blink.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpCComponent } from './cmp-servicios/cmp-c/cmp-c.component';
import { CmpDComponent } from './cmp-servicios/cmp-d/cmp-d.component';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { InicioComponent } from './cmp-routing/inicio/inicio.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { MiRouterModule } from './cmp-routing/app.routes';
import { UsuarioComponent } from './cmp-routing/usuario/usuario.component';
import { EditarUsuarioComponent } from './cmp-routing/editar-usuario/editar-usuario.component';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';
import { SerieComponent } from './cmp-http/serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    ErrorComponent,
    CardComponent,
    CmpDataBindingComponent,
    CmpComunicacionComponentesComponent,
    CmpAComponent,
    CmpBComponent,
    EjercicioCvComponent,
    FormularioComponent,
    CvComponent,
    CmpPipesComponent,
    DoblePipe,
    ReversePipe,
    HidePipe,
    FiltroPipe,
    CmpDirectivasComponent,
    MarcarDirective,
    BlinkDirective,
    CmpServiciosComponent,
    CmpCComponent,
    CmpDComponent,
    CmpRoutingComponent,
    InicioComponent,
    NuevoUsuarioComponent,
    UsuarioComponent,
    EditarUsuarioComponent,
    CmpHttpComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MiRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
