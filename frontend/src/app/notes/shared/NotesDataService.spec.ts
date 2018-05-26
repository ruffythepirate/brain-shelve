import { NotesDataService } from './NotesDataService';
import { Note } from './Note.model';

const ANY_NOTE: Note = {
  title: 'hello',
  type: 'text'
};

describe('NotesDataService', () => {
  let service: NotesDataService;
  beforeEach(() => { service = new NotesDataService(); });

  it('#getNotes should return notes', () => {
    expect(service.getNotes()).toBeDefined();
  });

  it('#addNote should add note', () => {
    service.addNote(ANY_NOTE);
    expect(service.getNotes().length).toBe(1);
  });

  it('#removeNote shoud remove the note', () => {
    service.addNote(ANY_NOTE);
    service.removeNote(ANY_NOTE);
    expect(service.getNotes().length).toBe(0);
  });

  it('#removeNote should not throw exception if note is not in array', () => {
    service.removeNote(ANY_NOTE);
  });
});