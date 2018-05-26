import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { ContainerComponent } from './container/container.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    component: ContainerComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    NavigationComponent,
    NoteListComponent,
    NoteEditorComponent,
    ContainerComponent
  ],
  exports: [
    ContainerComponent,
    NavigationComponent,
    NoteListComponent,
    NoteEditorComponent
  ]
})
export class NoteEditorModule { }
