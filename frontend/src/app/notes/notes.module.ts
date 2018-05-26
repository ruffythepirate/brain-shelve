import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { NoteEditorComponent } from './note-editor/note-editor.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    component: NoteEditorComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    NoteEditorComponent
  ],
  exports: [
    NoteEditorComponent
  ]
})
export class NoteEditorModule { }
