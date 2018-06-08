import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashhomeComponent } from './flashhome.component';

describe('FlashhomeComponent', () => {
  let component: FlashhomeComponent;
  let fixture: ComponentFixture<FlashhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
