import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcoSnippetComponent } from './marco-snippet/marco-snippet.component';
import { RouterModule } from '@angular/router';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MarcoSnippetComponent
  ],
  exports: [MarcoSnippetComponent],
  imports: [
    CommonModule,
    RouterModule,
    HighlightModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js'),
    },
  },] 
})
export class SnippetModule { }
