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

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    ErrorComponent,
    CardComponent,
    CmpDataBindingComponent,
    CmpComunicacionComponentesComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }