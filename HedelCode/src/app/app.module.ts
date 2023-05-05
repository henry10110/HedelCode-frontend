import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlUsuarioModule } from './control-usuario/control-usuario.module';
import { MarcoTrabajoModule } from './marco-trabajo/marco-trabajo.module';
import { PlanesModule } from './planes/planes.module';
import { PromocionalModule } from './promocional/promocional.module';
import { RegistroSesionModule } from './registro-sesion/registro-sesion.module';
import { SnippetModule } from './snippet/snippet.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarcoTrabajoModule,
    RegistroSesionModule,
    PromocionalModule,
    ControlUsuarioModule,
    SnippetModule,
    PlanesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
