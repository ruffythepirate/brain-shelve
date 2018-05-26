import { TestBed, async } from '@angular/core/testing';
import { NoteEditorComponent } from './note-editor.component';

describe('NoteEditorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NoteEditorComponent
      ],
    }).compileComponents();
  }));

  it('should create the note-editor', async(() => {
    const fixture = TestBed.createComponent(NoteEditorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
