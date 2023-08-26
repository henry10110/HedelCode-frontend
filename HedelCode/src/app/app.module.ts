import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions} from 'ngx-highlightjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlUsuarioModule } from './control-usuario/control-usuario.module';
import { MarcoTrabajoModule } from './marco-trabajo/marco-trabajo.module';
import { PlanesModule } from './planes/planes.module';
import { PromocionalModule } from './promocional/promocional.module';
import { RegistroSesionModule } from './registro-sesion/registro-sesion.module';
import { SnippetModule } from './snippet/snippet.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    HighlightModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // Optional, only if you want the line numbers
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        xml: () => import('highlight.js/lib/languages/xml')
      },
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
