import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
