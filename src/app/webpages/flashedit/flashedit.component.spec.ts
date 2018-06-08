import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlasheditComponent } from './flashedit.component';

describe('FlasheditComponent', () => {
  let component: FlasheditComponent;
  let fixture: ComponentFixture<FlasheditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlasheditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlasheditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
