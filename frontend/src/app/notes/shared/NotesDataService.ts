import { Injectable } from '@angular/core';

import { Note } from './Note.model'

@Injectable({
  providedIn: 'root'
})
export class NotesDataService {

  notes: Note[];

  constructor() {
    this.notes = new Array<Note>();
  }

  getNotes(): Note[] {
     return this.notes;
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  removeNote(note: Note) {
    const index = this.notes.indexOf(note);
    if(index !== -1) {
      this.notes.splice(index, 1);
    }
  }


}