import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteEditorComponent } from './notes-editor/note-editor/note-editor.component';

const appRoutes: Routes = [
  {
    path: 'notes',
    component: NoteEditorComponent,
    data: { title: 'Note Editor' }
  },
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }