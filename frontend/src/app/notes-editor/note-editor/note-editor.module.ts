import { NgModule } from '@angular/core';

import { NoteEditorComponent } from './note-editor.component';

@NgModule({
  declarations: [
    NoteEditorComponent
  ],
  exports: [
    NoteEditorComponent
  ]
})
export class NoteEditorModule { }
