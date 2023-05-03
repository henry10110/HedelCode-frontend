import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcoSnippetComponent } from './marco-snippet/marco-snippet.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MarcoSnippetComponent
  ],
  exports: [MarcoSnippetComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class SnippetModule { }
