import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcoSnippetComponent } from './marco-snippet/marco-snippet.component';



@NgModule({
  declarations: [
    MarcoSnippetComponent
  ],
  exports: [MarcoSnippetComponent],
  imports: [
    CommonModule
  ],
  providers: []
})
export class SnippetModule { }
