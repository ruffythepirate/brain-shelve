import { TestBed, async } from '@angular/core/testing';
import { NoteListComponent } from './note-list.component';

describe('NoteListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NoteListComponent
      ],
    }).compileComponents();
  }));

  it('should create the note-list', async(() => {
    const fixture = TestBed.createComponent(NoteListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
