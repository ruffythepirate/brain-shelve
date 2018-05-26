import { TestBed, async } from '@angular/core/testing';
import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent
      ],
    }).compileComponents();
  }));

  it('should create the container', async(() => {
    const fixture = TestBed.createComponent(ContainerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
