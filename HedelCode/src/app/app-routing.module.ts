import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcoPrincipalComponent } from './marco-trabajo/marco-principal/marco-principal.component';
import { RegistroComponent } from './registro-sesion/registro/registro.component';
import { SesionComponent } from './registro-sesion/sesion/sesion.component';
import { PrincipalUsuarioComponent } from './control-usuario/principal-usuario/principal-usuario.component';
import { MarcoSnippetComponent } from './snippet/marco-snippet/marco-snippet.component';
import { PaginaPromComponent } from './promocional/pagina-prom/pagina-prom.component';
import { DetallePlanesComponent } from './planes/detalle-planes/detalle-planes.component';

const routes: Routes = [
  {path: 'inicio', component: MarcoPrincipalComponent},
  {path: 'registro', component: RegistroComponent },
  {path: 'sesion', component: SesionComponent},
  {path: 'controlUsuario', component: PrincipalUsuarioComponent},
  {path: 'snippets', component: MarcoSnippetComponent},
  {path: 'promocion', component: PaginaPromComponent},
  {path: 'planes', component: DetallePlanesComponent},
  {path:'**', pathMatch:'full', redirectTo:'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
